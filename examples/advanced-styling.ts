import { HtmlCanvas } from '../src';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Advanced styling example
 * Demonstrates complex layouts, gradients, shadows, and more
 */
async function main() {
    console.log('🎨 Advanced Styling Example\n');

    const canvas = new HtmlCanvas();

    // Complex card with multiple sections
    const html = `
        <div style="width: 1000px; height: 600px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%); border-radius: 20px; display: flex; flex-direction: column; padding: 40px; font-family: Arial;">
            <div style="display: flex; align-items: center; margin-bottom: 30px;">
                <div style="width: 120px; height: 120px; border-radius: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                    <span style="font-size: 64px;">🎮</span>
                </div>
                <div style="margin-left: 30px; flex: 1;">
                    <h1 style="font-size: 48px; font-weight: bold; color: white; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Gaming Stats</h1>
                    <p style="font-size: 20px; color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">Advanced CSS Styling Demo</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 20px; flex: 1;">
                <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 15px; padding: 25px; backdrop-filter: blur(10px); box-shadow: 0 8px 16px rgba(0,0,0,0.2);">
                    <h2 style="font-size: 24px; color: #FFD700; margin: 0 0 20px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Wins</h2>
                    <p style="font-size: 64px; font-weight: bold; color: white; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">1,234</p>
                    <p style="font-size: 18px; color: rgba(255,255,255,0.7); margin: 10px 0 0 0;">+12 this week</p>
                </div>
                
                <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 15px; padding: 25px; backdrop-filter: blur(10px); box-shadow: 0 8px 16px rgba(0,0,0,0.2);">
                    <h2 style="font-size: 24px; color: #FF6B6B; margin: 0 0 20px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Losses</h2>
                    <p style="font-size: 64px; font-weight: bold; color: white; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">567</p>
                    <p style="font-size: 18px; color: rgba(255,255,255,0.7); margin: 10px 0 0 0;">-3 this week</p>
                </div>
                
                <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 15px; padding: 25px; backdrop-filter: blur(10px); box-shadow: 0 8px 16px rgba(0,0,0,0.2);">
                    <h2 style="font-size: 24px; color: #4ECDC4; margin: 0 0 20px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Win Rate</h2>
                    <p style="font-size: 64px; font-weight: bold; color: white; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">68.5%</p>
                    <p style="font-size: 18px; color: rgba(255,255,255,0.7); margin: 10px 0 0 0;">Top 5%</p>
                </div>
            </div>
            
            <div style="margin-top: 30px; background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="font-size: 16px; color: rgba(255,255,255,0.9);">Season Progress</span>
                    <span style="font-size: 16px; color: rgba(255,255,255,0.9);">75%</span>
                </div>
                <div style="width: 100%; height: 20px; background: rgba(0,0,0,0.3); border-radius: 10px; overflow: hidden;">
                    <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 10px; box-shadow: 0 0 10px rgba(102,126,234,0.5);"></div>
                </div>
            </div>
        </div>
    `;

    console.log('Rendering advanced styled card...');

    try {
        const buffer = await canvas.render(html);

        const outputPath = join(__dirname, '../output/advanced-styling.png');
        writeFileSync(outputPath, buffer as Buffer);

        console.log(`✅ Image saved to: ${outputPath}`);
        console.log('');
        console.log('🎨 Styling features demonstrated:');
        console.log('   ✓ Complex gradients');
        console.log('   ✓ Multiple sections with flexbox');
        console.log('   ✓ Box shadows and text shadows');
        console.log('   ✓ Backdrop blur effects');
        console.log('   ✓ Progress bars');
        console.log('   ✓ Rounded corners');
        console.log('   ✓ Semi-transparent backgrounds');
    } catch (error: any) {
        console.error('❌ Error:', error.message);
    }
}

main();
