// AI Prompt Master - Complete Educational Platform with Research-Based Progressive Prompting
class AIPromptMaster {
    constructor() {
        console.log('🧙‍♂️ Initializing Enhanced AI Prompt Master...');
        this.initializeData();
        this.loadUserData();
        this.setupEventListeners();
        this.updateUI();
        this.showScreen('map');
        console.log('✅ Enhanced AI Prompt Master initialized successfully');
    }

    initializeData() {
        // Research-Based Progressive Level System
        this.levels = {
            1: {
                id: 1,
                title: "Foundation",
                subtitle: "Object Recognition",
                icon: "🎯",
                difficulty: "Beginner",
                objective: "Identify and describe concrete subjects clearly",
                learningGoal: "Learn to identify concrete nouns and use descriptive words effectively",
                concepts: [
                    "Start with a CONCRETE SUBJECT - specific nouns like 'cat', 'bicycle', 'castle'",
                    "Add 2-3 DESCRIPTIVE WORDS - colors (red, blue), sizes (big, tiny), materials (wooden, metal)",
                    "Be SPECIFIC - 'red sports car' is better than 'vehicle'",
                    "Avoid abstract concepts - use tangible, visible objects"
                ],
                examples: {
                    good: ["red bicycle", "shiny red mountain bike", "ancient wooden castle", "small fluffy kitten"],
                    bad: ["vehicle", "structure", "animal", "thing", "beautiful entity"]
                },
                challenge: "Create a prompt with a concrete subject and 2-3 descriptive words",
                wordLimit: 8,
                minScore: 65,
                progressionRequirement: 3, // Must pass 3 consecutive times
                hints: [
                    "Choose a specific object you can see and touch",
                    "Add colors: red, blue, green, golden, silver",
                    "Add sizes: big, small, tiny, huge, massive",
                    "Add materials: wooden, metal, glass, stone"
                ],
                validation: {
                    requireSubject: true,
                    requireDescriptors: true,
                    minDescriptors: 2,
                    maxDescriptors: 3
                },
                skillBadges: ["🎨 Color Master", "📏 Size Expert", "🧱 Material Guru"]
            },
            2: {
                id: 2,
                title: "Environment",
                subtitle: "Scene Building",
                icon: "🏞️",
                difficulty: "Beginner",
                objective: "Combine subjects with settings and spatial relationships",
                learningGoal: "Learn to create complete scenes with location and spatial context",
                concepts: [
                    "Every scene needs a WHERE - add locations like 'park', 'forest', 'room'",
                    "Use SPATIAL WORDS - 'in', 'on', 'beside', 'under', 'near'",
                    "Create RELATIONSHIPS - show how objects relate to their environment",
                    "Build CONTEXT - help AI understand the complete scene"
                ],
                examples: {
                    good: ["red bicycle in a sunny park", "wooden castle on a hilltop", "small kitten beside a window"],
                    bad: ["red bicycle", "castle somewhere", "kitten location"]
                },
                challenge: "Create a scene showing both WHAT and WHERE with spatial relationships",
                wordLimit: 12,
                minScore: 75,
                progressionRequirement: 3,
                hints: [
                    "Add location: in the park, on the mountain, beside the lake",
                    "Use spatial words: on, in, beside, under, near, behind",
                    "Think about natural environments for your subject",
                    "Formula: [subject] + [spatial word] + [location]"
                ],
                validation: {
                    requireSubject: true,
                    requireDescriptors: true,
                    requireLocation: true,
                    requireSpatial: true,
                    minDescriptors: 2
                },
                skillBadges: ["🗺️ Location Expert", "📐 Spatial Master", "🌍 Scene Builder"]
            },
            3: {
                id: 3,
                title: "Atmosphere",
                subtitle: "Mood & Lighting",
                icon: "🌅",
                difficulty: "Intermediate",
                objective: "Add atmospheric elements and lighting conditions",
                learningGoal: "Master lighting and mood to control atmosphere and emotional impact",
                concepts: [
                    "LIGHTING changes everything - same scene, different mood with different light",
                    "Natural lighting: sunrise, sunset, golden hour, moonlight, daylight",
                    "Artificial lighting: candlelight, neon lights, spotlight, firelight",
                    "MOOD words: peaceful, dramatic, mysterious, serene, vibrant"
                ],
                examples: {
                    good: ["red bicycle in sunny park during golden hour", "wooden castle on hilltop under moonlight", "kitten beside window in soft morning light"],
                    bad: ["red bicycle in park at time", "castle on hill with light", "kitten by window bright"]
                },
                challenge: "Create an atmospheric scene with specific lighting and mood",
                wordLimit: 15,
                minScore: 75,
                progressionRequirement: 3,
                hints: [
                    "Add time: during sunrise, at sunset, in golden hour",
                    "Add lighting: in bright sunlight, under soft moonlight, with dramatic shadows",
                    "Add mood: peaceful, mysterious, dramatic, serene",
                    "Natural light: sunrise, sunset, golden hour, moonlight, daylight"
                ],
                validation: {
                    requireSubject: true,
                    requireDescriptors: true,
                    requireLocation: true,
                    requireSpatial: true,
                    requireLighting: true,
                    requireMood: true,
                    minDescriptors: 2
                },
                skillBadges: ["🌅 Lighting Expert", "🎭 Mood Master", "🌤️ Atmosphere Pro"]
            },
            4: {
                id: 4,
                title: "Style",
                subtitle: "Artistic Expression",
                icon: "🎨",
                difficulty: "Intermediate",
                objective: "Apply artistic styles and visual techniques",
                learningGoal: "Understand and apply different artistic styles and visual techniques",
                concepts: [
                    "ART STYLES transform your image completely",
                    "Traditional media: oil painting, watercolor, pencil sketch, charcoal drawing",
                    "Digital styles: digital art, concept art, 3D render, pixel art",
                    "Art movements: impressionist, realistic, abstract, surrealist, minimalist"
                ],
                examples: {
                    good: ["red bicycle in sunny park during golden hour, watercolor painting style", "wooden castle on hilltop under moonlight, oil painting", "kitten beside window in soft light, digital art style"],
                    bad: ["red bicycle in park looking artistic", "castle in some style", "kitten drawn nicely"]
                },
                challenge: "Create artwork using a specific artistic style or medium",
                wordLimit: 18,
                minScore: 75,
                progressionRequirement: 3,
                hints: [
                    "Add art medium: watercolor painting, oil painting, digital art, sketch",
                    "Add art movement: impressionist, realistic, abstract, minimalist",
                    "Traditional: watercolor, oil painting, pencil sketch, charcoal",
                    "Digital: digital art, concept art, 3D render, pixel art"
                ],
                validation: {
                    requireSubject: true,
                    requireDescriptors: true,
                    requireLocation: true,
                    requireSpatial: true,
                    requireLighting: true,
                    requireMood: true,
                    requireArtStyle: true,
                    minDescriptors: 2
                },
                skillBadges: ["🖼️ Style Connoisseur", "🎭 Art Movement Expert", "🖌️ Medium Master"]
            },
            5: {
                id: 5,
                title: "Technical Mastery",
                subtitle: "Professional Prompting",
                icon: "🔧",
                difficulty: "Advanced",
                objective: "Use advanced parameters and professional terminology",
                learningGoal: "Master professional terminology and technical parameters for expert-level prompts",
                concepts: [
                    "PROFESSIONAL TERMS elevate your prompts to expert level",
                    "Quality modifiers: masterpiece, highly detailed, award-winning, professional",
                    "Technical terms: high resolution, cinematic, dynamic composition, depth of field",
                    "Camera angles: wide angle, close-up, bird's eye view, low angle"
                ],
                examples: {
                    good: ["red bicycle in sunny park during golden hour, watercolor painting, highly detailed, dynamic composition", "wooden castle on hilltop under moonlight, oil painting, masterpiece quality, cinematic lighting"],
                    bad: ["bicycle in park, nice quality", "castle with good details", "professional looking image"]
                },
                challenge: "Create a masterpiece combining all techniques with professional terminology",
                wordLimit: 25,
                minScore: 75,
                progressionRequirement: 3,
                hints: [
                    "Add quality: masterpiece, highly detailed, award-winning, professional",
                    "Add technical: high resolution, cinematic, dynamic composition",
                    "Add camera: wide angle, close-up, macro, telephoto",
                    "Combine everything: subject + scene + lighting + style + technical"
                ],
                validation: {
                    requireSubject: true,
                    requireDescriptors: true,
                    requireLocation: true,
                    requireSpatial: true,
                    requireLighting: true,
                    requireMood: true,
                    requireArtStyle: true,
                    requireTechnical: true,
                    requireQuality: true,
                    minDescriptors: 2
                },
                skillBadges: ["🏆 Master Prompter", "⚡ Technical Expert", "💎 Quality Guru"]
            }
        };

        // Enhanced keyword detection databases
        this.keywords = {
            subjects: {
                animals: ['cat', 'dog', 'bird', 'horse', 'lion', 'tiger', 'elephant', 'rabbit', 'fox', 'wolf', 'bear', 'deer', 'kitten', 'puppy'],
                people: ['person', 'man', 'woman', 'child', 'boy', 'girl', 'wizard', 'warrior', 'knight', 'princess', 'king', 'queen'],
                objects: ['bicycle', 'car', 'motorcycle', 'boat', 'airplane', 'train', 'chair', 'table', 'lamp', 'book', 'guitar', 'piano'],
                buildings: ['house', 'castle', 'tower', 'bridge', 'church', 'temple', 'barn', 'cabin', 'palace', 'fortress'],
                nature: ['tree', 'flower', 'mountain', 'ocean', 'lake', 'forest', 'river', 'waterfall', 'sunset', 'sunrise', 'cloud', 'star']
            },
            descriptors: {
                colors: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'gray', 'brown', 'golden', 'silver', 'crimson', 'azure', 'emerald'],
                sizes: ['big', 'small', 'large', 'tiny', 'huge', 'massive', 'miniature', 'gigantic', 'enormous', 'petite', 'colossal', 'compact'],
                materials: ['wooden', 'metal', 'stone', 'glass', 'plastic', 'leather', 'fabric', 'ceramic', 'crystal', 'marble', 'steel', 'iron'],
                qualities: ['beautiful', 'stunning', 'elegant', 'graceful', 'majestic', 'magnificent', 'charming', 'lovely', 'gorgeous', 'exquisite'],
                textures: ['smooth', 'rough', 'soft', 'hard', 'silky', 'fuzzy', 'glossy', 'matte', 'shiny', 'polished'],
                age: ['old', 'new', 'ancient', 'modern', 'vintage', 'antique', 'contemporary', 'historic', 'futuristic']
            },
            locations: {
                outdoor: ['park', 'forest', 'beach', 'mountain', 'hill', 'valley', 'field', 'meadow', 'garden', 'desert', 'jungle'],
                indoor: ['room', 'kitchen', 'bedroom', 'library', 'studio', 'office', 'bathroom', 'basement', 'attic'],
                urban: ['city', 'street', 'plaza', 'square', 'alley', 'marketplace', 'downtown', 'suburb'],
                water: ['lake', 'river', 'ocean', 'pond', 'stream', 'waterfall', 'bay', 'harbor']
            },
            spatial: ['in', 'on', 'at', 'beside', 'under', 'over', 'near', 'behind', 'in front of', 'next to', 'above', 'below', 'around', 'between'],
            lighting: {
                natural: ['sunlight', 'sunrise', 'sunset', 'dawn', 'dusk', 'moonlight', 'daylight', 'golden hour', 'blue hour'],
                artificial: ['candlelight', 'neon light', 'spotlight', 'firelight', 'lamplight', 'fluorescent'],
                qualities: ['bright', 'dim', 'soft', 'harsh', 'warm', 'cool', 'dramatic', 'gentle', 'glowing', 'radiant']
            },
            mood: ['peaceful', 'serene', 'calm', 'dramatic', 'mysterious', 'joyful', 'melancholic', 'romantic', 'energetic', 'tranquil', 'vibrant', 'moody'],
            artStyles: {
                traditional: ['oil painting', 'watercolor', 'acrylic painting', 'pencil sketch', 'charcoal drawing', 'pastel drawing'],
                digital: ['digital art', 'concept art', '3d render', 'pixel art', 'vector art', 'matte painting'],
                movements: ['impressionist', 'realistic', 'abstract', 'surrealist', 'minimalist', 'cubist', 'expressionist'],
                photography: ['photograph', 'portrait', 'landscape photography', 'macro photography', 'street photography']
            },
            technical: {
                quality: ['masterpiece', 'highly detailed', 'ultra detailed', 'award winning', 'professional', 'high quality', 'premium'],
                camera: ['wide angle', 'close up', 'macro', 'telephoto', 'fisheye', 'aerial view', 'bird eye view', 'low angle'],
                composition: ['dynamic composition', 'rule of thirds', 'symmetrical', 'balanced', 'centered', 'off center'],
                effects: ['depth of field', 'bokeh', 'hdr', 'high resolution', 'cinematic', 'epic', 'stunning']
            }
        };

