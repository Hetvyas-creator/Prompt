from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from diffusers import StableDiffusionPipeline
import io
import base64
from PIL import Image
import logging

# Enable logging for detailed output
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

class LocalImageGenerator:
    def __init__(self):
        self.pipe = None
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        logger.info(f"Using device: {self.device}")

    def load_model(self):
        try:
            logger.info("Loading Stable Diffusion model...")
            self.pipe = StableDiffusionPipeline.from_pretrained(
                "runwayml/stable-diffusion-v1-5",
                torch_dtype=torch.float16 if self.device == "cuda" else torch.float32
            )
            self.pipe = self.pipe.to(self.device)
            if self.device == "cpu":
                self.pipe.enable_attention_slicing()
            logger.info("✅ Model loaded successfully!")
            return True
        except Exception as e:
            import traceback
            logger.error(f"❌ Model loading failed: {e}")
            traceback.print_exc()
            return False

    def generate_image(self, prompt, width=512, height=512, steps=20):
        try:
            logger.info(f"Generating image for prompt: '{prompt}'")
            if not self.pipe:
                raise Exception("Model not loaded")
            if self.device == "cuda":
                with torch.autocast("cuda"):
                    image = self.pipe(
                        prompt,
                        width=width,
                        height=height,
                        num_inference_steps=steps,
                        guidance_scale=7.5,
                        num_images_per_prompt=1
                    ).images[0]
            else:
                image = self.pipe(
                    prompt,
                    width=width,
                    height=height,
                    num_inference_steps=steps,
                    guidance_scale=7.5,
                    num_images_per_prompt=1
                ).images[0]
            img_buffer = io.BytesIO()
            image.save(img_buffer, format='PNG')
            img_buffer.seek(0)
            img_base64 = base64.b64encode(img_buffer.getvalue()).decode()
            logger.info("✅ Image generated successfully!")
            return {
                'success': True,
                'image': f"data:image/png;base64,{img_base64}",
                'prompt': prompt
            }
        except Exception as e:
            import traceback
            logger.error(f"❌ Generation failed: {e}")
            traceback.print_exc()
            return {
                'success': False,
                'error': str(e)
            }

generator = LocalImageGenerator()

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'model_loaded': generator.pipe is not None,
        'device': generator.device
    })

@app.route('/load-model', methods=['POST'])
def load_model():
    logger.info("POST /load-model endpoint triggered.")
    try:
        success = generator.load_model()
        logger.info(f"load_model endpoint returning: {success}")
        return jsonify({
            'success': success,
            'message': 'Model loaded successfully' if success else 'Failed to load model - SEE BACKEND CONSOLE FOR ERRORS'
        })
    except Exception as e:
        import traceback
        logger.error(f"Model loading failed in endpoint: {e}")
        tb = traceback.format_exc()
        print(tb)
        return jsonify({
            'success': False,
            'message': f'Failed to load model: {e}',
            'trace': tb
        })

@app.route('/generate', methods=['POST'])
def generate_image():
    try:
        data = request.json
        prompt = data.get('prompt', '')
        if not prompt:
            return jsonify({'success': False, 'error': 'No prompt provided'}), 400
        if not generator.pipe:
            return jsonify({'success': False, 'error': 'Model not loaded'}), 503
        result = generator.generate_image(
            prompt=prompt,
            width=data.get('width', 512),
            height=data.get('height', 512),
            steps=data.get('steps', 20)
        )
        return jsonify(result)
    except Exception as e:
        import traceback
        logger.error(f"API error: {e}")
        tb = traceback.format_exc()
        print(tb)
        return jsonify({'success': False, 'error': str(e), 'trace': tb}), 500

if __name__ == '__main__':
    print("🚀 Starting AI Prompt Master Backend...")
    print("📋 To use:")
    print("1. First call POST /load-model to load Stable Diffusion")
    print("2. Then call POST /generate with {'prompt': 'your prompt'}")
    print("3. Access at http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)
