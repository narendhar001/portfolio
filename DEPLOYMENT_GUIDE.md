# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon in the top right corner
3. Click **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or `<your-username>.github.io` for custom URL)
   - **Description**: `Personal Portfolio - Embedded Systems Engineer`
   - **Visibility**: Public
   - **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface (Easiest)

1. On the repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from `c:/antigravity/portfolio/` including:
   - `index.html`
   - `narendhar_resume.pdf`
   - `src/` folder (with `style.css` and `main.js`)
   - `README.md` (if you have one)
3. Add commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

### Option B: Using GitHub Desktop (Recommended)

1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. Click **"Add"** → **"Add existing repository"**
4. Browse to `c:/antigravity/portfolio/`
5. Click **"Publish repository"**

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

## Step 4: Access Your Site

Your portfolio will be live at:
- If repo name is `portfolio`: `https://<your-username>.github.io/portfolio/`
- If repo name is `<your-username>.github.io`: `https://<your-username>.github.io/`

## Resume Download Link

The resume will be accessible at:
`https://<your-username>.github.io/portfolio/narendhar_resume.pdf`

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify the repository is Public

### Resume not downloading?
- Make sure `narendhar_resume.pdf` is uploaded to the root directory
- Check the file name matches exactly (case-sensitive)

### Styles not loading?
- Verify `src/style.css` and `src/main.js` are uploaded
- Check folder structure matches local setup

## Updating Your Site

To update your portfolio:
1. Make changes locally
2. Go to your repository on GitHub
3. Click **"Add file"** → **"Upload files"**
4. Drag updated files
5. Commit changes
6. Site updates automatically in 1-2 minutes

## Custom Domain (Optional)

To use a custom domain like `narendharreddy.com`:
1. Buy a domain from Namecheap, GoDaddy, etc.
2. In GitHub Settings → Pages, add your custom domain
3. Update DNS records at your domain provider
4. Wait 24-48 hours for DNS propagation

---

## Quick Checklist

- [ ] Created GitHub repository
- [ ] Uploaded all files (index.html, src/, narendhar_resume.pdf)
- [ ] Enabled GitHub Pages in Settings
- [ ] Waited 2 minutes for deployment
- [ ] Tested site URL
- [ ] Verified resume download works
- [ ] Shared URL with recruiters!

## Your Portfolio URL

Once deployed, share this URL:
**`https://<your-github-username>.github.io/portfolio/`**

Replace `<your-github-username>` with your actual GitHub username.
