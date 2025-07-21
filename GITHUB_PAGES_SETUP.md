# GitHub Pages Setup Guide

This guide will help you deploy your website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Repository**: Your project should be in a GitHub repository
3. **Repository Name**: For username.github.io, your repository should be named `vighneshn.github.io`

## Step-by-Step Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `vighneshn.github.io` (replace "vighneshn" with your actual GitHub username)
4. Make it public
5. Don't initialize with README (since you already have one)
6. Click "Create repository"

### 2. Push Your Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/vighneshn/vighneshn.github.io.git

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

### 3. Deploy to GitHub Pages

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Deploy the website**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your React app for production
   - Create a `gh-pages` branch
   - Push the built files to that branch

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 5. Wait for Deployment

- GitHub Pages will take a few minutes to deploy your site
- You'll see a green checkmark when it's ready
- Your site will be available at `https://vighneshn.github.io`

## Custom Domain (Optional)

If you want to use a custom domain:

1. In the GitHub Pages settings, enter your domain in the "Custom domain" field
2. Add a `CNAME` file in your `public` folder with your domain name
3. Configure your domain's DNS settings to point to GitHub Pages

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure you're using `HashRouter` (already configured)
2. **Build Errors**: Check that all dependencies are installed
3. **Deployment Fails**: Ensure you have write access to the repository

### Useful Commands

```bash
# Check if gh-pages is installed
npm list gh-pages

# Force rebuild and deploy
npm run build
npm run deploy

# Check deployment status
git branch -a  # Should show gh-pages branch
```

## Updating Your Site

To update your website:

1. Make your changes to the code
2. Commit and push to your main branch:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Notes

- The website uses HashRouter for compatibility with GitHub Pages
- All static assets should be in the `public` folder
- The homepage URL is set to `https://vighneshn.github.io` in package.json
- GitHub Pages serves static files, so client-side routing works with hash routing

Your website should now be live at `https://vighneshn.github.io`! 