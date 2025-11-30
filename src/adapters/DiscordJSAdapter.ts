import { Client, AttachmentBuilder, TextChannel } from 'discord.js';
import { AdapterInterface } from './AdapterInterface';
import { MessageLike, InteractionLike } from '../types';

/**
 * Discord.js v14+ adapter
 */
export class DiscordJSAdapter implements AdapterInterface {
    constructor(private client: Client) { }

    /**
     * Send an image to a Discord channel
     */
    public async sendImageToChannel(
        channelId: string,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        const channel = await this.client.channels.fetch(channelId);

        if (!channel || !channel.isTextBased()) {
            throw new Error(`Channel ${channelId} is not a text channel`);
        }

        const attachment = new AttachmentBuilder(buffer, { name: filename });

        await (channel as TextChannel).send({
            files: [attachment],
        });
    }

    /**
     * Reply to a message with an image
     */
    public async replyWithImage(
        message: MessageLike,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        if (!message.reply) {
            throw new Error('Message does not support reply');
        }

        const attachment = new AttachmentBuilder(buffer, { name: filename });

        await message.reply({
            files: [attachment],
        });
    }

    /**
     * Send an image as interaction reply
     */
    public async sendImageAsAttachment(
        interaction: InteractionLike,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        if (!interaction.reply) {
            throw new Error('Interaction does not support reply');
        }

        const attachment = new AttachmentBuilder(buffer, { name: filename });

        await interaction.reply({
            files: [attachment],
        });
    }
}
