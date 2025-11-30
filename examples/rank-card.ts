import { HtmlCanvas, createRankCard } from '../src';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Rank card example
 * Demonstrates creating a Discord rank/level card
 */
async function main() {
    console.log('🏆 Rank Card Example\n');

    const canvas = new HtmlCanvas();

    // Generate rank card HTML using template
    const html = createRankCard({
        username: 'CoolGamer',
        discriminator: '0042',
        avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
        level: 42,
        currentXP: 7500,
        requiredXP: 10000,
        rank: 15,
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        accentColor: '#7289DA',
    });

    console.log('Rendering rank card...');

    try {
        const buffer = await canvas.render(html);

        const outputPath = join(__dirname, '../output/rank-card.png');
        writeFileSync(outputPath, buffer as Buffer);

        console.log(`✅ Rank card saved to: ${outputPath}`);
        console.log('📊 Card details:');
        console.log('   - Level: 42');
        console.log('   - XP: 7500/10000 (75%)');
        console.log('   - Rank: #15');
    } catch (error: any) {
        console.error('❌ Error:', error.message);
    }
}

main();
