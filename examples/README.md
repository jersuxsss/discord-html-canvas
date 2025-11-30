# Discord HTML Canvas - Examples

This directory contains various examples demonstrating how to use `discord-html-canvas` in different scenarios.

## Examples

- **basic-usage.ts** - Simple HTML to image conversion
- **rank-card.ts** - Creating a rank/level card using templates
- **welcome-card.ts** - Creating a welcome image for new members
- **custom-fonts.ts** - Loading and using custom fonts
- **advanced-styling.ts** - Complex layouts with gradients and effects

## Running Examples

Each example is a standalone TypeScript file. To run them:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the library:
   ```bash
   npm run build
   ```

3. Run an example:
   ```bash
   npx ts-node examples/basic-usage.ts
   ```

## Notes

- Examples require a Discord bot token in most cases
- Replace placeholder values (avatar URLs, user IDs, etc.) with real data
- Generated images will be saved to the `output/` directory
