import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { RenderOptions, FontOptions, HtmlCanvasError } from './types';

/**
 * Main HtmlCanvas class for rendering HTML/CSS to images
 */
export class HtmlCanvas {
    private defaultOptions: Partial<RenderOptions> = {
        width: 800,
        height: 400,
        format: 'png',
        backgroundColor: '#ffffff',
    };

    private fontCache: Map<string, FontOptions> = new Map();

    /**
     * Create a new HtmlCanvas instance
     * @param defaultOptions - Default options to use for all renders
     */
    constructor(defaultOptions?: Partial<RenderOptions>) {
        if (defaultOptions) {
            this.defaultOptions = { ...this.defaultOptions, ...defaultOptions };
        }
    }

    /**
     * Set default rendering options
     * @param options - Options to set as defaults
     */
    public setDefaultOptions(options: Partial<RenderOptions>): void {
        this.defaultOptions = { ...this.defaultOptions, ...options };
    }

    /**
     * Render HTML to image buffer or SVG string
     * @param html - HTML string or JSX element
     * @param options - Rendering options
     * @returns Promise resolving to Buffer (PNG) or string (SVG)
     */
    public async render(
        html: string,
        options?: RenderOptions
    ): Promise<Buffer | string> {
        const mergedOptions = { ...this.defaultOptions, ...options };

        try {
            // Convert HTML string to JSX-like structure for Satori
            const jsx = this.parseHtmlToJsx(html);

            // Render to SVG using Satori
            const svg = await this.renderToSVG(jsx, mergedOptions);

            // If SVG format requested, return as string
            if (mergedOptions.format === 'svg') {
                return svg;
            }

            // Otherwise, convert SVG to PNG
            return this.svgToPng(svg);
        } catch (error: any) {
            throw new HtmlCanvasError(
                `Failed to render HTML: ${error.message}`,
                'RENDER_ERROR'
            );
        }
    }

    /**
     * Render HTML to SVG (intermediate format)
     * @param jsx - JSX element
     * @param options - Rendering options
     * @returns Promise resolving to SVG string
     */
    private async renderToSVG(jsx: any, options: RenderOptions): Promise<string> {
        const fonts = options.fonts || [];

        // Add cached fonts
        this.fontCache.forEach((font) => {
            if (!fonts.find((f) => f.name === font.name && f.weight === font.weight)) {
                fonts.push(font);
            }
        });

        const svg = await satori(jsx, {
            width: options.width || 800,
            height: options.height || 400,
            fonts: fonts.map((f) => ({
                name: f.name,
                data: f.data as ArrayBuffer,
                weight: f.weight as any,
                style: f.style || 'normal',
            })),
        });

        return svg;
    }

    /**
     * Convert SVG string to PNG buffer
     * @param svg - SVG string
     * @returns PNG buffer
     */
    private svgToPng(svg: string): Buffer {
        const resvg = new Resvg(svg);
        const pngData = resvg.render();
        return pngData.asPng();
    }

    /**
     * Parse HTML string to JSX-like structure for Satori
     * This is a simplified parser - Satori expects JSX elements
     * @param html - HTML string
     * @returns JSX element
     */
    private parseHtmlToJsx(html: string): any {
        // For now, we'll use a simple approach: assume the HTML is already JSX-compatible
        // or create a wrapper div with dangerouslySetInnerHTML
        // In production, you might want to use a proper HTML parser

        // Remove whitespace and newlines for cleaner parsing
        const cleaned = html.trim();

        // If it looks like a simple div structure, try to parse it
        // This is a simplified implementation - Satori works best with React.createElement or JSX
        // For the initial version, we'll support the style attribute and basic structure

        // Create a basic JSX structure
        // Note: Satori expects React.createElement format
        return this.htmlToReactElement(cleaned);
    }

    /**
     * Convert HTML string to React element format for Satori
     * @param html - HTML string
     * @returns React element
     */
    private htmlToReactElement(html: string): any {
        // This is a simplified parser that handles basic div elements
        // For production, consider using a library like html-react-parser

        // Extract the root element
        const divMatch = html.match(/<div([^>]*)>([\s\S]*)<\/div>/);

        if (!divMatch) {
            throw new HtmlCanvasError('Invalid HTML: Root element must be a div', 'PARSE_ERROR');
        }

        const attributes = this.parseAttributes(divMatch[1]);
        const children = this.parseChildren(divMatch[2]);

        return {
            type: 'div',
            props: {
                ...attributes,
                children,
            },
        };
    }

    /**
     * Parse HTML attributes to React props
     * @param attrString - Attribute string
     * @returns Props object
     */
    private parseAttributes(attrString: string): any {
        const props: any = {};

        // Parse style attribute
        const styleMatch = attrString.match(/style="([^"]*)"/);
        if (styleMatch) {
            props.style = this.parseStyle(styleMatch[1]);
        }

        return props;
    }

    /**
     * Parse CSS style string to style object
     * @param styleString - CSS style string
     * @returns Style object
     */
    private parseStyle(styleString: string): any {
        const style: any = {};
        const declarations = styleString.split(';').filter((s) => s.trim());

        for (const declaration of declarations) {
            const [property, value] = declaration.split(':').map((s) => s.trim());
            if (property && value) {
                // Convert kebab-case to camelCase
                const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                style[camelProperty] = value;
            }
        }

        return style;
    }

    /**
     * Parse HTML children
     * @param childrenHtml - Children HTML string
     * @returns Array of React elements or strings
     */
    private parseChildren(childrenHtml: string): any[] {
        const children: any[] = [];
        const content = childrenHtml.trim();

        // Simple text content
        if (!content.includes('<')) {
            return [content];
        }

        // Parse child elements (simplified - handles h1, p, div)
        const elementRegex = /<(h1|h2|h3|p|div|span)([^>]*)>([\s\S]*?)<\/\1>/g;
        let match;

        while ((match = elementRegex.exec(content)) !== null) {
            const [, tag, attrs, innerContent] = match;
            const attributes = this.parseAttributes(attrs);
            const innerChildren = this.parseChildren(innerContent);

            children.push({
                type: tag,
                props: {
                    ...attributes,
                    children: innerChildren,
                },
            });
        }

        // If no children found, return content as text
        if (children.length === 0) {
            return [content];
        }

        return children;
    }

    /**
     * Load and cache a font
     * @param font - Font options
     */
    public async loadFont(font: FontOptions): Promise<void> {
        const key = `${font.name}-${font.weight || 400}-${font.style || 'normal'}`;
        this.fontCache.set(key, font);
    }

    /**
     * Clear font cache
     */
    public clearFontCache(): void {
        this.fontCache.clear();
    }
}

/**
 * Simple function API for rendering HTML to buffer
 * @param html - HTML string
 * @param options - Rendering options
 * @returns Promise resolving to Buffer
 */
export async function renderHtmlToBuffer(
    html: string,
    options?: RenderOptions
): Promise<Buffer> {
    const canvas = new HtmlCanvas(options);
    const result = await canvas.render(html, options);

    if (typeof result === 'string') {
        throw new HtmlCanvasError('Expected buffer output but got SVG', 'FORMAT_ERROR');
    }

    return result;
}
