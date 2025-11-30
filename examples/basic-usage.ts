import { HtmlCanvas } from '../src';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Basic usage example
 * Demonstrates simple HTML to image conversion
 */
async function main() {
    console.log('🎨 Basic HTML Canvas Example\n');

    // Create a new HtmlCanvas instance
    const canvas = new HtmlCanvas();

    // Define simple HTML
    const html = `
        <div style="width: 800px; height: 400px; background: linear-gradient(to right, #667eea, #764ba2); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Arial;">
            <h1 style="font-size: 48px; margin: 0;">Hello, Discord!</h1>
            <p style="font-size: 24px; margin-top: 20px;">Generated with discord-html-canvas</p>
        </div>
    `;

    console.log('Rendering HTML to image...');

    try {
        // Render to PNG buffer
        const buffer = await canvas.render(html);

        // Save to file
        const outputPath = join(__dirname, '../output/basic-example.png');
        writeFileSync(outputPath, buffer as Buffer);

        console.log(`✅ Image saved to: ${outputPath}`);
        console.log(`📦 Buffer size: ${(buffer as Buffer).length} bytes`);
    } catch (error: any) {
        console.error('❌ Error:', error.message);
    }
}

main();