        // User progress tracking with consecutive passes
        this.userProgress = {
            currentLevel: 1,
            consecutivePasses: Array(6).fill(0), // Index 0 unused, 1-5 for levels
            totalAttempts: Array(6).fill(0),
            bestScores: Array(6).fill(0),
            unlockedLevels: [1],
            completedLevels: [],
            earnedBadges: [],
            skillPoints: {
                subjects: 0,
                descriptors: 0,
                locations: 0,
                lighting: 0,
                styles: 0,
                technical: 0
            }
        };

        this.currentScreen = 'map';
    }

    loadUserData() {
        const saved = localStorage.getItem('aiPromptMasterEnhanced');
        if (saved) {
            const savedData = JSON.parse(saved);
            this.userData = {
                gems: savedData.gems || 10,
                coins: savedData.coins || 200,
                energy: savedData.energy || 100,
                xp: savedData.xp || 0,
                level: savedData.level || 1,
                ...savedData
            };
            // Merge progress data
            Object.assign(this.userProgress, savedData.userProgress || {});
        } else {
            this.userData = {
                gems: 10,
                coins: 200,
                energy: 100,
                xp: 0,
                level: 1,
                achievements: [],
                portfolio: [],
                stats: {
                    promptsCreated: 0,
                    imagesGenerated: 0,
                    perfectScores: 0,
                    hintsUsed: 0,
                    totalPlayTime: 0
                }
            };
        }
    }

    saveUserData() {
        const dataToSave = {
            ...this.userData,
            userProgress: this.userProgress
        };
        localStorage.setItem('aiPromptMasterEnhanced', JSON.stringify(dataToSave));
    }

    // Advanced NLP-based validation system
