import type Eris from 'eris';
import { AdapterInterface } from './AdapterInterface';
import { MessageLike, InteractionLike } from '../types';

/**
 * Eris v0.17+ adapter
 */
export class ErisAdapter implements AdapterInterface {
    constructor(private client: Eris.Client) { }

    /**
     * Send an image to a Discord channel
     */
    public async sendImageToChannel(
        channelId: string,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        await this.client.createMessage(channelId, {
            files: [{
                name: filename,
                file: buffer,
            }],
        } as any);
    }

    /**
     * Reply to a message with an image
     */
    public async replyWithImage(
        message: MessageLike,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        const channelId = message.channel?.id || message.channelId;

        if (!channelId) {
            throw new Error('Unable to determine channel ID from message');
        }

        await this.client.createMessage(channelId, {
            messageReference: {
                messageID: (message as any).id,
            },
            files: [{
                name: filename,
                file: buffer,
            }],
        } as any);
    }

    /**
     * Send an image as interaction reply
     */
    public async sendImageAsAttachment(
        interaction: InteractionLike,
        buffer: Buffer,
        filename: string = 'image.png'
    ): Promise<void> {
        const erisInteraction = interaction as any;

        if (erisInteraction.createMessage) {
            await erisInteraction.createMessage({
                content: '',
                files: [{
                    name: filename,
                    file: buffer,
                }],
            });
        } else {
            throw new Error('Interaction does not support createMessage');
        }
    }
}
