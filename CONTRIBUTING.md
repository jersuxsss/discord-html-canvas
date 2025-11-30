# Contributing to Discord HTML Canvas

Thank you for your interest in contributing to discord-html-canvas! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with:

- A clear, descriptive title
- Detailed steps to reproduce the bug
- Expected behavior vs actual behavior
- Your environment (Node.js version, OS, library versions)
- Code samples if applicable

### Suggesting Features

Feature suggestions are welcome! Please create an issue with:

- A clear description of the feature
- Use cases and benefits
- Examples of how it would work
- Any potential drawbacks or considerations

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**:
   - Write clear, commented code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed
4. **Test your changes**:
   ```bash
   npm run build    # Ensure it compiles
   npm test         # Run tests
   npm run lint     # Check for linting errors
   ```
5. **Commit your changes** with clear, descriptive commit messages
6. **Push to your fork** and submit a pull request

## 📝 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/discord-html-canvas.git
cd discord-html-canvas

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 🎯 Code Style

- Use TypeScript for all source files
- Follow the existing code style (enforced by ESLint and Prettier)
- Write clear, descriptive variable and function names
- Add JSDoc comments for public APIs
- Keep functions focused and single-purpose

## ✅ Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting PR
- Aim for high test coverage
- Test files go in the `test/` directory

## 📚 Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new APIs
- Create examples for new features
- Update CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/) format

## 🔀 Branching Strategy

- `main` - Stable, production-ready code
- `develop` - Active development (if applicable)
- Feature branches: `feature/your-feature-name`
- Bug fix branches: `fix/bug-description`

## 📋 Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: Add support for custom background images
fix: Resolve font loading issue on Windows
docs: Update API documentation for RenderOptions
test: Add tests for template generators
refactor: Simplify HTML parsing logic
```

Prefixes:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test additions or changes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks

## 🚀 Release Process

(For maintainers)

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a git tag: `git tag v1.x.x`
4. Push tag: `git push origin v1.x.x`
5. Build: `npm run build`
6. Publish: `npm publish`
7. Create GitHub release

## 💡 Need Help?

- Check existing issues and pull requests
- Read the documentation
- Create an issue if you're stuck

## 📜 Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on the code, not the person
- Help create a positive community

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

---

Questions? Feel free to reach out by creating an issue or discussion on GitHub.