// Fixed validatePrompt method - replace the existing one in your code
validatePrompt(prompt) {
    const level = this.levels[this.userProgress.currentLevel];
    const words = prompt.trim().split(/\s+/);
    const wordCount = words.length;
    const lowerPrompt = prompt.toLowerCase();

    let score = 30; // Base score
    let feedback = [];
    let errors = [];
    let skillsDemo = {};

    // Basic validation
    if (wordCount === 0) {
        errors.push('Please enter a prompt!');
        return { isValid: false, errors, score: 0, feedback, skillsDemo };
    }

    if (wordCount > level.wordLimit) {
        errors.push(`Too many words! Use ${level.wordLimit} words or less (you used ${wordCount})`);
    }

    // Level-specific validation with intelligent scoring
    const validation = level.validation;

    // Check for subject (Level 1+)
    if (validation.requireSubject) {
        const subjectResult = this.detectSubjects(lowerPrompt);
        if (subjectResult.found) {
            score += 15;
            feedback.push(`✅ Clear subject identified: ${subjectResult.subjects.join(', ')}`);
            skillsDemo.subject = true;
            this.userProgress.skillPoints.subjects += 1;
        } else {
            errors.push('Need a clear, specific subject (cat, bicycle, castle, etc.)');
            skillsDemo.subject = false;
        }
    }

    // Check for descriptors (Level 1+) - FIXED
    if (validation.requireDescriptors) {
        const descriptorResult = this.detectDescriptors(lowerPrompt);
        const requiredDescriptors = validation.minDescriptors || 2;
        
        if (descriptorResult.count >= requiredDescriptors) {
            score += 15;
            feedback.push(`✅ Descriptive words found: ${descriptorResult.descriptors.slice(0, 3).join(', ')}`);
            skillsDemo.descriptors = true;
            this.userProgress.skillPoints.descriptors += descriptorResult.count;
        } else {
            errors.push(`Need at least ${requiredDescriptors} descriptive words (colors, sizes, materials)`);
            skillsDemo.descriptors = false;
        }
    }

    // Check for location (Level 2+)
    if (validation.requireLocation) {
        const locationResult = this.detectLocations(lowerPrompt);
        if (locationResult.found) {
            score += 12;
            feedback.push(`✅ Location specified: ${locationResult.locations.join(', ')}`);
            skillsDemo.location = true;
            this.userProgress.skillPoints.locations += 1;
        } else {
            errors.push('Need to specify WHERE: in the park, on the mountain, beside the lake');
            skillsDemo.location = false;
        }
    }

    // Check for spatial relationships (Level 2+)
    if (validation.requireSpatial) {
        const spatialResult = this.detectSpatialWords(lowerPrompt);
        if (spatialResult.found) {
            score += 8;
            feedback.push(`✅ Spatial relationship: ${spatialResult.spatials.join(', ')}`);
            skillsDemo.spatial = true;
        } else {
            errors.push('Use spatial words: in, on, beside, under, near, behind');
            skillsDemo.spatial = false;
        }
    }

    // Check for lighting (Level 3+)
    if (validation.requireLighting) {
        const lightingResult = this.detectLighting(lowerPrompt);
        if (lightingResult.found) {
            score += 10;
            feedback.push(`✅ Lighting specified: ${lightingResult.lighting.join(', ')}`);
            skillsDemo.lighting = true;
            this.userProgress.skillPoints.lighting += 1;
        } else {
            errors.push('Add lighting: during golden hour, in bright sunlight, under moonlight');
            skillsDemo.lighting = false;
        }
    }

    // Check for mood (Level 3+)
    if (validation.requireMood) {
        const moodResult = this.detectMood(lowerPrompt);
        if (moodResult.found) {
            score += 8;
            feedback.push(`✅ Mood/atmosphere: ${moodResult.moods.join(', ')}`);
            skillsDemo.mood = true;
        } else {
            errors.push('Add mood: peaceful, dramatic, mysterious, serene, vibrant');
            skillsDemo.mood = false;
        }
    }

    // Check for art style (Level 4+)
    if (validation.requireArtStyle) {
        const styleResult = this.detectArtStyle(lowerPrompt);
        if (styleResult.found) {
            score += 12;
            feedback.push(`✅ Art style specified: ${styleResult.styles.join(', ')}`);
            skillsDemo.artStyle = true;
            this.userProgress.skillPoints.styles += 1;
        } else {
            errors.push('Add art style: watercolor painting, digital art, oil painting, sketch');
            skillsDemo.artStyle = false;
        }
    }

    // Check for technical terms (Level 5)
    if (validation.requireTechnical) {
        const techResult = this.detectTechnical(lowerPrompt);
        if (techResult.found) {
            score += 10;
            feedback.push(`✅ Technical terms: ${techResult.technical.join(', ')}`);
            skillsDemo.technical = true;
            this.userProgress.skillPoints.technical += 1;
        } else {
            errors.push('Add technical terms: highly detailed, cinematic, dynamic composition');
            skillsDemo.technical = false;
        }
    }

    // Check for quality terms (Level 5)
    if (validation.requireQuality) {
        const qualityResult = this.detectQuality(lowerPrompt);
        if (qualityResult.found) {
            score += 8;
            feedback.push(`✅ Quality modifiers: ${qualityResult.quality.join(', ')}`);
            skillsDemo.quality = true;
        } else {
            errors.push('Add quality terms: masterpiece, award-winning, professional, highly detailed');
            skillsDemo.quality = false;
        }
    }

    // Creativity and specificity bonuses
    const creativityBonus = this.assessCreativity(prompt, words);
    const specificityBonus = this.assessSpecificity(prompt, words);
    
    score += creativityBonus + specificityBonus;

    // Word count bonus for optimal length
    const optimalLength = level.wordLimit * 0.7;
    if (wordCount >= optimalLength && wordCount <= level.wordLimit) {
        score += 5;
        feedback.push(`✅ Good prompt length: ${wordCount} words`);
    }

    // Dynamic feedback based on score
    let performanceFeedback = '';
    if (score >= 85) {
        performanceFeedback = "🌟 Excellent! You've mastered this level's skills!";
    } else if (score >= 70) {
        performanceFeedback = "👍 Good work! You're getting close to mastery.";
    } else {
        performanceFeedback = "💪 Keep practicing! Focus on the missing elements below.";
    }

    feedback.unshift(performanceFeedback);

    return {
        isValid: errors.length === 0,
        errors,
        score: Math.min(100, Math.max(0, score)),
        feedback,
        skillsDemo,
        creativity: creativityBonus,
        specificity: specificityBonus
    };
}

