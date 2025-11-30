# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to the maintainer. Please do not create a public GitHub issue.

We will respond as quickly as possible and work with you to address the issue.

## Security Best Practices

When using discord-html-canvas:

1. **Validate User Input**: Always sanitize and validate any user-provided HTML before rendering
2. **Font Sources**: Only load fonts from trusted sources
3. **Resource Limits**: Set appropriate size limits for generated images
4. **Rate Limiting**: Implement rate limiting when generating images based on user requests

Thank you for helping keep discord-html-canvas and its users safe!
