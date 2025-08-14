
# Trail of Wings — GitHub Pages Ready

This project is configured to deploy to **GitHub Pages** using `gh-pages`.

## 1) Edit `package.json` (ONE TIME)
Open `package.json` and replace:
```
https://YOUR_GITHUB_USERNAME.github.io/trail-of-wings
```
with your actual username.

## 2) Install dependencies
```bash
npm install
```

## 3) Initialize git and push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Trail of Wings"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/trail-of-wings.git
git push -u origin main
```

## 4) Deploy to GitHub Pages
```bash
npm run deploy
```
This builds the app and publishes the `build` folder to the `gh-pages` branch.

## 5) Turn on Pages (if not automatic)
On GitHub → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **gh-pages / (root)** → Save.

Your site will be live at the URL set in `homepage`.

### Notes
- Routing uses **HashRouter**, so URLs look like `/#/dubai` and refreshes don’t 404 on static hosting.
- To develop locally: `npm start`
- To change destination cards, edit the `destinations` array in `src/App.js`.
