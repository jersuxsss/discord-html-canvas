# 🎨 Discord HTML Canvas

<div align="center">

**Generate beautiful Discord images from HTML/CSS instead of tedious canvas manipulation.**

[![npm version](https://img.shields.io/npm/v/discord-html-canvas?color=blue&logo=npm)](https://www.npmjs.com/package/discord-html-canvas)
[![npm downloads](https://img.shields.io/npm/dm/discord-html-canvas?color=blue&logo=npm)](https://www.npmjs.com/package/discord-html-canvas)
[![npm bundle size](https://img.shields.io/bundlephobia/min/discord-html-canvas?color=blue)](https://bundlephobia.com/package/discord-html-canvas)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?logo=typescript)](https://www.typescriptlang.org/)

</div>

## 💡 The Problem

Creating rank cards, welcome images, or custom graphics for Discord bots currently requires:

```typescript
// ❌ The old way - tedious manual canvas work
const canvas = createCanvas(800, 400);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#7289DA';
ctx.fillRect(0, 0, 800, 400);
ctx.font = 'bold 42px Arial';
ctx.fillStyle = '#FFFFFF';
ctx.fillText('Username', 120, 80);
ctx.beginPath();
ctx.arc(60, 60, 50, 0, Math.PI * 2);
// ... 50 more lines of coordinate calculations
```

## ✨ The Solution

```typescript
// ✅ The new way - write HTML/CSS, get an image
const html = `
    <div style="width: 800px; height: 400px; background: #7289DA; 
                display: flex; align-items: center; padding: 20px;">
        <img src="${avatar}" style="width: 100px; height: 100px; border-radius: 50%;" />
        <h1 style="color: white; margin-left: 20px;">Username</h1>
    </div>
`;

const buffer = await renderHtmlToBuffer(html);
// Done! Send to Discord
```

**Save hours of development time. Build what you imagine, not what coordinates allow.**

## 🚀 Features

- 🎨 **Design with HTML/CSS** - Use the tools you already know
- 📦 **Pre-built Templates** - Rank cards, welcome images, level-up cards
- 🔄 **Library Agnostic** - Works with discord.js v14+ and Eris v0.17+
- ⚡ **Type-Safe** - Full TypeScript support with comprehensive types
- 🎯 **Production Ready** - Powered by Satori (by Vercel)
- 🖼️ **Image Optimization** - Automatic PNG conversion with high quality
- 🔤 **Custom Fonts** - Load and use your own TTF/OTF/WOFF fonts
- 📊 **Modern CSS** - Gradients, flexbox, shadows, and more
- 🚀 **Lightweight** - Minimal dependencies, maximum performance
- 💾 **Zero Dependencies** - discord.js and Eris are optional peer deps

## 📦 Installation

```bash
npm install discord-html-canvas
```

### Peer Dependencies

For Discord.js:
```bash
npm install discord.js@^14.0.0
```

For Eris:
```bash
npm install eris@^0.17.0
```

## 🎯 Quick Start

### Simple Example

```typescript
import { renderHtmlToBuffer } from 'discord-html-canvas';

const html = `
    <div style="width: 800px; height: 400px; background: linear-gradient(to right, #667eea, #764ba2); 
                color: white; display: flex; flex-direction: column; justify-content: center; 
                align-items: center; font-family: Arial;">
        <h1 style="font-size: 48px; margin: 0;">Welcome to the Server!</h1>
        <p style="font-size: 24px; margin-top: 20px;">You are member #1234</p>
    </div>
`;

const buffer = await renderHtmlToBuffer(html);
// Send buffer to Discord as attachment
```

### Using Pre-built Templates

```typescript
import { createRankCard, renderHtmlToBuffer } from 'discord-html-canvas';

const html = createRankCard({
    username: 'CoolUser',
    discriminator: '0001',
    avatar: 'https://cdn.discordapp.com/avatars/...',
    level: 42,
    currentXP: 7500,
    requiredXP: 10000,
    rank: 15,
    accentColor: '#7289DA',
});

const buffer = await renderHtmlToBuffer(html);
```

### With Discord.js

```typescript
import { Client, AttachmentBuilder } from 'discord.js';
import { createWelcomeCard, renderHtmlToBuffer } from 'discord-html-canvas';

client.on('guildMemberAdd', async (member) => {
    const html = createWelcomeCard({
        username: member.user.username,
        avatar: member.user.displayAvatarURL({ extension: 'png' }),
        guildName: member.guild.name,
        memberCount: member.guild.memberCount,
    });

    const buffer = await renderHtmlToBuffer(html);
    const attachment = new AttachmentBuilder(buffer, { name: 'welcome.png' });

    await member.guild.systemChannel?.send({
        content: `Welcome ${member}!`,
        files: [attachment],
    });
});
```

## 📚 Pre-built Templates

### Rank Card

Perfect for leveling systems and leaderboards.

```typescript
import { createRankCard } from 'discord-html-canvas';

const html = createRankCard({
    username: 'EliteGamer',
    discriminator: '1337',
    avatar: 'https://...',
    level: 99,
    currentXP: 15000,
    requiredXP: 20000,
    rank: 3,
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentColor: '#FFD700',
});
```

**Features:**
- User avatar with styled border
- Username and discriminator
- Level and rank display
- Progress bar with XP stats
- Customizable colors and gradients
- Optional background image

### Welcome Card

Beautiful welcome images for new members.

```typescript
import { createWelcomeCard } from 'discord-html-canvas';

const html = createWelcomeCard({
    username: 'NewMember',
    avatar: 'https://...',
    guildName: 'Awesome Server',
    memberCount: 5000,
    message: 'Welcome to our community!',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});
```

**Features:**
- User avatar
- Custom welcome message
- Guild name and member count
- Customizable background
- Professional styling

### Level Up Card

Celebrate level milestones.

```typescript
import { createLevelUpCard } from 'discord-html-canvas';

const html = createLevelUpCard({
    username: 'ProPlayer',
    avatar: 'https://...',
    oldLevel: 49,
    newLevel: 50,
    backgroundColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accentColor: '#FFD700',
});
```

## 🎨 Advanced Usage

### Custom Styling

Use modern CSS features:

```typescript
const html = `
    <div style="width: 1000px; height: 600px; 
                background: linear-gradient(135deg, #1e3c72 0%, #7e8ba3 100%);
                border-radius: 20px; 
                padding: 40px; 
                display: flex; 
                flex-direction: column;
                font-family: Arial;">
        
        <div style="display: flex; gap: 20px;">
            <div style="flex: 1; 
                        background: rgba(255,255,255,0.1); 
                        border-radius: 15px; 
                        padding: 25px;
                        box-shadow: 0 8px 16px rgba(0,0,0,0.2);">
                <h2 style="color: #FFD700; font-size: 24px;">Wins</h2>
                <p style="color: white; font-size: 64px; font-weight: bold;">1,234</p>
            </div>
            
            <div style="flex: 1; 
                        background: rgba(255,255,255,0.1); 
                        border-radius: 15px; 
                        padding: 25px;">
                <h2 style="color: #FF6B6B; font-size: 24px;">Losses</h2>
                <p style="color: white; font-size: 64px; font-weight: bold;">567</p>
            </div>
        </div>
    </div>
`;
```

### Custom Fonts

Load and use your own fonts:

```typescript
import { HtmlCanvas } from 'discord-html-canvas';
import { readFileSync } from 'fs';

const canvas = new HtmlCanvas();

// Load custom font
const fontData = readFileSync('./fonts/MyCustomFont.ttf');
await canvas.loadFont({
    name: 'CustomFont',
    data: fontData,
    weight: 400,
    style: 'normal',
});

const html = `
    <div style="font-family: CustomFont; font-size: 48px; color: white;">
        Using my custom font!
    </div>
`;

const buffer = await canvas.render(html);
```

### Using the Adapter Pattern

For easier integration with Discord libraries:

```typescript
import { HtmlCanvas, DiscordJSAdapter } from 'discord-html-canvas';
import { Client } from 'discord.js';

const client = new Client({ ... });
const canvas = new HtmlCanvas();
const adapter = new DiscordJSAdapter(client);

// Send image to channel
await adapter.sendImageToChannel('channel-id', buffer, 'image.png');

// Reply to message
await adapter.replyWithImage(message, buffer, 'reply.png');

// Reply to interaction
await adapter.sendImageAsAttachment(interaction, buffer, 'response.png');
```

## 📖 API Reference

### `renderHtmlToBuffer(html, options?)`

Simple function to convert HTML to PNG buffer.

**Parameters:**
- `html: string` - HTML string to render
- `options?: RenderOptions` - Optional rendering options

**Returns:** `Promise<Buffer>` - PNG image buffer

**Example:**
```typescript
const buffer = await renderHtmlToBuffer(html, {
    width: 800,
    height: 400,
    backgroundColor: '#ffffff',
});
```

### `class HtmlCanvas`

Main rendering class with advanced options.

#### Constructor

```typescript
new HtmlCanvas(defaultOptions?: RenderOptions)
```

#### Methods

- `render(html: string, options?: RenderOptions): Promise<Buffer | string>` - Render HTML to image
- `setDefaultOptions(options: RenderOptions): void` - Set default render options
- `loadFont(font: FontOptions): Promise<void>` - Load and cache a font
- `clearFontCache(): void` - Clear cached fonts

### `RenderOptions`

```typescript
interface RenderOptions {
    width?: number;          // Default: 800
    height?: number;         // Default: 400
    fonts?: FontOptions[];   // Custom fonts
    backgroundColor?: string; // Default: '#ffffff'
    format?: 'png' | 'svg';  // Default: 'png'
}
```

### `FontOptions`

```typescript
interface FontOptions {
    name: string;                    // Font family name
    data: ArrayBuffer | Buffer;      // Font file data
    weight?: number;                 // Font weight (100-900)
    style?: 'normal' | 'italic';    // Font style
}
```

### Template Functions

- `createRankCard(data: RankCardData): string`
- `createWelcomeCard(data: WelcomeCardData): string`
- `createLevelUpCard(data: LevelUpData): string`

See [TypeScript definitions](src/types.ts) for complete data interfaces.

## 🎯 Use Cases

### Leveling Systems

- Rank cards showing XP and progress
- Level-up announcements
- Leaderboard graphics

### Welcome Systems

- Custom welcome images
- Server rules cards
- Member milestone celebrations

### Statistics

- Gaming stats cards
- Server analytics
- User profiles

### Notifications

- Achievement unlocked
- Role assignments
- Event announcements

## 🔄 Migration from Manual Canvas

**Before (with @napi-rs/canvas):**
```typescript
const canvas = createCanvas(800, 400);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#7289DA';
ctx.fillRect(0, 0, 800, 400);

// Avatar (requires loading image first)
const avatarImg = await loadImage(avatarURL);
ctx.save();
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.closePath();
ctx.clip();
ctx.drawImage(avatarImg, 50, 50, 100, 100);
ctx.restore();

// Text (manual positioning)
ctx.font = 'bold 42px Arial';
ctx.fillStyle = '#FFFFFF';
ctx.fillText('Username', 170, 90);

// Progress bar (manual calculations)
const barWidth = 500;
const barHeight = 30;
const progress = (7500 / 10000) * barWidth;
ctx.fillStyle = '#2C2F33';
ctx.fillRect(50, 250, barWidth, barHeight);
ctx.fillStyle = '#3BA55C';
ctx.fillRect(50, 250, progress, barHeight);
```

**After (with discord-html-canvas):**
```typescript
const html = createRankCard({
    username: 'Username',
    avatar: avatarURL,
    level: 42,
    currentXP: 7500,
    requiredXP: 10000,
    rank: 15,
});

const buffer = await renderHtmlToBuffer(html);
```

**Result:** Same output, 90% less code, infinitely more maintainable.

## ⚡ Performance

- **Fast**: Satori is optimized for server-side rendering
- **Efficient**: Cached fonts reduce repeated file reads
- **Scalable**: Handle concurrent requests easily
- **Lightweight**: Minimal bundle size

## 🤝 Contributing

Contributions are welcome! Please check out the [Contributing Guide](CONTRIBUTING.md).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Satori](https://github.com/vercel/satori) by Vercel
- Powered by [@resvg/resvg-js](https://github.com/yisibl/resvg-js) for PNG conversion
- Created with ❤️ by [Jersuxs](https://github.com/jersuxsss)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/discord-html-canvas)
- [GitHub Repository](https://github.com/jersuxsss/discord-html-canvas)
- [Issue Tracker](https://github.com/jersuxsss/discord-html-canvas/issues)
- [Discord.js Documentation](https://discord.js.org/)
- [Eris Documentation](https://abal.moe/Eris/)

---

<div align="center">

**⭐ Star us on GitHub if you find this helpful!**

**Stop calculating coordinates. Start creating beautiful images.**

</div>
