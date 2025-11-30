import { Client, GatewayIntentBits, Events } from 'discord.js';
import { HtmlCanvas, createWelcomeCard, DiscordJSAdapter } from '../src';

/**
 * Welcome card example with Discord.js
 * Demonstrates sending welcome images when users join
 */

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once(Events.ClientReady, () => {
    console.log('✅ Bot is ready!');
    console.log('Waiting for new members to join...');
});

client.on(Events.GuildMemberAdd, async (member) => {
    console.log(`👋 New member joined: ${member.user.tag}`);

    try {
        const canvas = new HtmlCanvas();
        const adapter = new DiscordJSAdapter(client);

        // Generate welcome card
        const html = createWelcomeCard({
            username: member.user.username,
            discriminator: member.user.discriminator,
            avatar: member.user.displayAvatarURL({ extension: 'png', size: 256 }),
            guildName: member.guild.name,
            memberCount: member.guild.memberCount,
            message: 'Welcome to the server!',
            backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        });

        // Render to buffer
        const buffer = await canvas.render(html);

        // Send to system channel
        if (member.guild.systemChannel) {
            await adapter.sendImageToChannel(
                member.guild.systemChannel.id,
                buffer as Buffer,
                'welcome.png'
            );
            console.log('✅ Welcome card sent!');
        }
    } catch (error: any) {
        console.error('❌ Error sending welcome card:', error.message);
    }
});

// Login with your bot token
// client.login('YOUR_BOT_TOKEN');

console.log('💡 To use this example:');
console.log('   1. Replace YOUR_BOT_TOKEN with your actual bot token');
console.log('   2. Uncomment the client.login() line');
console.log('   3. Run: npx ts-node examples/welcome-card.ts');
