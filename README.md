# My International Kitchen

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/recipe-book)

A bilingual world recipes app with country filtering, keyword search, and recipe details.

[Live Demo](https://your-site.netlify.app)

## Features

- EN/BG language toggle in the navbar
- Country dropdown with 30+ countries and flag emojis
- Search by dish name, description, or ingredient
- Responsive recipe card grid
- Recipe detail modal with ingredients and step-by-step instructions
- Warm, food-inspired color palette (orange, cream, brown)

## Run

### Option 1: Simple Python Server (Recommended)
```bash
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Option 2: npm Development Server
First, fix PowerShell execution policy (if needed):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install and run:
```bash
npm install
npm start
```

### Option 3: Live Browser Extension
Use VS Code/Cursor Live Server extension for automatic reload.

## Deployment

Deploy this static site to Netlify directly from GitHub:

1. **Connect GitHub Repository**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select the recipe-book repository

2. **Configure Build Settings**
   - **Publish directory**: `.` (root, since index.html is in root)
   - **Build command**: Leave empty (no build step needed)
   - **Node version**: Any (not required for static site)

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically deploy your static files
   - Your site will be available at: `https://your-site-name.netlify.app`

**Note**: The `netlify.toml` file in the root handles SPA routing and ensures all routes redirect to `index.html`.

## Development

- **Static files**: HTML, CSS, JavaScript
- **No build step**: Direct file serving
- **Live reload**: Use npm start or Live Server extension
- **Port**: Default 8000
