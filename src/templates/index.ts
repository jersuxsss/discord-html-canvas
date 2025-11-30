import { RankCardData, WelcomeCardData, LevelUpData } from '../types';

/**
 * Generate HTML for a rank card
 * @param data - Rank card data
 * @returns HTML string
 */
export function createRankCard(data: RankCardData): string {
    const {
        username,
        discriminator,
        avatar,
        level,
        currentXP,
        requiredXP,
        rank,
        backgroundColor = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        accentColor = '#7289DA',
        backgroundImage,
    } = data;

    const progress = (currentXP / requiredXP) * 100;
    const displayName = discriminator ? `${username}#${discriminator}` : username;

    const backgroundStyle = backgroundImage
        ? `background-image: url(${backgroundImage}); background-size: cover; background-position: center;`
        : `background: ${backgroundColor};`;

    return `
        <div style="width: 934px; height: 282px; ${backgroundStyle} border-radius: 20px; display: flex; align-items: center; padding: 30px; font-family: 'Arial', sans-serif; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3); border-radius: 20px;"></div>
            
            <div style="position: relative; display: flex; align-items: center; width: 100%;">
                <div style="width: 180px; height: 180px; border-radius: 50%; overflow: hidden; border: 6px solid ${accentColor}; flex-shrink: 0;">
                    <img src="${avatar}" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                
                <div style="margin-left: 30px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
                    <div style="display: flex; align-items: baseline; margin-bottom: 10px;">
                        <h1 style="font-size: 42px; font-weight: bold; color: white; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${username}</h1>
                        ${discriminator ? `<span style="font-size: 28px; color: rgba(255,255,255,0.7); margin-left: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">#${discriminator}</span>` : ''}
                    </div>
                    
                    <div style="display: flex; gap: 40px; margin-bottom: 20px;">
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-size: 16px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px;">Rank</span>
                            <span style="font-size: 32px; font-weight: bold; color: ${accentColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">#${rank}</span>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-size: 16px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px;">Level</span>
                            <span style="font-size: 32px; font-weight: bold; color: ${accentColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${level}</span>
                        </div>
                    </div>
                    
                    <div style="width: 100%;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 500;">${currentXP.toLocaleString()} / ${requiredXP.toLocaleString()} XP</span>
                            <span style="font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 500;">${Math.round(progress)}%</span>
                        </div>
                        <div style="width: 100%; height: 30px; background: rgba(0,0,0,0.3); border-radius: 15px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);">
                            <div style="width: ${progress}%; height: 100%; background: ${accentColor}; border-radius: 15px; box-shadow: 0 0 10px ${accentColor};"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate HTML for a welcome card
 * @param data - Welcome card data
 * @returns HTML string
 */
export function createWelcomeCard(data: WelcomeCardData): string {
    const {
        username,
        discriminator,
        avatar,
        guildName,
        memberCount,
        message = 'Welcome to the server!',
        backgroundColor = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundImage,
    } = data;

    const displayName = discriminator ? `${username}#${discriminator}` : username;

    const backgroundStyle = backgroundImage
        ? `background-image: url(${backgroundImage}); background-size: cover; background-position: center;`
        : `background: ${backgroundColor};`;

    return `
        <div style="width: 800px; height: 400px; ${backgroundStyle} border-radius: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Arial', sans-serif; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); border-radius: 20px;"></div>
            
            <div style="position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 40px;">
                <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden; border: 6px solid white; margin-bottom: 25px; box-shadow: 0 8px 16px rgba(0,0,0,0.3);">
                    <img src="${avatar}" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                
                <h1 style="font-size: 48px; font-weight: bold; color: white; margin: 0 0 10px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.5);">${message}</h1>
                <h2 style="font-size: 36px; font-weight: bold; color: #FFD700; margin: 0 0 20px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${displayName}</h2>
                
                <div style="background: rgba(0,0,0,0.5); padding: 15px 30px; border-radius: 10px; margin-top: 10px;">
                    <p style="font-size: 20px; color: rgba(255,255,255,0.9); margin: 0;">You are member <span style="color: #FFD700; font-weight: bold;">#${memberCount}</span></p>
                    <p style="font-size: 18px; color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">${guildName}</p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate HTML for a level up card
 * @param data - Level up data
 * @returns HTML string
 */
export function createLevelUpCard(data: LevelUpData): string {
    const {
        username,
        avatar,
        oldLevel,
        newLevel,
        backgroundColor = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        accentColor = '#FFD700',
    } = data;

    return `
        <div style="width: 600px; height: 300px; background: ${backgroundColor}; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-family: 'Arial', sans-serif; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3); border-radius: 20px;"></div>
            
            <div style="position: relative; display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 5px solid ${accentColor}; margin-bottom: 20px; box-shadow: 0 6px 12px rgba(0,0,0,0.3);">
                    <img src="${avatar}" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                
                <h1 style="font-size: 42px; font-weight: bold; color: white; margin: 0 0 15px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.5);">🎉 LEVEL UP! 🎉</h1>
                <h2 style="font-size: 28px; font-weight: bold; color: ${accentColor}; margin: 0 0 10px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${username}</h2>
                
                <div style="display: flex; align-items: center; gap: 20px; margin-top: 10px;">
                    <div style="background: rgba(0,0,0,0.5); padding: 10px 20px; border-radius: 10px;">
                        <p style="font-size: 16px; color: rgba(255,255,255,0.8); margin: 0 0 5px 0;">Previous Level</p>
                        <p style="font-size: 32px; font-weight: bold; color: white; margin: 0;">${oldLevel}</p>
                    </div>
                    <span style="font-size: 32px; color: ${accentColor};">→</span>
                    <div style="background: rgba(0,0,0,0.5); padding: 10px 20px; border-radius: 10px; border: 2px solid ${accentColor};">
                        <p style="font-size: 16px; color: rgba(255,255,255,0.8); margin: 0 0 5px 0;">New Level</p>
                        <p style="font-size: 32px; font-weight: bold; color: ${accentColor}; margin: 0;">${newLevel}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
