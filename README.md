# Roufan's Mandarin Learning Journey

A personal interactive learning repository to track and recap my Mandarin Chinese progress over time. This project contains multiple course modules with professional CV-style design, interactive exercises, and comprehensive assessments.

## 🎓 Course Structure

### HSK Level 1
- **Module 1.1: Introduction & Asking Names** ✅ (Active)
  - Philosophy of respect pronouns (您)
  - Etymology of key characters
  - Vocabulary for greetings
  - Chinese names and titles structure
  - Location: `courses/HSK 1/1.1/`
  - Learning materials: `data/slides.js`
  - Question bank: `data/questions.js`

- **Module 1.2: Numbers & Basic Counting** 🔜 (Coming Soon)
- **Module 1.3: Family & Relationships** 🔜 (Coming Soon)

### HSK Level 2
- Modules planned for future implementation

## 🚀 Deployment

This project is ready to deploy on Vercel.

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-indonesian-mandarin-learning)

### Manual Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from this directory**:
   ```bash
   vercel
   ```

3. **Or push to GitHub and connect to Vercel**:
   - Push this repository to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect the static site

## 📁 Project Structure

```
my-indonesian-mandarin-learning/
├── index.html                          # Main course hub/landing page
├── courses/                            # Course modules directory
│   └── HSK 1/                          # HSK Level 1 courses
│       └── 1.1/                        # Module 1.1: Introduction & Asking Names
│           ├── index.html              # Course interface
│           ├── app.js                  # Module-specific logic
│           └── data/                   # Learning materials
│               ├── slides.js           # Learning slides content
│               └── questions.js        # Quiz question bank
├── assets/                             # Shared assets (legacy)
│   ├── js/
│   │   └── app.js                      # Original monolithic app
│   └── css/
│       └── style.css                   # Additional styles
├── vercel.json                         # Vercel deployment configuration
└── README.md                           # This file
```

## 🎨 Features

- **Interactive Learning Slides**: Etymology breakdowns, vocabulary cards, grammar explanations
- **Customizable Learning Paths**: Choose focus areas (vocabulary, grammar, fast track)
- **Comprehensive Assessments**: Multiple choice, drag-and-drop, matching questions
- **Difficulty Levels**: Practice, Easy, Medium, Hard, and Deathmarch modes
- **Pinyin Toggle**: Learn with or without romanization support
- **Progress Tracking**: Visual progress bars and completion metrics
- **Professional Design**: CV-style interface with smooth animations

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Canvas Confetti
- Lucide Icons

## 📝 Git Commands

```bash
# Add all files
git add .

# Commit changes
git commit -m "Prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

## 🌐 Live Demo

After deployment, your site will be available at: `https://your-project-name.vercel.app`