// Also fix the detectDescriptors method to use proper keyword matching:
detectDescriptors(prompt) {
    let descriptors = [];
    
    // Check each category of descriptors
    Object.values(this.keywords.descriptors).forEach(categoryWords => {
        categoryWords.forEach(word => {
            // Use word boundaries to ensure exact matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(prompt) && !descriptors.includes(word)) {
                descriptors.push(word);
            }
        });
    });
    
    return { 
        found: descriptors.length > 0, 
        descriptors, 
        count: descriptors.length 
    };
}

// Fix the other detection methods to use word boundaries too:
detectSubjects(prompt) {
    let subjects = [];
    
    Object.values(this.keywords.subjects).forEach(categoryWords => {
        categoryWords.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(prompt) && !subjects.includes(word)) {
                subjects.push(word);
            }
        });
    });
    
    return { found: subjects.length > 0, subjects, count: subjects.length };
}

detectLocations(prompt) {
    let locations = [];
    
    Object.values(this.keywords.locations).forEach(categoryWords => {
        categoryWords.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(prompt) && !locations.includes(word)) {
                locations.push(word);
            }
        });
    });
    
    return { found: locations.length > 0, locations, count: locations.length };
}

detectSpatialWords(prompt) {
    let spatials = [];
    
    this.keywords.spatial.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        if (regex.test(prompt) && !spatials.includes(word)) {
            spatials.push(word);
        }
    });
    
    return { found: spatials.length > 0, spatials, count: spatials.length };
}

    detectLighting(prompt) {
        let lighting = [];
        for (const [category, words] of Object.entries(this.keywords.lighting)) {
            for (const word of words) {
                if (prompt.includes(word)) {
                    lighting.push(word);
                }
            }
        }
        return { found: lighting.length > 0, lighting, count: lighting.length };
    }

    detectMood(prompt) {
        let moods = [];
        for (const word of this.keywords.mood) {
            if (prompt.includes(word)) {
                moods.push(word);
            }
        }
        return { found: moods.length > 0, moods, count: moods.length };
    }

    detectArtStyle(prompt) {
        let styles = [];
        for (const [category, words] of Object.entries(this.keywords.artStyles)) {
            for (const word of words) {
                if (prompt.includes(word)) {
                    styles.push(word);
                }
            }
        }
        return { found: styles.length > 0, styles, count: styles.length };
    }

    detectTechnical(prompt) {
        let technical = [];
        for (const [category, words] of Object.entries(this.keywords.technical)) {
            if (category !== 'quality') { // Handle quality separately
                for (const word of words) {
                    if (prompt.includes(word)) {
                        technical.push(word);
                    }
                }
            }
        }
        return { found: technical.length > 0, technical, count: technical.length };
    }

    detectQuality(prompt) {
        let quality = [];
        for (const word of this.keywords.technical.quality) {
            if (prompt.includes(word)) {
                quality.push(word);
            }
        }
        return { found: quality.length > 0, quality, count: quality.length };
    }

    assessCreativity(prompt, words) {
        const uniqueWords = new Set(words.map(w => w.toLowerCase()));
        const vocabularyRichness = uniqueWords.size / words.length;
        const lengthBonus = words.length > 10 ? 3 : 0;
        return Math.min(8, Math.round(vocabularyRichness * 10) + lengthBonus);
    }

    assessSpecificity(prompt, words) {
        const specificTerms = ['detailed', 'intricate', 'elaborate', 'specific', 'precise', 'exact'];
        const specificityCount = specificTerms.filter(term => prompt.toLowerCase().includes(term)).length;
        return Math.min(5, specificityCount * 2);
    }

    // Event listeners setup
    setupEventListeners() {
        console.log('Setting up enhanced event listeners...');
        
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const screen = e.currentTarget.getAttribute('data-screen');
                this.showScreen(screen);
            });
        });

        // Level nodes
         document.addEventListener('click', (e) => {
            const levelNode = e.target.closest('.level-node');
            if (levelNode && !levelNode.classList.contains('locked')) {
                const levelId = parseInt(levelNode.getAttribute('data-level'));
                this.startLevel(levelId);
            }
        });


        // Back buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'back-to-map') {
                this.showScreen('map');
            }
            if (e.target.id === 'back-to-learning') {
                this.showScreen('learning');
            }
        });

        // Action buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'start-practice-btn') {
                this.showPractice();
            }
            if (e.target.id === 'generate-btn') {
                this.generateImage();
            }
            if (e.target.id === 'next-level-btn') {
                this.nextLevel();
            }
            if (e.target.id === 'retry-btn') {
                this.showPractice();
            }
            if (e.target.classList.contains('hint-btn')) {
                this.useHint(e.target.dataset.type);
            }
            if (e.target.id === 'download-portfolio') {
                this.downloadPortfolio();
            }
            if (e.target.id === 'clear-portfolio') {
                this.clearPortfolio();
            }
        });

        // Input handlers
        document.addEventListener('input', (e) => {
            if (e.target.id === 'prompt-input') {
                this.updateWordCount();
                this.provideLiveAnalysis();
            }
        });

        console.log('✅ Enhanced event listeners set up successfully');
    }

    // Screen management
    showScreen(screenName) {
        console.log(`Switching to screen: ${screenName}`);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(`${screenName}-screen`);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
        
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeNavBtn = document.querySelector(`[data-screen="${screenName}"]`);
        if (activeNavBtn) {
            activeNavBtn.classList.add('active');
        }
        
        this.currentScreen = screenName;
        
        // Update screen-specific content
        if (screenName === 'portfolio') {
            this.renderPortfolio();
        } else if (screenName === 'achievements') {
            this.renderAchievements();
        } else if (screenName === 'map') {
            this.updateLevelMap();
        }
    }

    startLevel(levelId) {
        console.log(`Starting enhanced level ${levelId}`);
        this.userProgress.currentLevel = levelId;
        this.showLearning();
    }

    showLearning() {
        const level = this.levels[this.userProgress.currentLevel];
        this.showScreen('learning');
        
        const learningContent = document.getElementById('learning-content');
        learningContent.innerHTML = `
            <div class="level-header enhanced">
                <div class="level-icon">${level.icon}</div>
                <div class="level-info">
                    <h2 class="level-title">${level.title}</h2>
                    <p class="level-subtitle">${level.subtitle}</p>
                    <span class="difficulty-badge ${level.difficulty.toLowerCase()}">${level.difficulty}</span>
                </div>
                <div class="level-progress">
                    <div class="progress-stat">
                        <span class="progress-label">Consecutive Passes</span>
                        <span class="progress-value">${this.userProgress.consecutivePasses[this.userProgress.currentLevel]} / ${level.progressionRequirement}</span>
                    </div>
                    <div class="progress-stat">
                        <span class="progress-label">Best Score</span>
                        <span class="progress-value">${this.userProgress.bestScores[this.userProgress.currentLevel]}%</span>
                    </div>
                </div>
            </div>

            <div class="learning-sections enhanced">
                <div class="learning-section">
                    <h3>🎯 Learning Goal</h3>
                    <p class="learning-goal">${level.learningGoal}</p>
                    <p class="objective-text">${level.objective}</p>
                </div>

                <div class="learning-section">
                    <h3>📚 Key Concepts</h3>
                    <ul class="concepts-list">
                        ${level.concepts.map(concept => `<li>${concept}</li>`).join('')}
                    </ul>
                </div>

                <div class="learning-section">
                    <h3>💡 Examples</h3>
                    <div class="examples-grid">
                        <div class="examples-column good">
                            <h4>✅ Excellent Examples</h4>
                            <ul>
                                ${level.examples.good.map(ex => `<li><code class="good-example">${ex}</code></li>`).join('')}
                            </ul>
                        </div>
                        <div class="examples-column bad">
                            <h4>❌ Incomplete Examples</h4>
                            <ul>
                                ${level.examples.bad.map(ex => `<li><code class="bad-example">${ex}</code></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="learning-section">
                    <h3>🚀 Your Challenge</h3>
                    <p class="challenge-text">${level.challenge}</p>
                    <div class="challenge-requirements">
                        <span class="requirement">📝 Max ${level.wordLimit} words</span>
                        <span class="requirement">🎯 ${level.minScore}%+ to pass</span>
                        <span class="requirement">🔄 ${level.progressionRequirement} consecutive passes to advance</span>
                    </div>
                </div>

                <div class="learning-section skill-badges">
                    <h3>🏆 Skill Badges to Earn</h3>
                    <div class="badges-grid">
                        ${level.skillBadges.map(badge => `<div class="skill-badge">${badge}</div>`).join('')}
                    </div>
                </div>
            </div>

            <div class="learning-actions">
                <button id="start-practice-btn" class="cta-button enhanced">
                    <span>⚡</span>
                    Start Practice Session
                </button>
            </div>
        `;
    }

    showPractice() {
        const level = this.levels[this.userProgress.currentLevel];
        this.showScreen('practice');
        
        const practiceContent = document.getElementById('practice-content');
        practiceContent.innerHTML = `
            <div class="practice-header enhanced">
                <h2>${level.icon} ${level.title} Practice</h2>
                <p>${level.challenge}</p>
                <div class="practice-stats">
                    <span class="stat">Attempt: ${this.userProgress.totalAttempts[this.userProgress.currentLevel] + 1}</span>
                    <span class="stat">Passes: ${this.userProgress.consecutivePasses[this.userProgress.currentLevel]}/${level.progressionRequirement}</span>
                    <span class="stat">Best: ${this.userProgress.bestScores[this.userProgress.currentLevel]}%</span>
                </div>
            </div>

            <div class="practice-main enhanced">
                <div class="prompt-section">
                    <div class="prompt-input-area">
                        <label for="prompt-input" class="input-label">✨ Create your prompt:</label>
                        <textarea 
                            id="prompt-input" 
                            class="prompt-textarea enhanced" 
                            placeholder="Write your enhanced AI prompt here..."
                        ></textarea>
                        <div class="input-meta enhanced">
                            <span id="word-count" class="word-counter">0 / ${level.wordLimit} words</span>
                            <div id="live-analysis" class="live-analysis"></div>
                        </div>
                    </div>
                    
                    <button id="generate-btn" class="generate-button enhanced">
                        <span class="btn-icon">🎨</span>
                        <span class="btn-text">Analyze & Generate</span>
                    </button>
                </div>

                <div class="guidance-section enhanced">
                    <div class="smart-hints">
                        <h3>🧠 Smart Guidance</h3>
                        <div class="current-level-hints">
                            <h4>Level ${this.userProgress.currentLevel} Focus:</h4>
                            <ul class="hints-list">
                                ${level.hints.map(hint => `<li>${hint}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="hint-buttons enhanced">
                            <button class="hint-btn" data-type="concept" ${this.userData.coins < 3 ? 'disabled' : ''}>
                                <span>💡 Concept Help</span>
                                <span class="hint-cost">3 coins</span>
                            </button>
                            <button class="hint-btn" data-type="example" ${this.userData.coins < 5 ? 'disabled' : ''}>
                                <span>📝 Show Example</span>
                                <span class="hint-cost">5 coins</span>
                            </button>
                            <button class="hint-btn" data-type="analysis" ${this.userData.coins < 8 ? 'disabled' : ''}>
                                <span>🔍 Deep Analysis</span>
                                <span class="hint-cost">8 coins</span>
                            </button>
                        </div>
                    </div>

                    <div class="skills-tracker">
                        <h3>📊 Skills Progress</h3>
                        <div class="skills-grid">
                            <div class="skill-point">Subjects: ${this.userProgress.skillPoints.subjects}</div>
                            <div class="skill-point">Descriptors: ${this.userProgress.skillPoints.descriptors}</div>
                            <div class="skill-point">Locations: ${this.userProgress.skillPoints.locations}</div>
                            <div class="skill-point">Lighting: ${this.userProgress.skillPoints.lighting}</div>
                            <div class="skill-point">Styles: ${this.userProgress.skillPoints.styles}</div>
                            <div class="skill-point">Technical: ${this.userProgress.skillPoints.technical}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updateWordCount() {
        const input = document.getElementById('prompt-input');
        const counter = document.getElementById('word-count');
        const level = this.levels[this.userProgress.currentLevel];
        
        if (!input || !counter || !level) return;
        
        const text = input.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        
        counter.textContent = `${words} / ${level.wordLimit} words`;
        
        // Update styling
        counter.classList.remove('over-limit', 'near-limit', 'optimal');
        input.classList.remove('over-limit');
        
        if (words > level.wordLimit) {
            counter.classList.add('over-limit');
            input.classList.add('over-limit');
        } else if (words > level.wordLimit * 0.8) {
            counter.classList.add('near-limit');
        } else if (words >= level.wordLimit * 0.5) {
            counter.classList.add('optimal');
        }
    }

    provideLiveAnalysis() {
        const input = document.getElementById('prompt-input');
        const analysisDiv = document.getElementById('live-analysis');
        
        if (!input || !analysisDiv) return;
        
        const prompt = input.value.trim();
        if (!prompt) {
            analysisDiv.innerHTML = '';
            return;
        }

        const validation = this.validatePrompt(prompt);
        const level = this.levels[this.userProgress.currentLevel];
        
        let analysisHTML = '<div class="live-feedback">';
        
        // Show which skills are detected
        Object.entries(validation.skillsDemo).forEach(([skill, demonstrated]) => {
            const icon = demonstrated ? '✅' : '⏳';
            const className = demonstrated ? 'skill-met' : 'skill-pending';
            analysisHTML += `<span class="skill-indicator ${className}">${icon} ${skill}</span>`;
        });
        
        analysisHTML += `<div class="live-score">Estimated Score: ${validation.score}%</div>`;
        analysisHTML += '</div>';
        
        analysisDiv.innerHTML = analysisHTML;
    }

    async generateImage() {
        const input = document.getElementById('prompt-input');
        const generateBtn = document.getElementById('generate-btn');
        
        if (!input || !generateBtn) return;
        
        const prompt = input.value.trim();
        if (!prompt) {
            this.showNotification('Please enter a prompt first!', 'warning');
            return;
        }

        // Track attempt
        this.userProgress.totalAttempts[this.userProgress.currentLevel]++;

        // Validate prompt with enhanced system
        const validation = this.validatePrompt(prompt);
        
        if (!validation.isValid && validation.errors.length > 0) {
            this.showNotification(validation.errors[0], 'error');
            return;
        }
        
        // Check energy
        if (this.userData.energy < 15) {
            this.showNotification('Not enough energy! Each generation costs 15 energy.', 'warning');
            return;
        }
        
        // Show loading
        this.showLoading(true);
        generateBtn.disabled = true;
        
        // Deduct energy
        this.userData.energy -= 15;
        this.updateUI();
        
        try {
            console.log(`Generating enhanced image for prompt: "${prompt}"`);
            
            // Generate image (with fallback to educational placeholder)
            const imageUrl = await this.callImageAPI(prompt);
            
            // Process results with enhanced assessment
            this.processResults(imageUrl, prompt, validation);
            
        } catch (error) {
            console.error('Generation failed:', error);
            this.showNotification('Image generation failed. Please try again.', 'error');
        } finally {
            this.showLoading(false);
            generateBtn.disabled = false;
        }
    }

    async callImageAPI(prompt) {
        try {
            console.log('🎨 Attempting local image generation...');
            
            const response = await fetch('http://localhost:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt,
                    width: 512,
                    height: 512,
                    steps: 25,
                    guidance_scale: 7.5
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('✅ Local image generated successfully');
                return result.image;
            } else {
                throw new Error(result.error || 'Generation failed');
            }
            
        } catch (error) {
            console.error('Local generation failed:', error);
            this.showNotification('Using educational demo mode', 'info');
            return this.createEnhancedPlaceholder(prompt);
        }
    }

    createEnhancedPlaceholder(prompt) {
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        
        // Enhanced gradient background
        const gradient = ctx.createLinearGradient(0, 0, 600, 600);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(0.5, '#764ba2');
        gradient.addColorStop(1, '#f093fb');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 600);
        
        // Sophisticated border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 6;
        ctx.setLineDash([]);
        ctx.strokeRect(15, 15, 570, 570);
        
        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🎨 AI Prompt Master', 300, 80);
        
        // Subtitle
        ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#f0f0f0';
        ctx.fillText('Research-Grade Educational Demo', 300, 110);
        
        // Prompt display
        ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Your Enhanced Prompt:', 300, 160);
        
        // Display prompt with word wrapping
        ctx.fillStyle = '#f8f8f8';
        ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
        const words = prompt.split(' ');
        let line = '';
        let y = 200;
        const maxWidth = 520;
        
        ctx.fillText('"', 300, y);
        y += 35;
        
        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && i > 0) {
                ctx.fillText(line, 300, y);
                line = words[i] + ' ';
                y += 28;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, 300, y);
        ctx.fillText('"', 300, y + 35);
        
        // Analysis results
        const validation = this.validatePrompt(prompt);
        y += 80;
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText('Intelligent Analysis:', 300, y);
        
        y += 40;
        ctx.font = '16px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#f0f0f0';
        
        // Display top feedback items
        validation.feedback.slice(0, 4).forEach(feedback => {
            ctx.fillText(feedback, 300, y);
            y += 25;
        });
        
        // Score display
        y += 30;
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText(`Score: ${validation.score}%`, 300, y);
        
        // Level indicator
        const level = this.levels[this.userProgress.currentLevel];
        y += 50;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText(`${level.icon} Level ${this.userProgress.currentLevel}: ${level.title}`, 300, y);
        
        // Demo notice
        ctx.fillStyle = '#cccccc';
        ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText('Connect Stable Diffusion for actual image generation', 300, 540);
        ctx.fillText('This demo shows your learning progress and skill development', 300, 560);
        
        return canvas.toDataURL();
    }

    processResults(imageUrl, prompt, validation) {
        const level = this.levels[this.userProgress.currentLevel];
        const passed = validation.score >= level.minScore;
        
        // Update user stats
        this.userData.stats.promptsCreated++;
        this.userData.stats.imagesGenerated++;
        
        if (passed) {
            this.userProgress.consecutivePasses[this.userProgress.currentLevel]++;
            
            // Check if ready to advance
            if (this.userProgress.consecutivePasses[this.userProgress.currentLevel] >= level.progressionRequirement) {
                if (this.userProgress.currentLevel < 5) {
                    // Unlock next level
                    const nextLevel = this.userProgress.currentLevel + 1;
                    if (!this.userProgress.unlockedLevels.includes(nextLevel)) {
                        this.userProgress.unlockedLevels.push(nextLevel);
                    }
                    this.userProgress.completedLevels.push(this.userProgress.currentLevel);
                    
                    // Award major rewards
                    const xpReward = 200 + (this.userProgress.currentLevel * 100);
                    this.userData.xp += xpReward;
                    this.userData.coins += 100;
                    this.userData.gems += 2;
                    
                    this.showNotification(`🎉 Level ${this.userProgress.currentLevel} MASTERED! +${xpReward} XP!`, 'success');
                }
            } else {
                // Regular pass rewards
                const xpReward = 50 + validation.score;
                this.userData.xp += xpReward;
                this.userData.coins += 25;
                
                this.showNotification(`✅ Great work! Pass ${this.userProgress.consecutivePasses[this.userProgress.currentLevel]}/${level.progressionRequirement} +${xpReward} XP`, 'success');
            }
        } else {
            // Reset consecutive passes on failure
            this.userProgress.consecutivePasses[this.userProgress.currentLevel] = 0;
        }
        
        // Track best score
        if (validation.score > this.userProgress.bestScores[this.userProgress.currentLevel]) {
            this.userProgress.bestScores[this.userProgress.currentLevel] = validation.score;
        }
        
        // Track perfect scores
        if (validation.score >= 95) {
            this.userData.stats.perfectScores++;
        }
        
        // Auto-save to portfolio for good prompts
        if (validation.score >= 80) {
            this.saveToPortfolio(imageUrl, prompt, validation.score);
        }
        
        this.saveUserData();
        this.updateUI();
        
        // Show detailed results
        this.showEnhancedResults(imageUrl, prompt, validation, passed);
    }

    showEnhancedResults(imageUrl, prompt, validation, passed) {
        this.showScreen('results');
        
        const resultsContent = document.getElementById('results-content');
        const level = this.levels[this.userProgress.currentLevel];
        
        resultsContent.innerHTML = `
            <div class="results-header enhanced">
                <h2>🎨 Your Creation & Analysis</h2>
                <div class="result-status ${passed ? 'passed' : 'needs-work'}">
                    ${passed ? '✅ Level Requirement Met!' : '📚 Keep Learning!'}
                </div>
            </div>

            <div class="results-main enhanced">
                <div class="image-result">
                    <div class="generated-image-container enhanced">
                        <img src="${imageUrl}" alt="Generated image" class="generated-image" />
                    </div>
                    <div class="prompt-display enhanced">
                        <h4>Your Prompt:</h4>
                        <div class="prompt-text">"${prompt}"</div>
                    </div>
                </div>

                <div class="assessment-result enhanced">
                    <div class="score-display ${validation.score >= 90 ? 'excellent' : validation.score >= 75 ? 'good' : 'needs-work'}">
                        <div class="score-circle enhanced">
                            <span class="score-number">${validation.score}</span>
                            <span class="score-percent">%</span>
                        </div>
                        <div class="score-breakdown">
                            <div class="breakdown-item">Creativity: +${validation.creativity}</div>
                            <div class="breakdown-item">Specificity: +${validation.specificity}</div>
                        </div>
                    </div>

                    <div class="progress-status enhanced">
                        <h4>📈 Progress Status</h4>
                        <div class="progress-info">
                            <div class="progress-bar-container">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${(this.userProgress.consecutivePasses[this.userProgress.currentLevel] / level.progressionRequirement) * 100}%"></div>
                                </div>
                                <span class="progress-text">${this.userProgress.consecutivePasses[this.userProgress.currentLevel]} / ${level.progressionRequirement} consecutive passes</span>
                            </div>
                        </div>
                    </div>

                    <div class="skills-analysis enhanced">
                        <h4>🎯 Skills Demonstrated</h4>
                        <div class="skills-grid">
                            ${Object.entries(validation.skillsDemo).map(([skill, demonstrated]) => `
                                <div class="skill-status ${demonstrated ? 'mastered' : 'developing'}">
                                    <span class="skill-icon">${demonstrated ? '✅' : '📚'}</span>
                                    <span class="skill-name">${skill}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="feedback-sections enhanced">
                        <div class="feedback-section">
                            <h4>💡 Intelligent Feedback</h4>
                            <div class="feedback-items">
                                ${validation.feedback.map(item => `<div class="feedback-item">${item}</div>`).join('')}
                            </div>
                        </div>

                        ${validation.errors.length > 0 ? `
                            <div class="feedback-section improvements">
                                <h4>🚀 Areas for Improvement</h4>
                                <div class="improvement-items">
                                    ${validation.errors.map(error => `<div class="improvement-item">${error}</div>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="result-actions enhanced">
                        ${this.userProgress.consecutivePasses[this.userProgress.currentLevel] >= level.progressionRequirement && this.userProgress.currentLevel < 5 ? `
                            <button id="next-level-btn" class="cta-button success enhanced">
                                <span>🚀</span>
                                Advance to Level ${this.userProgress.currentLevel + 1}
                            </button>
                        ` : this.userProgress.consecutivePasses[this.userProgress.currentLevel] >= level.progressionRequirement ? `
                            <button class="cta-button success enhanced" onclick="app.showCongratulations()">
                                <span>🏆</span>
                                View Mastery Certificate
                            </button>
                        ` : `
                            <button id="retry-btn" class="cta-button retry enhanced">
                                <span>🔄</span>
                                Practice Again
                            </button>
                        `}
                        <button class="secondary-button enhanced" onclick="app.saveToPortfolio('${imageUrl.replace(/'/g, "\\'")}', '${prompt.replace(/'/g, "\\'")}', ${validation.score})">
                            <span>💾</span>
                            Save to Portfolio
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    nextLevel() {
        if (this.userProgress.currentLevel < 5) {
            this.userProgress.currentLevel++;
            this.startLevel(this.userProgress.currentLevel);
            this.showNotification(`🎯 Welcome to Level ${this.userProgress.currentLevel}! Ready for the next challenge?`, 'info');
        }
    }

    useHint(type) {
        const costs = { concept: 3, example: 5, analysis: 8 };
        const cost = costs[type];
        
        if (this.userData.coins < cost) {
            this.showNotification(`Need ${cost} coins for this hint! You have ${this.userData.coins}`, 'warning');
            return;
        }
        
        this.userData.coins -= cost;
        this.userData.stats.hintsUsed++;
        
        const level = this.levels[this.userProgress.currentLevel];
        const prompt = document.getElementById('prompt-input')?.value || '';
        
        let hintMessage = '';
        
        switch (type) {
            case 'concept':
                hintMessage = `💡 Key Concept: ${level.concepts[Math.floor(Math.random() * level.concepts.length)]}`;
                break;
            case 'example':
                hintMessage = `📝 Try this pattern: "${level.examples.good[Math.floor(Math.random() * level.examples.good.length)]}"`;
                break;
            case 'analysis':
                if (prompt) {
                    const validation = this.validatePrompt(prompt);
                    const missing = Object.entries(validation.skillsDemo).filter(([skill, demo]) => !demo);
                    if (missing.length > 0) {
                        const [skill] = missing[0];
                        hintMessage = `🔍 Focus on: Your prompt needs better ${skill}. ${validation.errors[0] || 'Check the requirements above.'}`;
                    } else {
                        hintMessage = `🔍 Analysis: Your prompt demonstrates all required skills! Score: ${validation.score}%`;
                    }
                } else {
                    hintMessage = `🔍 Write a prompt first, then I'll provide detailed analysis of what's working and what needs improvement.`;
                }
                break;
        }
        
        this.showNotification(hintMessage, 'info');
        this.updateUI();
        this.saveUserData();
    }

    updateLevelMap() {
        document.querySelectorAll('.level-node').forEach(node => {
            const levelId = parseInt(node.getAttribute('data-level'));
            const isUnlocked = this.userProgress.unlockedLevels.includes(levelId);
            const isCompleted = this.userProgress.completedLevels.includes(levelId);
            const isCurrent = this.userProgress.currentLevel === levelId;
            
            node.classList.remove('locked', 'unlocked', 'completed', 'current');
            
            if (isCompleted) {
                node.classList.add('completed');
            } else if (isCurrent) {
                node.classList.add('current');
            } else if (isUnlocked) {
                node.classList.add('unlocked');
            } else {
                node.classList.add('locked');
            }

            // Update progress indicator
            const progressEl = node.querySelector('.level-progress');
            if (progressEl) {
                const level = this.levels[levelId];
                const passes = this.userProgress.consecutivePasses[levelId];
                const required = level?.progressionRequirement || 3;
                progressEl.textContent = `${passes}/${required}`;
            }
        });
    }

    // Portfolio and achievement methods (simplified versions)
    saveToPortfolio(imageUrl, prompt, score) {
        const portfolioItem = {
            id: Date.now(),
            imageUrl,
            prompt,
            score,
            level: this.userProgress.currentLevel,
            timestamp: new Date().toISOString(),
            skillPoints: { ...this.userProgress.skillPoints }
        };
        
        this.userData.portfolio = this.userData.portfolio || [];
        this.userData.portfolio.push(portfolioItem);
        this.saveUserData();
        console.log('Enhanced item saved to portfolio:', portfolioItem);
    }

    renderPortfolio() {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (!portfolioGrid) return;
        
        if (!this.userData.portfolio || this.userData.portfolio.length === 0) {
            portfolioGrid.innerHTML = `
                <div class="empty-portfolio enhanced">
                    <div class="empty-icon">🎨</div>
                    <h3>Your Enhanced Portfolio</h3>
                    <p>Create prompts scoring 80%+ to automatically save them here!</p>
                </div>
            `;
            return;
        }
        
        portfolioGrid.innerHTML = this.userData.portfolio
            .slice().reverse()
            .map(item => `
                <div class="portfolio-item enhanced">
                    <div class="portfolio-image">
                        <img src="${item.imageUrl}" alt="Generated image" loading="lazy" />
                        <div class="portfolio-overlay">
                            <span class="portfolio-score">${item.score}%</span>
                            <span class="portfolio-level">L${item.level}</span>
                        </div>
                    </div>
                    <div class="portfolio-info">
                        <div class="portfolio-prompt">"${item.prompt}"</div>
                        <div class="portfolio-meta">
                            <span class="portfolio-date">${new Date(item.timestamp).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            `).join('');
    }

    renderAchievements() {
        const achievementsGrid = document.getElementById('achievements-grid');
        if (!achievementsGrid) return;
        
        const achievements = [
            { id: 'first_prompt', name: 'First Steps', icon: '✨', description: 'Created your first prompt', unlocked: this.userData.stats.promptsCreated >= 1 },
            { id: 'level_master', name: 'Level Complete', icon: '🎯', description: 'Mastered any level', unlocked: this.userProgress.completedLevels.length >= 1 },
            { id: 'perfectionist', name: 'Perfectionist', icon: '💎', description: 'Achieved 95%+ score', unlocked: this.userData.stats.perfectScores >= 1 },
            { id: 'persistent', name: 'Persistent Learner', icon: '🔄', description: 'Made 20+ attempts', unlocked: Object.values(this.userProgress.totalAttempts).reduce((a, b) => a + b, 0) >= 20 },
            { id: 'skill_master', name: 'Skill Collector', icon: '🏆', description: 'Earned 50+ total skill points', unlocked: Object.values(this.userProgress.skillPoints).reduce((a, b) => a + b, 0) >= 50 },
            { id: 'grand_master', name: 'Grand Master', icon: '🧙‍♂️', description: 'Completed all levels', unlocked: this.userProgress.completedLevels.length === 5 }
        ];
        
        const unlockedCount = achievements.filter(a => a.unlocked).length;
        const totalSkillPoints = Object.values(this.userProgress.skillPoints).reduce((a, b) => a + b, 0);
        
        achievementsGrid.innerHTML = `
            <div class="achievements-stats enhanced">
                <div class="stat-card">
                    <span class="stat-number">${unlockedCount}</span>
                    <span class="stat-label">Achievements</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${this.userProgress.completedLevels.length}</span>
                    <span class="stat-label">Levels Mastered</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${totalSkillPoints}</span>
                    <span class="stat-label">Skill Points</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${this.userData.portfolio?.length || 0}</span>
                    <span class="stat-label">Portfolio Items</span>
                </div>
            </div>
            <div class="achievements-list enhanced">
                ${achievements.map(achievement => `
                    <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-info">
                            <h4 class="achievement-name">${achievement.name}</h4>
                            <p class="achievement-description">${achievement.description}</p>
                        </div>
                        <div class="achievement-status">
                            ${achievement.unlocked ? '<span class="status-unlocked">✅</span>' : '<span class="status-locked">🔒</span>'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    downloadPortfolio() {
        if (!this.userData.portfolio || this.userData.portfolio.length === 0) {
            this.showNotification('Your portfolio is empty!', 'warning');
            return;
        }
        
        const portfolioData = {
            created: new Date().toISOString(),
            version: '2.0-enhanced',
            totalImages: this.userData.portfolio.length,
            userProgress: this.userProgress,
            stats: this.userData.stats,
            portfolio: this.userData.portfolio
        };
        
        const blob = new Blob([JSON.stringify(portfolioData, null, 2)], 
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-prompt-master-enhanced-portfolio-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('📥 Enhanced portfolio downloaded!', 'success');
    }

    clearPortfolio() {
        if (confirm('⚠️ This will permanently delete your entire portfolio and progress. Continue?')) {
            this.userData.portfolio = [];
            this.saveUserData();
            this.renderPortfolio();
            this.showNotification('Portfolio cleared', 'info');
        }
    }

    updateUI() {
        // Update HUD stats
        const elementsToUpdate = {
            'gems-display': this.userData.gems,
            'coins-display': this.userData.coins,
            'energy-display': this.userData.energy,
            'xp-display': this.userData.xp
        };

        Object.entries(elementsToUpdate).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Update XP bar
        const xpBar = document.getElementById('xp-bar-fill');
        if (xpBar) {
            const currentLevelXP = this.userData.level * 1000;
            const nextLevelXP = (this.userData.level + 1) * 1000;
            const progress = Math.min(100, (this.userData.xp / nextLevelXP) * 100);
            xpBar.style.width = `${progress}%`;
        }
        
        // Update level map if visible
        if (this.currentScreen === 'map') {
            this.updateLevelMap();
        }
        
        // Regenerate energy over time (1 per 2 minutes)
        if (this.userData.energy < 100) {
            setTimeout(() => {
                this.userData.energy = Math.min(100, this.userData.energy + 1);
                this.saveUserData();
                this.updateUI();
            }, 120000); // 2 minutes
        }
    }

    showLoading(show) {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = show ? 'flex' : 'none';
        }
    }

    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container') || this.createNotificationContainer();
        
        const notification = document.createElement('div');
        notification.className = `notification ${type} enhanced`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        container.appendChild(notification);
        
        // Show animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove after 6 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }
        }, 6000);
    }

    createNotificationContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'notification-container';
        document.body.appendChild(container);
        return container;
    }

    showCongratulations() {
        const modal = document.createElement('div');
        modal.className = 'congratulations-modal';
        modal.innerHTML = `
            <div class="modal-content congratulations">
                <div class="congrats-header">
                    <h1>🏆 MASTERY ACHIEVED! 🏆</h1>
                    <p>You've completed all 5 levels of AI Prompt Engineering!</p>
                </div>
                <div class="mastery-stats">
                    <div class="stat">
                        <span class="stat-value">${Object.values(this.userProgress.skillPoints).reduce((a, b) => a + b, 0)}</span>
                        <span class="stat-label">Total Skill Points</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${this.userData.portfolio?.length || 0}</span>
                        <span class="stat-label">Portfolio Items</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${this.userData.stats.promptsCreated}</span>
                        <span class="stat-label">Prompts Created</span>
                    </div>
                </div>
                <div class="mastery-message">
                    <p>You now possess the skills to create professional-quality AI prompts for any domain!</p>
                    <p>Continue practicing and exploring new creative possibilities.</p>
                </div>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">
                        Continue Learning
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Celebration effect
        this.triggerCelebration();
    }

    triggerCelebration() {
        // Simple celebration effect - could be enhanced with libraries
        const celebration = document.createElement('div');
        celebration.className = 'celebration-effect';
        celebration.innerHTML = '🎉🎊✨🏆✨🎊🎉';
        document.body.appendChild(celebration);
        
        setTimeout(() => celebration.remove(), 3000);
    }
}

// Initialize the enhanced game
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Enhanced AI Prompt Master...');
    window.app = new AIPromptMaster();
    console.log('🚀 Enhanced AI Prompt Master ready for research and education!');
});  
