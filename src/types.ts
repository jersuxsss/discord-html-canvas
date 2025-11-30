/**
 * Type definitions for discord-html-canvas
 */

/**
 * Options for rendering HTML to image
 */
export interface RenderOptions {
    /** Width of the output image in pixels */
    width?: number;
    /** Height of the output image in pixels */
    height?: number;
    /** Custom fonts to use in rendering */
    fonts?: FontOptions[];
    /** Background color (CSS color string) */
    backgroundColor?: string;
    /** Output format */
    format?: 'png' | 'svg';
    /** Default font family to use */
    defaultFontFamily?: string;
}

/**
 * Font configuration options
 */
export interface FontOptions {
    /** Font family name */
    name: string;
    /** Font data as ArrayBuffer or Buffer */
    data: ArrayBuffer | Buffer;
    /** Font weight (100-900) */
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    /** Font style */
    style?: 'normal' | 'italic';
}

/**
 * Custom error class for HtmlCanvas errors
 */
export class HtmlCanvasError extends Error {
    constructor(message: string, public readonly code?: string) {
        super(message);
        this.name = 'HtmlCanvasError';
        Object.setPrototypeOf(this, HtmlCanvasError.prototype);
    }
}

/**
 * Rank card template data
 */
export interface RankCardData {
    /** Username */
    username: string;
    /** User discriminator (optional for new username system) */
    discriminator?: string;
    /** Avatar URL */
    avatar: string;
    /** Current level */
    level: number;
    /** Current XP */
    currentXP: number;
    /** XP required for next level */
    requiredXP: number;
    /** User rank position */
    rank: number;
    /** Background color or gradient */
    backgroundColor?: string;
    /** Accent color for progress bar and highlights */
    accentColor?: string;
    /** Custom background image URL */
    backgroundImage?: string;
}

/**
 * Welcome card template data
 */
export interface WelcomeCardData {
    /** Username */
    username: string;
    /** User discriminator (optional) */
    discriminator?: string;
    /** Avatar URL */
    avatar: string;
    /** Guild name */
    guildName: string;
    /** Current member count */
    memberCount: number;
    /** Welcome message */
    message?: string;
    /** Background color or gradient */
    backgroundColor?: string;
    /** Background image URL */
    backgroundImage?: string;
}

/**
 * Level up card template data
 */
export interface LevelUpData {
    /** Username */
    username: string;
    /** Avatar URL */
    avatar: string;
    /** Old level */
    oldLevel: number;
    /** New level */
    newLevel: number;
    /** Background color or gradient */
    backgroundColor?: string;
    /** Accent color */
    accentColor?: string;
}

/**
 * Message-like interface for adapters
 */
export interface MessageLike {
    channel: {
        id: string;
        send?: (options: any) => Promise<any>;
    };
    channelId?: string;
    reply?: (options: any) => Promise<any>;
}

/**
 * Interaction-like interface for adapters
 */
export interface InteractionLike {
    channelId: string;
    reply?: (options: any) => Promise<any>;
    editReply?: (options: any) => Promise<any>;
    followUp?: (options: any) => Promise<any>;
}
