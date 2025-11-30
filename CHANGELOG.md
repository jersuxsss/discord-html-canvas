# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-30

### Added

- 🎉 Initial release of discord-html-canvas
- ✨ Core `HtmlCanvas` class for rendering HTML/CSS to images
- 🎨 Pre-built templates:
  - Rank cards with XP progress bars
  - Welcome cards for new members
  - Level-up celebration cards
- 🔄 Library-agnostic adapters:
  - Discord.js v14+ adapter
  - Eris v0.17+ adapter
- 🔤 Custom font loading and caching system
- 📦 Simple function API: `renderHtmlToBuffer()`
- ⚡ Powered by Satori for reliable HTML/CSS to SVG conversion
- 🖼️ Automatic PNG conversion with @resvg/resvg-js
- 📖 Comprehensive documentation with examples
- 💯 Full TypeScript support with type definitions
- ✅ Complete test suite

### Features

- Modern CSS support (gradients, flexbox, shadows)
- Customizable backgrounds and colors
- Progress bars and statistics displays
- Avatar rendering with custom borders
- Responsive layouts
- Font caching for performance
- Error handling with custom error types

### Documentation

- Detailed README with quick start guide
- API reference documentation
- Migration guide from manual canvas
- 5 comprehensive examples
- Contributing guidelines

[1.0.0]: https://github.com/jersuxsss/discord-html-canvas/releases/tag/v1.0.0
