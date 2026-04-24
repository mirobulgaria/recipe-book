# My International Kitchen

A bilingual world recipes app with country filtering, keyword search, and recipe details.

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

## Development

- **Static files**: HTML, CSS, JavaScript
- **No build step**: Direct file serving
- **Live reload**: Use npm start or Live Server extension
- **Port**: Default 8000
