# Quick Start Commands

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

## Publishing

```bash
# Run pre-publish checks
npm run prepublish:check

# Publish to NPM
npm publish
```

## Git Workflow

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/discord-html-canvas.git
git branch -M main
git push -u origin main

# Version bumping
npm version patch  # 1.0.x
npm version minor  # 1.x.0
npm version major  # x.0.0
```

## Examples

```bash
# Run basic example
npx ts-node examples/basic-usage.ts

# Run rank card example
npx ts-node examples/rank-card.ts
```

## Useful Links

- 📦 [NPM Package](https://www.npmjs.com/package/discord-html-canvas)
- 📘 [GitHub Repo](https://github.com/jersuxsss/discord-html-canvas)
- 📝 [Full Publishing Guide](./PUBLISHING.md)
