import { HtmlCanvas } from '../src';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Custom fonts example
 * Demonstrates loading and using custom fonts
 */
async function main() {
    console.log('🔤 Custom Fonts Example\n');

    const canvas = new HtmlCanvas();

    // Note: In a real scenario, you would load actual font files
    // For this example, we'll demonstrate the API without actual font files

    console.log('⚠️  This example demonstrates the font loading API.');
    console.log('    To use custom fonts, you need to:');
    console.log('    1. Download TTF/OTF/WOFF font files');
    console.log('    2. Load them using readFileSync or fetch');
    console.log('    3. Pass them to the font options');
    console.log('');

    // Example of how you would load custom fonts:
    /*
    const fontData = readFileSync(join(__dirname, '../fonts/CustomFont.ttf'));
    
    await canvas.loadFont({
        name: 'CustomFont',
        data: fontData,
        weight: 400,
        style: 'normal',
    });
    */

    // HTML using Arial (system font)
    const html = `
        <div style="width: 800px; height: 400px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Arial; padding: 40px;">
            <h1 style="font-size: 64px; margin: 0; font-weight: bold; text-shadow: 3px 3px 6px rgba(0,0,0,0.5);">Custom Fonts</h1>
            <p style="font-size: 28px; margin-top: 20px; text-align: center;">Load your own TTF, OTF, or WOFF fonts</p>
            <p style="font-size: 20px; margin-top: 10px; color: rgba(255,255,255,0.8);">Perfect for branding and unique designs</p>
        </div>
    `;

    try {
        const buffer = await canvas.render(html);

        const outputPath = join(__dirname, '../output/custom-fonts.png');
        writeFileSync(outputPath, buffer as Buffer);

        console.log(`✅ Image saved to: ${outputPath}`);
        console.log('');
        console.log('📖 Font Loading Example:');
        console.log('');
        console.log('   const fontData = readFileSync("./fonts/MyFont.ttf");');
        console.log('   await canvas.loadFont({');
        console.log('       name: "MyFont",');
        console.log('       data: fontData,');
        console.log('       weight: 400,');
        console.log('   });');
    } catch (error: any) {
        console.error('❌ Error:', error.message);
    }
}

main();
