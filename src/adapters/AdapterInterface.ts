import { MessageLike, InteractionLike } from '../types';

/**
 * Adapter interface for library-agnostic Discord interactions
 */
export interface AdapterInterface {
    /**
     * Send an image to a Discord channel
     * @param channelId - Channel ID
     * @param buffer - Image buffer
     * @param filename - Optional filename (defaults to 'image.png')
     */
    sendImageToChannel(channelId: string, buffer: Buffer, filename?: string): Promise<void>;

    /**
     * Reply to a message with an image
     * @param message - Message object
     * @param buffer - Image buffer
     * @param filename - Optional filename
     */
    replyWithImage(message: MessageLike, buffer: Buffer, filename?: string): Promise<void>;

    /**
     * Send an image as interaction reply
     * @param interaction - Interaction object
     * @param buffer - Image buffer
     * @param filename - Optional filename
     */
    sendImageAsAttachment(
        interaction: InteractionLike,
        buffer: Buffer,
        filename?: string
    ): Promise<void>;
}
