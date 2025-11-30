# 🚀 Publishing Guide

This guide will help you publish `discord-html-canvas` to NPM and GitHub.

## Prerequisites

1. **NPM Account**: Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **GitHub Account**: Ensure you have a GitHub account
3. **NPM Authentication**: Log in to NPM locally
   ```bash
   npm login
   ```

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `discord-html-canvas`
3. **Do NOT** initialize with README (we already have one)
4. Set visibility as **Public**

## Step 2: Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/discord-html-canvas.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Topics

Add these topics to your repository for better discoverability:
- `discord`
- `discord-bot`
- `discord-js`
- `eris`
- `image-generation`
- `html-to-image`
- `canvas`
- `rank-card`
- `welcome-card`
- `typescript`
- `nodejs`

## Step 4: Publish to NPM

### First-time Publishing

```bash
# Ensure you're logged in
npm whoami

# Run tests and build
npm test
npm run build

# Publish to NPM
npm publish
```

### Version Updates

Follow semantic versioning (semver):

**Patch Release (1.0.x)** - Bug fixes:
```bash
npm version patch
npm publish
git push --tags
```

**Minor Release (1.x.0)** - New features (backward compatible):
```bash
npm version minor
npm publish
git push --tags
```

**Major Release (x.0.0)** - Breaking changes:
```bash
npm version major
npm publish
git push --tags
```

## Step 5: Create GitHub Release

1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Choose a tag (e.g., `v1.0.0`)
4. Release title: `v1.0.0 - Initial Release`
5. Description: Copy from CHANGELOG.md
6. Publish release

This will automatically trigger the GitHub Actions workflow to publish to NPM (if configured).

## Step 6: Add NPM Token to GitHub (Optional)

For automated publishing via GitHub Actions:

1. Generate NPM token:
   ```bash
   npm token create
   ```
2. Go to GitHub repository → Settings → Secrets and variables → Actions
3. Add secret: `NPM_TOKEN` with the generated token

Now releases will automatically publish to NPM!

## Verification

After publishing, verify:

1. **NPM Package**: Visit `https://www.npmjs.com/package/discord-html-canvas`
2. **Installation**: Test in a new project
   ```bash
   npm install discord-html-canvas
   ```
3. **GitHub Badge**: The NPM badge in README should work

## Promoting Your Library

1. **Discord Communities**:
   - Discord.js Official Server
   - Discord Bot List servers
   - Bot development communities

2. **Reddit**:
   - r/discordapp
   - r/Discord_Bots
   - r/node

3. **Twitter/X**:
   - Tweet with #discordjs #discordbot hashtags
   - Tag @discord

4. **Dev.to / Medium**:
   - Write a tutorial article
   - Show before/after examples

## Maintenance

### Regular Updates

- Monitor issues and PRs
- Update dependencies monthly
- Release bug fixes promptly
- Add community-requested features

### Community Guidelines

- Be responsive to issues
- Welcome contributions
- Document changes in CHANGELOG
- Follow semantic versioning

---

**Congratulations!** 🎉 Your library is now public and ready for the community to use!
