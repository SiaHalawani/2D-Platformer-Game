/**
 * ================================================================
 * Game Project Documentation
 * ================================================================
 * 
 * Author: Sondos Halawani
 * ID: A2112613
 * Game Name: PinkBall
 * Version: 3
 * Deadline: 6 Dec 2024
 * 
 * Project Overview:
 * 
 * This project is a platformer game designed to showcase mastery in game development,
 * highlighting creativity, technical skills, and adherence to specific requirements.
 * The game includes an engaging narrative, comprehensive mechanics, and an intuitive
 * user experience designed to entertain and challenge players.
 * 
 * Classes and Responsibilities:
 * - **Ball**: Represents the main character. Handles movement, collision, and gameplay actions.
 * - **Enemy** & **Enemy2**: Represent hostile characters. Enemy2 offers additional mechanics (e.g., life bonuses).
 * - **Boss**: The final challenge in Level 3, with multiple phases, attacks, and dynamic behaviors.
 * - **WinLoseScreen**: Displays messages based on game outcomes (win, lose, or congratulations).
 * - **Menu**: Allows players to pause the game, restart, view instructions, and adjust settings.
 * - **Star**: Collectible items that increase the player's score.
 * - **Flag**: Marks the end of a level, transitioning players to the next stage.
 * - **PinkReward**: Represents PinkBall, appearing after defeating the Boss.
 * - **MapObject**: Static platforms or obstacles for the player to interact with.
 * - **ScrollingBackground**: Adds parallax animation to enhance the visual experience.
 * - **LevelManager**: Oversees level transitions, score, and life management.
 * - **ScoreManager**: Tracks and displays the player's score.
 * - **LifeManager**: Tracks and manages the player's lives.
 * - **Camera**: Follows the player's position and adjusts the visible game area dynamically.
 * 
 * Key Features and Requirements:
 * 
 * 1. **Introductory Level**:
 *    - Level 1 is a beginner-friendly tutorial stage.
 *    - Slower ball speed and dynamic instructions guide players through basic mechanics, such as:
 *      - Movement (left/right).
 *      - Jumping and double-jumping.
 *      - Collecting stars for points.
 *      - Interacting with enemies and platforms.
 * 
 * 2. **Instructions**:
 *    - A "How to Play" section in the in-game menu explains controls, objectives, and mechanics.
 *    - Dynamic hints appear during Level 1 for player guidance.
 * 
 * 3. **Story**:
 *    - The narrative revolves around the blue ball rescuing PinkBall from the evil BigBoss.
 *    - The story is accessible in the menu, with scrolling text providing context.
 * 
 * 4. **Pause Menu**:
 *    - The game can be paused using the "U" or "P" key, with "C" resuming gameplay.
 *    - Players can resume, restart, adjust sound settings, or view instructions and the story.
 * 
 * 5. **Restart**:
 *    - Players can restart the current level or the entire game via the pause menu.
 *    - The game restarts automatically after a game over or upon defeating the Boss.
 * 
 * 6. **Animations**:
 *    - Includes a scrolling background and animated behaviors for enemies and the Boss.
 * 
 * 7. **Background Music & Sound Effects**:
 *    - Continuous music enhances immersion, with adjustable volume or mute settings.
 *    - Sound effects accompany jumps, collisions, star collections, and attacks.
 * 
 * 8. **Score System**:
 *    - Players earn points by collecting stars (+10) and defeating enemies (+20).
 *    - The score is displayed in the top-left corner and tracked across levels.
 * 
 * 9. **Lives**:
 *    - Players start with seven lives, losing one upon collisions or falling.
 *    - Defeating special enemies (Enemy2) grants additional lives.
 * 
 * 10. **Win and Lose Screens**:
 *     - A "You Win" screen appears after completing a level, showing progression details.
 *     - A "You Lose" screen appears after all lives are lost, with an option to restart.
 *     - A "Congratulations" screen with the total score appears after defeating the Boss.
 * 
 * 11. **Continue Feature**:
 *     - Players retain their score and lives when transitioning between levels.
 * 
 * 12. **Level 2**:
 *     - Features more challenging platforms, enemies, and star placements.
 * 
 * 13. **Level 3 (BigBoss)**:
 *     - The final level introduces the Boss, who has:
 *       - **Three phases** based on health.
 *       - Dynamic behaviors, such as patrols, jumps, and bullet attacks.
 *       - Upon defeating the Boss, players reunite with PinkBall as the story concludes.
 * 
 * Game Flow:
 * - **Level 1**: A beginner-friendly level focusing on teaching core mechanics.
 * - **Level 2**: Introduces moderate challenges with more enemies and stars.
 * - **Level 3**: The ultimate showdown with the Boss, featuring dynamic gameplay and a narrative payoff.
 * 
 * Future Improvements:
 * - Adding more levels with unique mechanics (e.g., puzzles, new enemies).
 * - Enhancing animations and visual effects for better immersion.
 * - Incorporating leaderboards or multiplayer features for competitive play.
 * 
 * This project adheres to all specified requirements, delivering a polished, engaging, and feature-rich experience.
 * ================================================================
 */

/**
 * Represents a scrolling background that moves in sync with the camera.
 * The background scrolls horizontally to create a parallax effect,
 * enhancing the sense of depth in the game environment.
 */
class ScrollingBackground extends Sprite {
    /**
     * Constructs a ScrollingBackground object.
     * 
     * @param {string} imageSrc - The source path of the background image.
     * @param {number} speed - The scroll speed of the background relative to the camera.
     *                          A value closer to 1 indicates a faster scroll.
     * @param {number} canvasHeight - The height of the canvas where the background is drawn.
     * @param {number} canvasWidth - The width of the canvas where the background is drawn.
     */
    constructor(imageSrc, speed, canvasHeight, canvasWidth) {
        super();
        this.image = new Image(); // Image object for the background
        this.image.src = imageSrc; // Path to the background image
        this.x = 0; // Horizontal offset for the scrolling background
        this.speed = speed; // Scrolling speed factor
        this.canvasHeight = canvasHeight; // Canvas height for drawing
        this.canvasWidth = canvasWidth; // Canvas width for drawing
    }

    /**
     * Updates the horizontal position of the background based on the camera's movement.
     * Ensures the background wraps seamlessly when it reaches the end of the canvas.
     */
    update() {
        // Calculate the background's horizontal offset based on camera movement and speed
        this.x = (camera.x * this.speed) % this.canvasWidth;
    }

    /**
     * Draws the scrolling background on the canvas.
     * Ensures seamless wrapping by drawing two instances of the image side by side.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        // Draw the primary instance of the background
        ctx.drawImage(this.image, -this.x, 0, this.canvasWidth, this.canvasHeight);

        // Draw the second instance for seamless wrapping
        ctx.drawImage(
            this.image,
            this.canvasWidth - this.x,
            0,
            this.canvasWidth,
            this.canvasHeight
        );
    }
}

/**
 * Represents the player-controlled ball in the game. 
 * Handles movement, physics, collisions, and interactions with game elements.
 */
class Ball extends Sprite {
    /**
     * Constructs a Ball object.
     * 
     * @param {number} x - The initial x-coordinate of the ball.
     * @param {number} y - The initial y-coordinate of the ball.
     * @param {number} radius - The radius of the ball.
     * @param {string} color - The fill color of the ball.
     * @param {string} borderColor - The border color of the ball.
     */
    constructor(x, y, radius, color, borderColor) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.borderColor = borderColor;

        // Movement and physics properties
        this.dx = 0; // Horizontal movement speed
        this.dy = 0; // Vertical movement speed
        this.gravity = 0.4; // Gravity affecting the ball
        this.jumpStrength = -12; // Vertical velocity applied on jump
        this.maxJumps = 2; // Maximum number of jumps allowed (double-jump)
        this.jumpCount = 0; // Tracks the number of jumps made

        // Invulnerability state
        this.invulnerable = false; // Whether the ball is temporarily invulnerable
        this.invulnerabilityFrames = 0; // Counter for invulnerability duration
        this.maxInvulnerabilityFrames = 60; // Maximum duration of invulnerability

        this.paused = false; // Whether the ball is paused
        this.allowedActions = {
            right: false,
            left: false,
            jump: false,
            doubleJump: false,
        }; // Tracks allowed actions for movement

        // Sound effects
        this.jumpSound = new Audio("sounds/jumpSound.wav");
        this.enemyDeathSound = new Audio("sounds/enemyDeathSound.wav");
        this.starCollectedSound = new Audio("sounds/starCollected.wav");
        this.backgroundMusic = new Audio("sounds/espresso.mp3");
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.5;

        this.interacted = false; // Tracks if the player has interacted to start background music
    }

    /**
     * Enables a specific action for the ball.
     * 
     * @param {string} action - The action to allow (e.g., "right", "jump").
     */
    allowAction(action) {
        this.allowedActions[action] = true;
    }

    /**
     * Pauses the ball's movement and physics.
     */
    pauseBall() {
        this.paused = true;
        this.dx = 0;
        this.dy = 0;
    }

    /**
     * Resumes the ball's movement and physics.
     */
    resumeBall() {
        this.paused = false;
    }

    /**
     * Handles collision with a bullet.
     * If a collision occurs, the ball loses a life and becomes temporarily invulnerable.
     * 
     * @param {object} bullet - The bullet object to check for collision.
     * @param {LifeManager} lifeManager - The life manager handling lives.
     */
    handleBulletCollision(bullet, lifeManager) {
        if (this.invulnerable) return;

        const distX = Math.abs(this.x - bullet.x);
        const distY = Math.abs(this.y - bullet.y);
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        if (distance < this.radius + bullet.radius) {
            bullet.isActive = false; // Deactivate the bullet
            lifeManager.loseLife(); // Decrease player's life
            this.invulnerable = true; // Make the ball invulnerable temporarily
            console.log("Ball hit by bullet! Life lost.");
        }
    }

    /**
     * Updates the ball's state, handling movement, gravity, and collisions.
     * 
     * @param {Sprite[]} sprites - The array of all game sprites.
     * @param {object} keys - The object representing pressed keys.
     */
    update(sprites, keys) {
        if (this.paused) return; // Skip update if paused

        // Start background music on first interaction
        if (!this.interacted && (keys["ArrowRight"] || keys["ArrowLeft"] || keys[" "])) {
            this.interacted = true;
            this.backgroundMusic.play().catch((error) => {
                console.error("Background music playback failed:", error.message);
            });
        }

        const moveSpeed = 5; // Fixed horizontal movement speed

        // Horizontal movement based on allowed actions
        if (keys["ArrowRight"] && this.allowedActions.right) {
            this.dx = moveSpeed;
        } else if (keys["ArrowLeft"] && this.allowedActions.left) {
            this.dx = -moveSpeed;
        } else {
            this.dx = 0;
        }

        // Jumping logic
        if (keys[" "] && this.allowedActions.jump && this.jumpCount < this.maxJumps) {
            this.dy = this.jumpStrength;
            this.jumpCount++;
            keys[" "] = false;

            // Play jump sound
            this.jumpSound.currentTime = 0;
            this.jumpSound.play().catch((error) => {
                console.error("Jump sound playback failed:", error.message);
            });
        }

        // Apply gravity and update position
        this.dy += this.gravity;
        this.x += this.dx;
        this.y += this.dy;

        // Handle invulnerability timer
        if (this.invulnerable) {
            this.invulnerabilityFrames++;
            if (this.invulnerabilityFrames >= this.maxInvulnerabilityFrames) {
                this.invulnerable = false;
                this.invulnerabilityFrames = 0;
            }
        }

        // Check collisions with other sprites
        for (let sprite of sprites) {
            if (sprite instanceof MapObject) sprite.checkCollision(this);
            if (sprite instanceof Enemy && sprite.isActive) this.handleEnemyCollision(sprite);
            if (sprite instanceof Star && !sprite.collected && this.isColliding(sprite)) {
                sprite.collected = true;
                scoreManager.increment(10);
                this.starCollectedSound.currentTime = 0;
                this.starCollectedSound.play().catch((error) => {
                    console.error("Star collected sound playback failed:", error.message);
                });
            }
            if (sprite instanceof Boss && sprite.health > 0) {
                if (this.isColliding(sprite)) {
                    if (this.dy > 0) {
                        sprite.takeDamage();
                        this.dy = this.jumpStrength;
                    } else if (!this.invulnerable) {
                        lifeManager.loseLife();
                        this.invulnerable = true;
                    }
                }
            }
        }

        // Check if the ball falls off the map
        if (this.y > 600 + this.radius) {
            lifeManager.loseLife();
            this.resetPosition();
        }

        // Constrain the ball within horizontal boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > 5000 - this.radius) this.x = 5000 - this.radius;
    }

    /**
     * Handles collision with an enemy.
     * If the ball lands on the enemy, the enemy is defeated; otherwise, the ball loses a life.
     * 
     * @param {Enemy} enemy - The enemy object to check for collision.
     */
    handleEnemyCollision(enemy) {
        const ballBottom = this.y + this.radius;
        const ballTop = this.y - this.radius;
        const ballLeft = this.x - this.radius;
        const ballRight = this.x + this.radius;

        const enemyTop = enemy.y - enemy.size;
        const enemyBottom = enemy.y;
        const enemyLeft = enemy.x - enemy.size / 2;
        const enemyRight = enemy.x + enemy.size / 2;

        if (
            ballBottom > enemyTop &&
            ballTop < enemyTop &&
            ballRight > enemyLeft &&
            ballLeft < enemyRight &&
            this.dy > 0
        ) {
            enemy.isActive = false;
            scoreManager.increment(20);
            this.dy = this.jumpStrength;
            this.enemyDeathSound.currentTime = 0;
            this.enemyDeathSound.play().catch((error) => {
                console.error("Enemy death sound playback failed:", error.message);
            });
        } else if (
            ballRight > enemyLeft &&
            ballLeft < enemyRight &&
            ballBottom > enemyTop &&
            ballTop < enemyBottom
        ) {
            if (!this.invulnerable) {
                lifeManager.loseLife();
                this.invulnerable = true;
            }
        }
    }

    /**
     * Checks for collision with another sprite.
     * 
     * @param {Sprite} sprite - The sprite to check for collision.
     * @returns {boolean} - True if a collision occurs, false otherwise.
     */
    isColliding(sprite) {
        const distX = Math.abs(this.x - sprite.x);
        const distY = Math.abs(this.y - sprite.y);
        return distX < this.radius + sprite.size / 2 && distY < this.radius + sprite.size / 2;
    }

    /**
     * Resets the ball to its initial position and velocity.
     */
    resetPosition() {
        this.x = 100;
        this.y = 470;
        this.dy = 0;
        this.jumpCount = 0;
        console.log("Ball reset to position (100, 470) with no velocity or jumps");
    }

    /**
     * Draws the ball on the canvas.
     * The ball appears with a semi-transparent red overlay if invulnerable.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x - camera.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.invulnerable ? "rgba(255, 0, 0, 0.5)" : this.color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }
}
/**
 * Represents a basic enemy that moves horizontally on a platform
 * and jumps at regular intervals.
 */
class Enemy extends Sprite {
    /**
     * Constructs an Enemy object.
     * 
     * @param {number} x - The initial x-coordinate of the enemy.
     * @param {number} y - The initial y-coordinate of the enemy.
     * @param {number} size - The size (width and height) of the enemy.
     * @param {number} jumpStrength - The vertical velocity applied when jumping.
     * @param {number} jumpInterval - Frames between each jump.
     * @param {object} platform - The platform on which the enemy moves.
     * @param {string} color - The fill color of the enemy (default is "black").
     */
    constructor(x, y, size, jumpStrength, jumpInterval, platform, color) {
        super();
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color || "black";
        this.jumpStrength = jumpStrength;
        this.jumpInterval = jumpInterval;
        this.platform = platform;

        // Movement properties
        this.direction = 1; // 1 for right, -1 for left
        this.groundLevel = platform.y - size; // Ground level based on platform height
        this.currentFrame = 0; // Frame counter for jump timing
        this.dy = 0; // Vertical velocity
        this.gravity = 0.3; // Gravity affecting the enemy

        // State properties
        this.isActive = true; // Whether the enemy is active
        this.paused = false; // Whether the enemy is paused
    }

    /**
     * Updates the enemy's movement and physics.
     */
    update() {
        if (this.paused || !this.isActive) return;

        // Jump logic based on frame counter
        this.currentFrame++;
        if (this.currentFrame >= this.jumpInterval) {
            this.dy = -this.jumpStrength; // Apply jump strength
            this.currentFrame = 0; // Reset frame counter
        }

        // Apply gravity and update position
        this.dy += this.gravity;
        this.y += this.dy;
        this.x += this.direction * 2; // Move horizontally

        // Constrain movement within platform boundaries
        const platformLeft = this.platform.x;
        const platformRight = this.platform.x + this.platform.width;
        const enemyLeft = this.x - this.size / 2;
        const enemyRight = this.x + this.size / 2;

        if (enemyLeft <= platformLeft) {
            this.x = platformLeft + this.size / 2;
            this.direction = 1; // Reverse direction
        }
        if (enemyRight >= platformRight) {
            this.x = platformRight - this.size / 2;
            this.direction = -1; // Reverse direction
        }

        // Snap to platform ground level
        if (this.y > this.groundLevel) {
            this.y = this.groundLevel;
            this.dy = 0; // Reset vertical velocity
        }
    }

    /**
     * Draws the enemy on the canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (!this.isActive) return;

        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.x - this.size / 2 - camera.x,
            this.y - this.size,
            this.size,
            this.size
        );
    }
}

/**
 * Represents an advanced enemy that behaves like the basic enemy
 * but grants an extra life when defeated.
 */
class Enemy2 extends Sprite {
    /**
     * Constructs an Enemy2 object.
     * 
     * @param {number} x - The initial x-coordinate of the enemy.
     * @param {number} y - The initial y-coordinate of the enemy.
     * @param {number} size - The size (width and height) of the enemy.
     * @param {number} jumpStrength - The vertical velocity applied when jumping.
     * @param {number} jumpInterval - Frames between each jump.
     * @param {object} platform - The platform on which the enemy moves.
     * @param {string} color - The fill color of the enemy (default is "black").
     */
    constructor(x, y, size, jumpStrength, jumpInterval, platform, color) {
        super();
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color || "black";
        this.jumpStrength = jumpStrength;
        this.jumpInterval = jumpInterval;
        this.platform = platform;

        // Movement properties
        this.direction = 1; // 1 for right, -1 for left
        this.groundLevel = platform.y - size; // Ground level based on platform height
        this.currentFrame = 0; // Frame counter for jump timing
        this.dy = 0; // Vertical velocity
        this.gravity = 0.3; // Gravity affecting the enemy

        // State properties
        this.isActive = true; // Whether the enemy is active
        this.paused = false; // Whether the enemy is paused
        this.hasGivenLife = false; // Ensures life is only granted once
    }

    /**
     * Updates the enemy's movement, physics, and interactions with the ball.
     * 
     * @param {Sprite[]} sprites - The array of all game sprites.
     */
    update(sprites) {
        if (this.paused || !this.isActive) return;

        // Jump logic based on frame counter
        this.currentFrame++;
        if (this.currentFrame >= this.jumpInterval) {
            this.dy = -this.jumpStrength; // Apply jump strength
            this.currentFrame = 0; // Reset frame counter
        }

        // Apply gravity and update position
        this.dy += this.gravity;
        this.y += this.dy;
        this.x += this.direction * 2; // Move horizontally

        // Constrain movement within platform boundaries
        const platformLeft = this.platform.x;
        const platformRight = this.platform.x + this.platform.width;
        const enemyLeft = this.x - this.size / 2;
        const enemyRight = this.x + this.size / 2;

        if (enemyLeft <= platformLeft) {
            this.x = platformLeft + this.size / 2;
            this.direction = 1; // Reverse direction
        }
        if (enemyRight >= platformRight) {
            this.x = platformRight - this.size / 2;
            this.direction = -1; // Reverse direction
        }

        // Snap to platform ground level
        if (this.y > this.groundLevel) {
            this.y = this.groundLevel;
            this.dy = 0; // Reset vertical velocity
        }

        // Handle collision with the ball
        const ball = sprites.find(sprite => sprite instanceof Ball);
        if (ball) {
            const ballBottom = ball.y + ball.radius;
            const ballTop = ball.y - ball.radius;
            const ballLeft = ball.x - ball.radius;
            const ballRight = ball.x + ball.radius;

            const enemyTop = this.y - this.size;
            const enemyBottom = this.y;
            const enemyLeft = this.x - this.size / 2;
            const enemyRight = this.x + this.size / 2;

            // Ball lands on top of the enemy
            if (
                ballBottom > enemyTop &&
                ballTop < enemyTop &&
                ballRight > enemyLeft &&
                ballLeft < enemyRight &&
                ball.dy > 0
            ) {
                ball.dy = ball.jumpStrength; // Make the ball jump again
                this.isActive = false; // Deactivate the enemy

                if (!this.hasGivenLife) {
                    lifeManager.incrementLife(); // Grant an extra life
                    this.hasGivenLife = true; // Prevent multiple life grants
                }
            }
            // Ball collides with the enemy from the side
            else if (
                ballRight > enemyLeft &&
                ballLeft < enemyRight &&
                ballBottom > enemyTop &&
                ballTop < enemyBottom
            ) {
                if (!ball.invulnerable) {
                    lifeManager.loseLife(); // Decrease ball life
                    ball.invulnerable = true; // Grant temporary invulnerability
                }
            }
        }
    }

    /**
     * Draws the enemy on the canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (!this.isActive) return;

        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.x - this.size / 2 - camera.x,
            this.y - this.size,
            this.size,
            this.size
        );
    }
}

/**
 * Represents a collectible star in the game.
 */
class Star extends Sprite {
    /**
     * Constructs a Star object.
     * 
     * @param {number} x - The absolute x-coordinate of the star.
     * @param {number} y - The absolute y-coordinate of the star.
     * @param {number} size - The size (diameter) of the star.
     * @param {string} [color="yellow"] - The color of the star (default is yellow).
     */
    constructor(x, y, size, color) {
        super();
        this.x = x; // Absolute x-coordinate of the star
        this.y = y; // Absolute y-coordinate of the star
        this.size = size; // Size (diameter) of the star
        this.color = color || "yellow"; // Default color if none is provided
        this.collected = false; // Tracks whether the star has been collected
    }

    /**
     * Updates the star's state.
     * This method is currently empty as stars are static objects.
     */
    update() {
        // Static stars do not require updates
    }

    /**
     * Draws the star on the canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        // Skip drawing if the star is already collected
        if (this.collected) return;

        ctx.fillStyle = this.color;
        ctx.beginPath();

        // Variables for star shape
        const spikes = 5;
        const outerRadius = this.size / 2;
        const innerRadius = outerRadius / 2;
        const centerX = this.x - camera.x; // Adjust x-coordinate based on camera position
        const centerY = this.y; // Y-coordinate remains the same
        let rotation = Math.PI / 2 * 3; // Initial rotation for the star
        const step = Math.PI / spikes; // Angle between each spike

        // Draw the star shape
        ctx.moveTo(centerX, centerY - outerRadius);
        for (let i = 0; i < spikes; i++) {
            const xOuter = centerX + Math.cos(rotation) * outerRadius;
            const yOuter = centerY + Math.sin(rotation) * outerRadius;
            ctx.lineTo(xOuter, yOuter);
            rotation += step;

            const xInner = centerX + Math.cos(rotation) * innerRadius;
            const yInner = centerY + Math.sin(rotation) * innerRadius;
            ctx.lineTo(xInner, yInner);
            rotation += step;
        }
        ctx.lineTo(centerX, centerY - outerRadius);
        ctx.closePath();
        ctx.fill();
    }
}

/**
 * Represents a static map object, such as a platform or spike, that the ball can interact with.
 */
class MapObject extends Sprite {
    /**
     * Constructs a MapObject.
     * 
     * @param {number} x - The absolute x-coordinate of the object.
     * @param {number} y - The absolute y-coordinate of the object.
     * @param {number} width - The width of the object.
     * @param {number} height - The height of the object.
     * @param {string} type - The type of the object (e.g., "platform", "spike").
     * @param {string} [color="gray"] - The color of the object (default is gray).
     */
    constructor(x, y, width, height, type, color) {
        super();
        this.x = x; // Absolute x-coordinate of the object
        this.y = y; // Absolute y-coordinate of the object
        this.width = width; // Width of the object
        this.height = height; // Height of the object
        this.type = type; // Type of the object (e.g., platform, spike)
        this.color = color || "gray"; // Default color if none is provided
    }

    /**
     * Updates the state of the object.
     * This method is currently empty as map objects are static.
     */
    update() {
        // Static objects do not require updates
    }

    /**
     * Draws the map object on the canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - camera.x, this.y, this.width, this.height);
    }

    /**
     * Checks and handles collisions between the ball and this map object.
     * 
     * @param {Ball} ball - The ball to check for collisions.
     */
    checkCollision(ball) {
        // Check for collision with the ball
        const isColliding =
            ball.x + ball.radius > this.x &&
            ball.x - ball.radius < this.x + this.width &&
            ball.y + ball.radius > this.y &&
            ball.y - ball.radius < this.y + this.height;

        if (isColliding) {
            // Handle horizontal collisions
            if (ball.y + ball.radius > this.y && ball.y - ball.radius < this.y + this.height) {
                if (ball.x + ball.radius > this.x && ball.x < this.x && ball.dx > 0) {
                    // Ball moving right into the left side
                    ball.x = this.x - ball.radius;
                    ball.dx = 0;
                }
                if (
                    ball.x - ball.radius < this.x + this.width &&
                    ball.x > this.x + this.width &&
                    ball.dx < 0
                ) {
                    // Ball moving left into the right side
                    ball.x = this.x + this.width + ball.radius;
                    ball.dx = 0;
                }
            }

            // Handle vertical collisions
            if (ball.x + ball.radius > this.x && ball.x - ball.radius < this.x + this.width) {
                if (ball.y + ball.radius > this.y && ball.y < this.y && ball.dy > 0) {
                    // Ball falling onto the top of the object
                    ball.y = this.y - ball.radius;
                    ball.dy = 0;
                    ball.jumpCount = 0; // Reset jump count when landing
                }
                if (
                    ball.y - ball.radius < this.y + this.height &&
                    ball.y > this.y + this.height &&
                    ball.dy < 0
                ) {
                    // Ball hitting the bottom of the object
                    ball.y = this.y + this.height + ball.radius;
                    ball.dy = 0;
                }
            }

            // Handle special behavior for spikes
            if (this.type === "spike") {
                lifeManager.loseLife(); // Ball loses a life if it hits a spike
            }
        }
    }
}
/**
 * Represents a camera that follows a target object (e.g., the ball) in the game.
 */
class Camera extends Sprite {
    /**
     * Constructs a Camera object.
     *
     * @param {number} canvasWidth - The width of the canvas.
     * @param {number} canvasHeight - The height of the canvas.
     * @param {Sprite} target - The target sprite that the camera follows.
     */
    constructor(canvasWidth, canvasHeight, target) {
        super();
        this.x = 0; // Initial horizontal position of the camera
        this.canvasWidth = canvasWidth; // Width of the visible area
        this.canvasHeight = canvasHeight; // Height of the visible area
        this.target = target; // Target sprite to follow
        this.paused = false; // Pause state for the camera
    }

    /**
     * Updates the camera's position based on the target's position.
     * The camera stays within the bounds of the game world.
     */
    update() {
        if (this.paused) return; // Skip updates if the camera is paused
        if (this.target) {
            this.x = this.target.x - this.canvasWidth / 2; // Center target horizontally
            if (this.x < 0) this.x = 0; // Prevent going past the left edge
            if (this.x > 5000 - this.canvasWidth) {
                this.x = 5000 - this.canvasWidth; // Prevent going past the right edge
            }
        }
    }

    /**
     * Draws the camera view. The camera itself does not render any graphics.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        // Camera itself does not draw anything
    }
}

/**
 * Manages the player's score in the game.
 */
class ScoreManager extends Sprite {
    /**
     * Constructs a ScoreManager object.
     */
    constructor() {
        super();
        this.score = 0; // Initialize the score
    }

    /**
     * Increments the score by a specified number of points.
     *
     * @param {number} points - The number of points to add to the score.
     */
    increment(points) {
        this.score += points; // Add points to the score
    }

    /**
     * Draws the current score on the screen.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.fillStyle = "white"; // Text color
        ctx.font = "20px Arial"; // Font style and size
        ctx.textAlign = "left"; // Align text to the left
        ctx.fillText(`Score: ${this.score}`, 20, 30); // Draw score at the top-left corner
    }
}

/**
 * Displays a progress bar that shows the player's progress in the current level.
 */
class ProgressBar extends Sprite {
    /**
     * Constructs a ProgressBar object.
     *
     * @param {Ball} ball - The ball whose position determines the progress.
     * @param {number} totalDistance - The total horizontal distance of the level.
     * @param {number} canvasWidth - The width of the canvas.
     */
    constructor(ball, totalDistance, canvasWidth) {
        super();
        this.ball = ball; // The ball whose progress is tracked
        this.totalDistance = totalDistance; // Total horizontal distance of the level
        this.canvasWidth = canvasWidth; // Width of the canvas
        this.barWidth = 400; // Width of the progress bar
        this.barHeight = 10; // Height of the progress bar
        this.marginTop = 20; // Margin from the top of the screen
        this.marginSides = (canvasWidth - this.barWidth) / 2; // Center the progress bar horizontally
    }

    /**
     * Draws the progress bar on the screen.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        // Calculate the progress as a fraction (clamped to 1.0)
        const progress = Math.min(this.ball.x / this.totalDistance, 1);

        // Draw the background bar
        ctx.fillStyle = "lightgray"; // Background bar color
        ctx.fillRect(this.marginSides, this.marginTop, this.barWidth, this.barHeight);

        // Draw the progress indicator
        ctx.fillStyle = "blue"; // Progress bar color
        ctx.fillRect(this.marginSides, this.marginTop, this.barWidth * progress, this.barHeight);

        // Draw the progress marker as a small circle
        ctx.beginPath();
        ctx.arc(
            this.marginSides + this.barWidth * progress, // Horizontal position of the marker
            this.marginTop + this.barHeight / 2, // Vertical center of the bar
            5, // Radius of the marker
            0,
            Math.PI * 2
        );
        ctx.fillStyle = "red"; // Marker color
        ctx.fill();
        ctx.closePath();
    }
}
/**
 * Manages the player's lives in the game and interacts with the WinLoseScreen when lives reach zero.
 */
class LifeManager extends Sprite {
    /**
     * Constructs a LifeManager object.
     *
     * @param {number} maxLives - The maximum number of lives the player can have.
     */
    constructor(maxLives) {
        super();
        this.maxLives = maxLives; // Maximum lives the player can have
        this.currentLives = maxLives; // Initialize current lives to maximum
        this.winLoseScreen = null; // Reference to the WinLoseScreen for handling game-over scenarios
    }

    /**
     * Increases the player's lives by one, up to the maximum limit.
     * Prevents exceeding the maximum number of lives.
     */
    incrementLife() {
        this.currentLives = Math.min(this.currentLives + 1, this.maxLives);
        console.log(`Extra life granted! Lives: ${this.currentLives}`);
    }

    /**
     * Links the WinLoseScreen to the LifeManager for displaying the lose screen
     * when the player's lives reach zero.
     *
     * @param {WinLoseScreen} winLoseScreen - The WinLoseScreen instance.
     */
    setWinLoseScreen(winLoseScreen) {
        this.winLoseScreen = winLoseScreen;
    }

    /**
     * Decreases the player's lives by one. If lives reach zero, triggers the lose screen.
     * Logs information about the player's life state.
     */
    loseLife() {
        if (this.currentLives > 0) {
            console.log(`Losing a life. Current lives before: ${this.currentLives}`);
            this.currentLives--;
            console.log(`Lives after decrement: ${this.currentLives}`);

            if (this.currentLives === 0 && this.winLoseScreen) {
                console.log("No lives left. Showing lose screen.");
                this.winLoseScreen.showLoseMessage();
            }
        } else {
            console.log("Attempted to lose a life with 0 lives left. Ignoring.");
        }
    }

    /**
     * Draws the life display (hearts) on the screen to represent the player's remaining lives.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        const heartSize = 20; // Size of each heart icon
        const gap = 10; // Gap between heart icons
        const startX = 20; // Starting x-coordinate for the first heart
        const startY = 50; // Starting y-coordinate for the hearts

        for (let i = 0; i < this.maxLives; i++) {
            ctx.save();
            ctx.translate(startX + (heartSize + gap) * i, startY); // Position each heart
            ctx.beginPath();

            // Draw a heart shape using bezier curves
            ctx.moveTo(0, -heartSize / 2);
            ctx.bezierCurveTo(-heartSize / 2, -heartSize, -heartSize, 0, 0, heartSize);
            ctx.bezierCurveTo(heartSize, 0, heartSize / 2, -heartSize, 0, -heartSize / 2);

            // Fill with red for active lives and light coral for lost lives
            ctx.fillStyle = i < this.currentLives ? "red" : "lightcoral";
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }
    }
}

/**
 * Represents the Win/Lose/Congratulations screen that appears during specific game events.
 * Handles the display of messages and actions based on the game state (win, lose, or complete).
 */
class WinLoseScreen extends Sprite {
    constructor() {
        super();
        this.isVisible = false; // Indicates if the screen is currently visible
        this.levelManager = null; // Reference to the LevelManager for managing levels
        this.message = ""; // Message to display on the screen
        this.totalScore = 0; // Tracks the total score to display on the Congratulations screen
    }

    /**
     * Links the LevelManager to the WinLoseScreen for level management.
     *
     * @param {LevelManager} levelManager - The LevelManager instance controlling game levels.
     */
    setLevelManager(levelManager) {
        this.levelManager = levelManager;
    }

    /**
     * Displays the win message and pauses the game.
     */
    showWinMessage() {
        this.message = "You Win!";
        this.isVisible = true;
        this.pauseGame(); // Pause all sprites
    }

    /**
     * Displays the lose message and pauses the game.
     */
    showLoseMessage() {
        this.message = "You Lose!";
        this.isVisible = true;
        this.pauseGame(); // Pause all sprites
    }

    /**
     * Displays the congratulations message, total score, and pauses the game.
     *
     * @param {number} score - The total score to display.
     */
    showCongratulationsMessage(score) {
        this.message = "CONGRATULATIONS!";
        this.totalScore = score;
        this.isVisible = true;
        this.pauseGame(); // Pause all sprites
    }

    /**
     * Pauses all sprites in the game except the WinLoseScreen itself.
     */
    pauseGame() {
        this.sprites.forEach(sprite => {
            if (sprite !== this) {
                sprite.paused = true; // Set paused state for all sprites
            }
        });
    }

    /**
     * Resumes all sprites in the game.
     */
    resumeGame() {
        this.sprites.forEach(sprite => {
            sprite.paused = false; // Resume all sprites
        });
    }

    /**
     * Updates the state of the WinLoseScreen, managing user interactions.
     *
     * @param {Sprite[]} sprites - Array of all active sprites in the game.
     * @param {Object} keys - Object tracking user input states (e.g., key presses).
     */
    update(sprites, keys) {
        this.sprites = sprites; // Cache the sprites array for pause/resume handling

        if (this.isVisible) {
            console.log("WinLoseScreen is visible");

            // Handle user input to proceed
            if (keys["Enter"]) {
                console.log(`Enter pressed: ${this.message}`);
                this.isVisible = false;

                if (this.message === "You Win!") {
                    console.log("Proceeding to the next level.");
                    if (this.levelManager) {
                        this.levelManager.triggerNextLevel(); // Move to the next level
                    } else {
                        console.error("LevelManager not set for WinLoseScreen!");
                    }
                } else if (this.message === "You Lose!") {
                    console.log("Restarting to Level 1 (You Lose).");
                    if (this.levelManager) {
                        this.levelManager.currentLevel = 0; // Reset to Level 1
                        this.levelManager.loadLevel(game); // Reload the first level
                        location.reload(); // Perform a hard restart
                    } else {
                        console.error("LevelManager not set for WinLoseScreen!");
                    }
                } else if (this.message.startsWith("CONGRATULATIONS")) {
                    console.log("Restarting game (Congratulations).");
                    if (this.levelManager) {
                        this.levelManager.currentLevel = 0; // Reset to Level 1
                        this.levelManager.loadLevel(game); // Reload the first level
                        location.reload(); // Perform a hard restart
                    } else {
                        console.error("LevelManager not set for WinLoseScreen!");
                    }
                }

                keys["Enter"] = false; // Prevent repeated actions

                // Resume updates for all sprites after exiting the screen
                this.resumeGame();
            }
        }
    }

    /**
     * Draws the WinLoseScreen and its corresponding messages or instructions.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (!this.isVisible) return;

        // Dim the background to highlight the message
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Display the main message
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";

        const lines = this.message.split("\n");
        lines.forEach((line, index) => {
            ctx.fillText(line, ctx.canvas.width / 2, ctx.canvas.height / 2 - 20 + index * 30);
        });

        // Additional instructions for each game state
        if (this.message === "You Win!") {
            ctx.fillText("Press Enter to go to the next level", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
        } else if (this.message === "You Lose!") {
            ctx.fillText("Press Enter to restart the game", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
        } else if (this.message.startsWith("CONGRATULATIONS")) {
            ctx.fillText(`Total Score: ${this.totalScore}`, ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
            ctx.fillText("Press Enter to restart the game", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
        }
    }
}

/**
 * Represents a reward that triggers the win or congratulations screen upon interaction.
 * Typically used as the final goal in the game.
 */
class PinkReward extends Sprite {
    constructor(x, y, width, height, winLoseScreen) {
        super();
        this.x = x; // Absolute x-coordinate of the reward
        this.y = y; // Absolute y-coordinate of the reward
        this.width = width; // Width of the reward area
        this.height = height; // Height of the reward area
        this.image = new Image(); // Reward image
        this.image.src = "images/happyPinky.webp"; // Path to the reward image
        this.winLoseScreen = winLoseScreen; // Reference to the WinLoseScreen
    }

    /**
     * Checks if the ball interacts with the reward and triggers appropriate actions.
     *
     * @param {Sprite[]} sprites - Array of active sprites in the game.
     */
    update(sprites) {
        const ball = sprites.find(sprite => sprite instanceof Ball);

        if (ball &&
            ball.x + ball.radius > this.x &&
            ball.x - ball.radius < this.x + this.width &&
            ball.y + ball.radius > this.y &&
            ball.y - ball.radius < this.y + this.height
        ) {
            console.log("Ball touched PinkReward!");

            if (this.winLoseScreen) {
                if (this.winLoseScreen.levelManager.currentLevel === this.winLoseScreen.levelManager.levels.length - 1) {
                    // If it's the final level, show the "Congratulations" screen
                    this.winLoseScreen.showCongratulationsMessage(scoreManager.score);
                } else {
                    // Otherwise, show the "You Win!" message
                    this.winLoseScreen.showWinMessage();
                }
            }
        }
    }

    /**
     * Draws the reward object on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (this.x > -100 && this.y > -100) { // Only draw if the position is valid
            ctx.drawImage(
                this.image,
                this.x - camera.x, // Adjust for camera position
                this.y,
                this.width,
                this.height
            );
        } else {
            console.warn("PinkReward is out of bounds and not drawn.");
        }
    }
}

/**
 * Displays the current level number on the screen.
 * Positioned at the top-right corner of the canvas.
 */
class LevelTracker extends Sprite {
    constructor(levelManager, canvasWidth) {
        super();
        this.levelManager = levelManager; // Reference to the LevelManager
        this.canvasWidth = canvasWidth; // Canvas width for positioning
    }

    /**
     * Draws the level tracker on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        // Define tracker box dimensions
        const boxWidth = 150;
        const boxHeight = 40;

        // Position the tracker in the top-right corner
        const x = this.canvasWidth - boxWidth - 20; // 20px margin from the right
        const y = 20; // 20px margin from the top

        // Draw the background box
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(x, y, boxWidth, boxHeight);

        // Display the current level text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(
            `Level: ${this.levelManager.currentLevel + 1}`, // Display the 1-indexed level
            x + boxWidth / 2, // Center text horizontally
            y + boxHeight / 2 + 7 // Center text vertically
        );
    }

    /**
     * Dynamically reflects the current level. No manual updates are required.
     */
    update() {
        // No updates needed
    }
}

/**
 * Represents a bullet fired by an enemy or other entities.
 * Handles movement, collisions, and deactivation upon exiting the screen.
 */
class Bullet extends Sprite {
    constructor(x, y, dx, dy, radius, color) {
        super();
        this.x = x; // Starting x-coordinate
        this.y = y; // Starting y-coordinate
        this.dx = dx; // Horizontal velocity
        this.dy = dy; // Vertical velocity
        this.radius = radius; // Radius of the bullet
        this.color = color || "red"; // Default bullet color
        this.isActive = true; // Determines if the bullet is active
    }

    /**
     * Updates the bullet's position and checks if it exits the game bounds.
     */
    update() {
        if (!this.isActive) return;

        // Update the position
        this.x += this.dx;
        this.y += this.dy;

        // Deactivate the bullet if it goes off the screen
        if (
            this.x < 0 ||
            this.x > 5000 || // Assuming the game area width is 5000
            this.y < 0 ||
            this.y > 600 // Assuming the game area height is 600
        ) {
            this.isActive = false;
        }
    }

    /**
     * Draws the bullet as a circle on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (!this.isActive) return;

        ctx.beginPath();
        ctx.arc(this.x - camera.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    /**
     * Checks if the bullet collides with a target.
     *
     * @param {Sprite} target - The target to check for collisions.
     * @returns {boolean} - True if a collision occurs, false otherwise.
     */
    checkCollision(target) {
        if (!this.isActive) return false;

        // Calculate the distance between the bullet and the target
        const distX = Math.abs(this.x - target.x);
        const distY = Math.abs(this.y - target.y);
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        return distance < this.radius + target.radius;
    }
}

/**
 * Represents the level-completion flag.
 * Interacts with the ball to trigger the win state.
 */
class Flag extends Sprite {
    constructor(x, y, width, height, winLoseScreen) {
        super();
        this.x = x; // Absolute x-coordinate
        this.y = y; // Absolute y-coordinate
        this.width = width; // Width of the flag
        this.height = height; // Height of the flag
        this.image = new Image(); // Flag image
        this.image.src = "images/flag.png"; // Path to the flag image
        this.winLoseScreen = winLoseScreen; // Reference to WinLoseScreen
    }

    /**
     * Checks if the ball touches the flag and triggers the win state.
     *
     * @param {Sprite[]} sprites - Array of active sprites in the game.
     */
    update(sprites) {
        const ball = sprites.find(sprite => sprite instanceof Ball);

        const isTouching =
            ball.x + ball.radius > this.x &&
            ball.x - ball.radius < this.x + this.width &&
            ball.y + ball.radius > this.y &&
            ball.y - ball.radius < this.y + this.height;

        if (isTouching) {
            console.log("Ball touched the flag!");
            if (this.winLoseScreen) {
                this.winLoseScreen.showWinMessage(); // Trigger the win state
            } else {
                console.error("WinLoseScreen not defined for the flag!");
            }
        }
    }

    /**
     * Draws the flag on the canvas relative to the camera's position.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.image, this.x - camera.x, this.y, this.width, this.height);
    }
}

/**
 * Manages levels, including loading levels, transitioning between them, and resetting game state.
 */
class LevelManager extends Sprite {
    constructor(levels, ball, scoreManager, lifeManager, winLoseScreen, camera, menu) {
        super();
        this.levels = levels; // Array of levels, each containing map objects
        this.currentLevel = 0; // Index of the current level
        this.ball = ball; // Reference to the Ball object
        this.scoreManager = scoreManager; // Tracks and displays the score
        this.lifeManager = lifeManager; // Tracks and displays player lives
        this.winLoseScreen = winLoseScreen; // Handles win/lose messages
        this.camera = camera; // Camera object for tracking ball
        this.menu = menu; // In-game menu system
        this.isTransitioning = false; // Indicates if transitioning between levels
    }

    /**
     * Loads the current level by resetting objects and adding relevant sprites.
     *
     * @param {object} game - The game object containing all sprites.
     */
    loadLevel(game) {
        console.log(`Loading Level ${this.currentLevel + 1}`);

        // Retain only essential objects (core game components)
        game.sprites = game.sprites.filter(sprite =>
            sprite instanceof Ball ||
            sprite instanceof ProgressBar ||
            sprite instanceof ScoreManager ||
            sprite instanceof LifeManager ||
            sprite instanceof WinLoseScreen ||
            sprite instanceof Camera ||
            sprite instanceof Menu
        );

        console.log("Cleared sprites, keeping essential objects");

        // Add map objects for the current level
        const currentMap = this.levels[this.currentLevel];
        console.log("Adding map objects to the game");
        currentMap.forEach(sprite => game.addSprite(sprite));

        // Reset the ball's position and movement properties
        this.ball.x = 100;
        this.ball.y = 470;
        this.ball.dx = 0;
        this.ball.dy = 0;
        this.ball.jumpCount = 0;
        console.log("Ball reset to starting position");

        // Reset score and lives only for the first level
        if (this.currentLevel === 0) {
            console.log("Resetting score and lives for the first level");
            this.scoreManager.score = 0;
            this.lifeManager.currentLives = this.lifeManager.maxLives;
        }

        // Add instructional messages for Level 1
        if (this.currentLevel === 0) {
            console.log("Adding instructional messages for Level 1");
            const messageSystem = new MessageSystem(this.ball);
            game.addSprite(messageSystem);
        }

        // Add core game objects
        game.addSprite(this.ball);
        console.log("Added ball to sprites");

        game.addSprite(new ProgressBar(this.ball, this.calculateLevelDistance(currentMap), game.canvas.width));
        game.addSprite(this.scoreManager);
        game.addSprite(this.lifeManager);
        game.addSprite(this.winLoseScreen);
        game.addSprite(this.camera);
        game.addSprite(this.menu);
        console.log("Added common sprites");

        console.log(`Level ${this.currentLevel + 1} loaded.`);
    }

    /**
     * Triggers the next level, or logs a message if all levels are completed.
     */
    triggerNextLevel() {
        if (this.currentLevel < this.levels.length - 1) {
            this.currentLevel++;
            this.loadLevel(game);
        } else {
            console.log("All levels completed!");
        }
    }

    /**
     * Calculates the total distance for the progress bar based on level objects.
     *
     * @param {Array} levelMap - Array of map objects for the level.
     * @returns {number} The maximum x-coordinate covered by the map.
     */
    calculateLevelDistance(levelMap) {
        let maxDistance = 0;
        levelMap.forEach(sprite => {
            if (sprite.x && sprite.width) {
                maxDistance = Math.max(maxDistance, sprite.x + sprite.width);
            }
        });
        return maxDistance;
    }

    /**
     * Updates the game state during level transitions or when bosses are present.
     *
     * @param {Sprite[]} sprites - Array of active sprites in the game.
     * @param {Object} keys - Current state of input keys.
     */
    update(sprites, keys) {
        if (this.isTransitioning) {
            if (keys["Enter"]) {
                this.isTransitioning = false;
                keys["Enter"] = false;

                switch (this.currentLevel) {
                    case 0:
                        this.currentLevel = 1;
                        this.loadLevel(game);
                        break;
                    case 1:
                        this.currentLevel = 2;
                        this.loadLevel(game);
                        break;
                    case 2:
                        console.log("All levels completed! Restarting from Level 1.");
                        this.currentLevel = 0;
                        this.loadLevel(game);
                        break;
                    default:
                        console.error("Unknown level!");
                        break;
                }
            }
        } else {
            // Update boss-specific behavior if applicable
            const boss = sprites.find(sprite => sprite instanceof Boss);

            if (boss) {
                boss.update();
                boss.checkBulletCollisions(ball, lifeManager);
            }
        }
    }

    /**
     * Does not draw anything; used only for game state management.
     */
    draw(ctx) {
        // No rendering required for LevelManager
    }
}

/**
 * Displays instructional messages during the first level to guide the player.
 */
class MessageSystem extends Sprite {
    constructor(ball) {
        super();
        this.ball = ball; // Reference to the Ball object
        this.messages = [
            { text: "Press → to move right", action: "right" },
            { text: "Press ← to move left", action: "left" },
            { text: "Press Space to jump", action: "jump" },
            { text: "Press Space again for a double jump", action: "doubleJump" },
        ];
        this.currentMessageIndex = 0; // Tracks the current message being displayed
        this.isActive = true; // Indicates whether the MessageSystem is active
    }

    /**
     * Updates the messages based on the player's actions and progress.
     *
     * @param {Sprite[]} sprites - Array of active sprites in the game.
     */
    update(sprites) {
        if (!this.isActive) return;

        const currentMessage = this.messages[this.currentMessageIndex];
        this.ball.allowAction(currentMessage.action);

        // Progress to the next message based on ball actions
        if (
            (currentMessage.action === "right" && this.ball.x > 105) ||
            (currentMessage.action === "left" && this.ball.x < 95) ||
            (currentMessage.action === "jump" && this.ball.jumpCount === 1) ||
            (currentMessage.action === "doubleJump" && this.ball.jumpCount === 2)
        ) {
            this.currentMessageIndex++;
            if (this.currentMessageIndex >= this.messages.length) {
                this.isActive = false;
            }
        }
    }

    /**
     * Draws the current instructional message on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (!this.isActive) return;

        const currentMessage = this.messages[this.currentMessageIndex];
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, ctx.canvas.height - 80, ctx.canvas.width, 50);
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(currentMessage.text, ctx.canvas.width / 2, ctx.canvas.height - 50);
    }
}

/**
 * Represents the Boss entity in the game.
 * The Boss has multiple phases, dynamic behaviors, and attacks, and provides a reward when defeated.
 */
class Boss extends Sprite {
    /**
     * Constructs a new Boss instance.
     * @param {number} x - The initial x-coordinate of the boss.
     * @param {number} y - The initial y-coordinate of the boss.
     * @param {number} size - The size of the boss (affects visual size and hitbox).
     * @param {number} health - The initial health of the boss.
     * @param {object} platform - The platform serving as the arena floor for the boss.
     * @param {string} [color="darkred"] - The color of the boss.
     * @param {object} pinkReward - The reward to appear when the boss is defeated.
     * @param {string} [imageSrc="images/bigboss.png"] - The source for the boss's initial image.
     */
    constructor(x, y, size, health, platform, color, pinkReward, imageSrc) {
        super();
        this.x = x; // Initial x-coordinate
        this.y = y; // Initial y-coordinate
        this.size = size; // Size of the boss
        this.color = color || "darkred"; // Default color for the boss
        this.health = health; // Current health of the boss
        this.maxHealth = health; // Maximum health for phase calculations
        this.platform = platform; // Reference to the platform acting as the ground
        this.groundLevel = platform.y - size; // Ground level for the boss
        this.dy = 0; // Vertical speed
        this.gravity = 0.3; // Gravity force applied to the boss
        this.pinkReward = pinkReward; // Reward object to trigger when the boss is defeated
        this.phase = 1; // Initial behavior phase
        this.attackCooldown = 0; // Cooldown timer for attacks
        this.behaviorTimer = 0; // Timer for dynamic behaviors
        this.targetX = null; // Target x-coordinate for movement
        this.direction = 1; // Direction of movement (1 = right, -1 = left)
        this.jumpCooldown = 0; // Cooldown timer for jumping
        this.bullets = []; // Array to store active bullets
        this.bulletCooldown = 0; // Cooldown timer for firing bullets

        // Load the initial boss image
        this.image = new Image();
        this.image.src = imageSrc || "images/bigboss.png"; // Default boss image
    }

    /**
     * Updates the boss's state, including movement, attacks, and phase transitions.
     */
    update() {
        if (this.health <= 0) return; // Stop updates if the boss is defeated

        // Apply gravity to simulate falling
        this.dy += this.gravity;
        this.y += this.dy;

        // Prevent the boss from falling below the ground level
        if (this.y >= this.groundLevel) {
            this.y = this.groundLevel;
            this.dy = 0;
        }

        // Update the boss's phase based on its health
        this.updatePhase();

        // Execute behaviors based on the current phase
        if (this.phase === 1) {
            this.randomPatrol(); // Simple movement pattern in Phase 1
        } else if (this.phase === 2) {
            this.moveAndJump(); // Movement with occasional jumps in Phase 2
        } else if (this.phase === 3) {
            this.moveAndFrequentJump(); // Aggressive movement and frequent jumps in Phase 3
            this.throwBullets(); // Start shooting bullets in Phase 3
        }

        // Update active bullets
        this.updateBullets();

        // Decrease attack cooldowns if active
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.jumpCooldown > 0) this.jumpCooldown--;
    }

    /**
     * Determines and updates the boss's current behavior phase based on its health.
     */
    updatePhase() {
        const healthPercent = (this.health / this.maxHealth) * 100; // Calculate health percentage

        // Transition to Phase 2 after the first hit
        if (this.phase === 1 && healthPercent < 100) {
            this.phase = 2;
            this.changeToMadBoss();
            console.log("Boss enters Phase 2 after the first hit!");
        }

        // Transition to Phase 3 when health drops below 30%
        if (healthPercent <= 30 && this.phase < 3) {
            this.phase = 3;
            this.changeToVeryMadBoss();
            console.log("Boss enters Phase 3!");
        }
    }

    /**
     * Changes the boss's appearance to reflect Phase 2.
     */
    changeToMadBoss() {
        this.image.src = "images/madboss.png"; // Update the image for Phase 2
    }

    /**
     * Changes the boss's appearance to reflect Phase 3.
     */
    changeToVeryMadBoss() {
        this.image.src = "images/verymad.png"; // Update the image for Phase 3
    }

    /**
     * Implements random back-and-forth movement for Phase 1.
     */
    randomPatrol() {
        if (this.behaviorTimer <= 0) {
            // Choose a random target x-coordinate within the platform bounds
            this.targetX = this.platform.x + Math.random() * this.platform.width;

            // Prevent the boss from moving too far to the left
            if (this.targetX < 450) this.targetX = 450;

            this.behaviorTimer = 120; // Set timer before choosing a new target
        }

        // Move toward the target position at a speed relative to the phase
        const speed = 2 + this.phase;
        if (Math.abs(this.x - this.targetX) > 5) {
            this.x += this.x < this.targetX ? speed : -speed;
        } else {
            this.behaviorTimer--; // Decrease the behavior timer
        }
    }

    /**
     * Handles movement and occasional jumps for Phase 2.
     */
    moveAndJump() {
        if (this.behaviorTimer <= 0) {
            const actionType = Math.random(); // Randomly decide between movement or jumping

            if (actionType < 0.5) {
                // Move to a random position within the platform
                this.targetX = this.platform.x + Math.random() * this.platform.width;

                if (this.targetX < 450) this.targetX = 450;

                this.behaviorTimer = 120; // Set timer before the next action
            } else {
                // Perform a jump if on the ground
                if (this.dy === 0) {
                    this.dy = -9; // Set jump strength
                    console.log("Boss jumps in Phase 2!");
                }
                this.behaviorTimer = 60; // Shorter interval between jumps
            }
        }

        // Move toward the target position
        const speed = 3 + this.phase;
        if (Math.abs(this.x - this.targetX) > 5) {
            this.x += this.x < this.targetX ? speed : -speed;
        } else {
            this.behaviorTimer--;
        }
    }

    /**
 * Handles frequent jumping and horizontal movement for Phase 3.
 */
    moveAndFrequentJump() {
        // Jump only if on the ground and cooldown has expired
        if (this.jumpCooldown <= 0 && this.dy === 0) {
            this.dy = -11; // Increased jump height for Phase 3
            this.direction = Math.random() > 0.5 ? 1 : -1; // Randomly choose a direction
            console.log("Boss jumps frequently in Phase 3!");
            this.jumpCooldown = 30; // Shorter cooldown between jumps in Phase 3
        }

        // Apply horizontal movement during jumps
        const horizontalSpeed = 6 + this.phase; // Speed increases with phase
        this.x += this.direction * horizontalSpeed;

        // Ensure the boss stays within platform bounds
        if (this.x <= this.platform.x) {
            this.x = this.platform.x; // Prevent going off the left edge
            this.direction = 1; // Reverse direction to the right
        } else if (this.x >= this.platform.x + this.platform.width) {
            this.x = this.platform.x + this.platform.width; // Prevent going off the right edge
            this.direction = -1; // Reverse direction to the left
        }

        // Prevent the boss from moving too far left (beyond 450px)
        if (this.x < 450) {
            this.x = 450; // Set a left limit
        }
    }

    /**
     * Handles bullet firing behavior for the boss.
     * Shoots bullets in multiple directions simultaneously.
     */
    throwBullets() {
        if (this.bulletCooldown > 0) {
            this.bulletCooldown--; // Decrease cooldown timer
            return;
        }

        const bulletSpeed = 5; // Speed of the bullets
        const bulletDirections = [
            { dx: bulletSpeed, dy: 0 }, // Right
            { dx: -bulletSpeed, dy: 0 }, // Left
            { dx: 0, dy: bulletSpeed }, // Down
            { dx: 0, dy: -bulletSpeed }, // Up
            { dx: bulletSpeed, dy: bulletSpeed }, // Diagonal down-right
            { dx: -bulletSpeed, dy: bulletSpeed }, // Diagonal down-left
            { dx: bulletSpeed, dy: -bulletSpeed }, // Diagonal up-right
            { dx: -bulletSpeed, dy: -bulletSpeed } // Diagonal up-left
        ];

        // Create bullets in all defined directions
        bulletDirections.forEach(direction => {
            const bullet = new Bullet(
                this.x, // Center of the boss
                this.y - this.size / 2, // Adjust for vertical alignment
                direction.dx, // Horizontal velocity
                direction.dy, // Vertical velocity
                10, // Bullet radius
                "red" // Bullet color
            );
            this.bullets.push(bullet); // Add the bullet to the array
        });

        this.bulletCooldown = 60; // Set cooldown (e.g., 60 frames = 1 second)
    }

    /**
     * Updates the state of active bullets and checks for collisions with the player.
     */
    updateBullets() {
        this.bullets.forEach(bullet => {
            bullet.update(); // Update bullet position

            // Check collision with the player (ball)
            if (
                bullet.x + bullet.radius > ball.x - ball.radius &&
                bullet.x - bullet.radius < ball.x + ball.radius &&
                bullet.y + bullet.radius > ball.y - ball.radius &&
                bullet.y - bullet.radius < ball.y + ball.radius
            ) {
                bullet.isActive = false; // Deactivate bullet on collision
                if (!ball.invulnerable) {
                    lifeManager.loseLife(); // Reduce player's life
                    ball.invulnerable = true; // Make player temporarily invulnerable
                }
            }
        });

        // Remove inactive bullets from the array
        this.bullets = this.bullets.filter(bullet => bullet.isActive);
    }

    /**
     * Checks if the player is inside the boss's hitbox.
     * @param {object} player - The player object (e.g., the ball).
     * @returns {boolean} - True if the player is inside the hitbox.
     */
    checkPlayerHit(player) {
        const hitboxWidth = this.size * 1.5; // Larger hitbox for collisions
        const hitboxHeight = this.size * 1.5;

        return (
            player.x + player.size > this.x - hitboxWidth / 2 &&
            player.x < this.x + hitboxWidth / 2 &&
            player.y + player.size > this.y - hitboxHeight / 2 &&
            player.y < this.y + hitboxHeight / 2
        );
    }

    /**
     * Checks if the player is inside the boss's smaller attack hitbox.
     * @param {object} player - The player object (e.g., the ball).
     * @returns {boolean} - True if the player is inside the attack hitbox.
     */
    checkBossAttack(player) {
        const attackHitboxWidth = this.size * 0.8; // Smaller attack hitbox
        const attackHitboxHeight = this.size * 0.8;

        return (
            player.x + player.size > this.x - attackHitboxWidth / 2 &&
            player.x < this.x + attackHitboxWidth / 2 &&
            player.y + player.size > this.y - attackHitboxHeight / 2 &&
            player.y < this.y + attackHitboxHeight / 2
        );
    }

    /**
     * Makes the boss perform a jump attack.
     */
    jumpAttack() {
        if (this.dy === 0) { // Only jump if on the ground
            this.dy = -12; // Set upward jump velocity
            console.log("Boss performs a jump attack!");
        }
    }

    /**
     * Triggers the reward (PinkReward) after the boss is defeated.
     */
    triggerReward() {
        if (this.pinkReward) {
            this.pinkReward.x = this.x; // Place reward at boss's x position
            this.pinkReward.y = this.groundLevel - this.pinkReward.height; // Position above the ground
            console.log(`PinkReward placed at (${this.pinkReward.x}, ${this.pinkReward.y})`);
        } else {
            console.error("PinkReward instance is undefined!");
        }
    }

    /**
     * Reduces the boss's health and checks if it's defeated.
     * Triggers the reward if health drops to zero.
     */
    takeDamage() {
        this.health--;
        console.log(`Boss health: ${this.health}`);
        if (this.health <= 0) {
            console.log("Boss defeated!");
            this.triggerReward(); // Trigger the reward
        }
    }

    /**
     * Checks for collisions between the boss's bullets and the player.
     * @param {object} player - The player object (e.g., the ball).
     * @param {object} lifeManager - The life manager for the player.
     */
    checkBulletCollisions(player, lifeManager) {
        this.bullets.forEach(bullet => {
            if (
                player.x + player.radius > bullet.x - bullet.radius &&
                player.x - player.radius < bullet.x + bullet.radius &&
                player.y + player.radius > bullet.y - bullet.radius &&
                player.y - player.radius < bullet.y + bullet.radius
            ) {
                bullet.isActive = false; // Deactivate the bullet
                console.log("Player hit by a bullet!");
                lifeManager.loseLife(); // Reduce player's life
            }
        });
    }

    /**
     * Draws the boss and its health bar.
     * @param {object} ctx - The canvas rendering context.
     */
    draw(ctx) {
        if (this.health > 0) {
            // Draw the boss image
            ctx.drawImage(
                this.image,
                this.x - this.size / 2 - camera.x, // Adjust x based on camera position
                this.y - this.size, // Adjust y based on boss size
                this.size, // Width
                this.size // Height
            );

            // Draw the health bar
            ctx.fillStyle = "red";
            ctx.fillRect(
                this.x - this.size / 2 - camera.x,
                this.y - this.size - 10,
                (this.size * this.health) / this.maxHealth, // Health as a percentage
                5
            );

            // Optional: Change health bar color based on remaining health
            ctx.fillStyle = this.health / this.maxHealth <= 0.3 ? "red" : this.health / this.maxHealth <= 0.6 ? "yellow" : "green";
            ctx.fillRect(
                this.x - this.size / 2 - camera.x,
                this.y - this.size - 10,
                (this.size * this.health) / this.maxHealth,
                5
            );

            // Display current phase
            ctx.fillStyle = "white";
            ctx.font = "12px Arial";
            ctx.fillText(`Phase: ${this.phase}`, this.x - camera.x - 10, this.y - this.size - 20);
        }

        // Draw active bullets
        this.bullets.forEach(bullet => bullet.draw(ctx));
    }
}

/**
 * Represents the in-game menu system, providing options for players to interact with
 * such as pausing, restarting, adjusting sound, and viewing instructions or the story.
 */
class Menu extends Sprite {
    constructor(options) {
        super();
        this.options = options; // Menu options displayed on the main page
        this.selectedOption = 0; // Index of the currently selected option
        this.isVisible = false; // Tracks if the menu is visible
        this.currentPage = "main"; // Tracks the current menu page (main, sound, story, etc.)
        this.backgroundMusicVolume = 0.5; // Volume for background music
        this.effectsVolume = 0.5; // Volume for sound effects
        this.musicMuted = false; // Mute state for music
        this.effectsMuted = false; // Mute state for effects
        this.storyScrollIndex = 0; // Scroll index for the story page
        this.howToPlayScrollIndex = 0; // Scroll index for the "How to Play" page

        // Story content to display on the story page
        this.storyLines = [
            "**The Tale of PinkBall: A Hero's Journey**",
            "Once upon a time, in a land ruled by sharp-edged squares, there lived two brave balls.",
            "PinkBall, a radiant and kind pink ball, brought joy to everyone around her.",
            "Her partner, a devoted blue ball, cherished her deeply, standing by her against all odds.",
            "But their love enraged the squares, who despised the balls for their roundness and saw them as outsiders.",
            "Led by the cruel and jealous BigBoss, the squares kidnapped PinkBall and locked her away in a secret jungle lair.",
            "The blue ball, heartbroken but determined, vowed to rescue her, no matter the danger.",
            "His journey would take him through treacherous landscapes, collecting stars that glow with PinkBall's light, and battling the square enemies.",
            "The squares jeered, claiming the blue ball would never reunite with PinkBall.",
            "But the blue ball knew the truth: the only way to save PinkBall and be together again was to defeat BigBoss once and for all.",
            "**Help the blue ball on his heroic quest to rescue PinkBall!** Join this epic tale of love, courage, and triumph!"
        ];

        // Instructions for the "How to Play" page
        this.howToPlayLines = [
            "1. Controls:",
            "- Arrow Right: Move Forward",
            "- Arrow Left: Move Backward",
            "- Spacebar: Jump (double-jump supported)",
            "- U: Open/Close Pause Menu",
            "",
            "2. Objectives:",
            "- Reach the flag at the end of each level.",
            "- Avoid falling off platforms and touching enemies.",
            "- Collect stars to earn extra points!",
            "",
            "3. Special Mechanics:",
            "- Progress Bar: Track your journey through the level.",
            "- Stars: Each star adds 10 points to your score.",
            "- Enemies: Jump on them to defeat and earn 20 points.",
            "- Losing Lives: Falling or enemy collisions reduce your lives.",
            "- Lives & Score: Jumping on yellow enemies gives you extra life and 20+ points.",
            "",
            "4. Tips for Success:",
            "- Use double-jump to reach higher platforms.",
            "- Time your jumps carefully to avoid enemy collisions.",
            "- Keep an eye on the progress bar to know your progress."
        ];
    }

    /**
     * Updates the menu state based on player input.
     * Toggles visibility, navigates pages, and handles option selection.
     * @param {Array} sprites - Array of game sprites.
     * @param {Object} keys - Object representing currently pressed keys.
     */
    update(sprites, keys) {
        // Toggle menu visibility with the 'U' key
        if (keys["u"]) {
            this.isVisible = !this.isVisible; // Toggle menu
            keys["u"] = false; // Prevent repeated toggling
        }
    
        // Pause the game when the menu is visible
        sprites.forEach(sprite => {
            if (sprite instanceof Menu) return; // Skip self
            if (this.isVisible) {
                sprite.paused = true; // Pause all other sprites
            } else {
                sprite.paused = false; // Resume all other sprites
            }
        });
    
        if (!this.isVisible) return; // Skip updates if menu is not visible
    
        if (this.currentPage === "main") {
            // Handle navigation through main menu options
            if (keys["ArrowUp"]) {
                this.selectedOption = (this.selectedOption - 1 + this.options.length) % this.options.length;
                keys["ArrowUp"] = false;
            }
            if (keys["ArrowDown"]) {
                this.selectedOption = (this.selectedOption + 1) % this.options.length;
                keys["ArrowDown"] = false;
            }
            if (keys["Enter"]) {
                const selected = this.options[this.selectedOption];
                if (selected === "Resume") {
                    this.isVisible = false; // Close menu
                    sprites.forEach(sprite => (sprite.paused = false)); // Resume game
                } else if (selected === "Restart") location.reload(); // Reload the game
                else if (selected === "Sound Effects") this.currentPage = "sound";
                else if (selected === "Story") this.currentPage = "story";
                else if (selected === "How to Play") this.currentPage = "instructions";
                keys["Enter"] = false; // Prevent repeated selection
            }
        } else if (this.currentPage === "story") {
            this.handleScrolling(this.storyLines, "storyScrollIndex", keys, 6); // Handle story page scrolling
            if (keys["Enter"]) {
                this.currentPage = "main"; // Return to main menu
                keys["Enter"] = false;
            }
        } else if (this.currentPage === "instructions") {
            this.handleScrolling(this.howToPlayLines, "howToPlayScrollIndex", keys, 10); // Handle instructions page scrolling
            if (keys["Enter"]) {
                this.currentPage = "main"; // Return to main menu
                keys["Enter"] = false;
            }
        } else if (this.currentPage === "sound") {
            this.handleSoundSettings(keys); // Adjust sound settings
        }
    }

    /**
     * Handles scrolling for long pages (e.g., Story, How to Play).
     * @param {Array} lines - Array of text lines to scroll.
     * @param {string} scrollIndexKey - Name of the scroll index property.
     * @param {Object} keys - Object representing currently pressed keys.
     * @param {number} visibleLines - Number of lines visible at a time.
     */
    handleScrolling(lines, scrollIndexKey, keys, visibleLines) {
        if (keys["ArrowDown"]) {
            console.log("Scrolling down...");
            this[scrollIndexKey] = Math.min(this[scrollIndexKey] + 1, lines.length - visibleLines);
            keys["ArrowDown"] = false;
        }
        if (keys["ArrowUp"]) {
            console.log("Scrolling up...");
            this[scrollIndexKey] = Math.max(this[scrollIndexKey] - 1, 0);
            keys["ArrowUp"] = false;
        }
    }

    /**
     * Handles adjustments for sound settings on the sound settings page.
     * @param {Object} keys - Object representing currently pressed keys.
     */
    handleSoundSettings(keys) {
        if (keys["ArrowRight"]) {
            this.backgroundMusicVolume = Math.min(this.backgroundMusicVolume + 0.1, 1);
            keys["ArrowRight"] = false;
        }
        if (keys["ArrowLeft"]) {
            this.backgroundMusicVolume = Math.max(this.backgroundMusicVolume - 0.1, 0);
            keys["ArrowLeft"] = false;
        }
        if (keys["ArrowUp"]) {
            this.effectsVolume = Math.min(this.effectsVolume + 0.1, 1);
            keys["ArrowUp"] = false;
        }
        if (keys["ArrowDown"]) {
            this.effectsVolume = Math.max(this.effectsVolume - 0.1, 0);
            keys["ArrowDown"] = false;
        }
        if (keys["m"]) {
            this.musicMuted = !this.musicMuted;
            this.effectsMuted = !this.effectsMuted;
            keys["m"] = false;
        }
        if (keys["Enter"]) {
            this.currentPage = "main"; // Return to main menu
            keys["Enter"] = false;
        }
    }

    /**
     * Draws the menu on the canvas, depending on the current page.
     * Handles rendering of the main menu, story, instructions, and sound settings pages.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        if (!this.isVisible) return; // Do not draw if the menu is not visible

        // Dim the background for the menu overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";

        if (this.currentPage === "main") {
            // Main Menu Title
            ctx.fillText("Pause Menu", ctx.canvas.width / 2, 100);

            // Draw menu options as buttons
            this.options.forEach((option, index) => {
                const isSelected = index === this.selectedOption;

                // Button dimensions
                const buttonX = ctx.canvas.width / 2 - 150;
                const buttonY = 150 + index * 60 - 25;
                const buttonWidth = 300;
                const buttonHeight = 50;

                // Draw button background
                ctx.fillStyle = isSelected ? "pink" : "white";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(buttonX + 20, buttonY);
                ctx.lineTo(buttonX + buttonWidth - 20, buttonY);
                ctx.quadraticCurveTo(buttonX + buttonWidth, buttonY, buttonX + buttonWidth, buttonY + 20);
                ctx.lineTo(buttonX + buttonWidth, buttonY + buttonHeight - 20);
                ctx.quadraticCurveTo(buttonX + buttonWidth, buttonY + buttonHeight, buttonX + buttonWidth - 20, buttonY + buttonHeight);
                ctx.lineTo(buttonX + 20, buttonY + buttonHeight);
                ctx.quadraticCurveTo(buttonX, buttonY + buttonHeight, buttonX, buttonY + buttonHeight - 20);
                ctx.lineTo(buttonX, buttonY + 20);
                ctx.quadraticCurveTo(buttonX, buttonY, buttonX + 20, buttonY);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Draw button text
                ctx.fillStyle = "black";
                ctx.font = "20px Arial";
                ctx.fillText(option, ctx.canvas.width / 2, buttonY + buttonHeight / 2 + 7);
            });
        } else if (this.currentPage === "story") {
            // Story Page
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = "white";
            const fontSize = 18;
            const lineHeight = 25;
            ctx.font = `${fontSize}px Arial`;
            ctx.textAlign = "left";

            const marginX = 50;
            const marginY = 100;
            const maxLineWidth = ctx.canvas.width - marginX * 2;

            // Draw story lines with pagination
            const visibleLines = this.storyLines.slice(this.storyScrollIndex, this.storyScrollIndex + 6);
            let currentY = marginY;
            visibleLines.forEach(line => {
                ctx.fillText(line, marginX, currentY, maxLineWidth);
                currentY += lineHeight;
            });

            // Draw pagination and navigation instructions
            ctx.fillStyle = "yellow";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            const totalPages = Math.ceil(this.storyLines.length / 6);
            ctx.fillText(
                `Page ${Math.floor(this.storyScrollIndex / 6) + 1} of ${totalPages}`,
                ctx.canvas.width / 2,
                ctx.canvas.height - 60
            );
            ctx.fillText(
                "Use Arrow Up/Down to scroll. Press Enter to return to the main menu.",
                ctx.canvas.width / 2,
                ctx.canvas.height - 30
            );
        } else if (this.currentPage === "instructions") {
            // Instructions Page
            const visibleLines = 10; // Number of lines visible at a time
            const linesToDisplay = this.howToPlayLines.slice(
                this.howToPlayScrollIndex,
                this.howToPlayScrollIndex + visibleLines
            );

            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("How to Play", ctx.canvas.width / 2, 50);

            ctx.textAlign = "left";
            ctx.font = "20px Arial";

            const startX = 50;
            const startY = 100;
            const lineHeight = 30;

            // Display each instruction line
            linesToDisplay.forEach((line, index) => {
                ctx.fillText(line, startX, startY + index * lineHeight);
            });

            // Navigation instructions
            ctx.textAlign = "center";
            ctx.font = "18px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText(
                "Use Arrow Up/Down to scroll. Press Enter to return to the main menu.",
                ctx.canvas.width / 2,
                ctx.canvas.height - 30
            );
        } else if (this.currentPage === "sound") {
            // Sound Settings Page
            ctx.fillText("Sound Settings", ctx.canvas.width / 2, 100);
            ctx.fillText(`Background Music: ${Math.round(this.backgroundMusicVolume * 100)}%`, ctx.canvas.width / 2, 200);
            ctx.fillText(`Effects Volume: ${Math.round(this.effectsVolume * 100)}%`, ctx.canvas.width / 2, 250);
            ctx.fillText("Arrow Right/Left: Adjust Music Volume", ctx.canvas.width / 2, 350);
            ctx.fillText("Arrow Up/Down: Adjust Effects Volume", ctx.canvas.width / 2, 400);
            ctx.fillText("Press M to toggle mute", ctx.canvas.width / 2, 450);
            ctx.fillText("Press Enter to go back", ctx.canvas.width / 2, 500);
        }
    }
}
// Initialize the game engine
const game = new Game();

// Define constants for ball, enemy, and other game elements
const BALL_SIZE = 30; // Diameter of the ball
const ENEMY_SIZE = 45; // Size of regular enemies
const ENEMY_COLOR = 'purple'; // Color for regular enemies
const ENEMY2_COLOR = 'yellow'; // Color for special enemies

// Create the WinLoseScreen instance
const winLoseScreen = new WinLoseScreen();

// Initialize PinkReward for final victory
const pinkReward = new PinkReward(-100, -100, 50, 50, winLoseScreen); // Initially off-screen
game.addSprite(pinkReward); // Add PinkReward to the game

/**
 * Level 1 Map Configuration
 * 
 * This is the introductory level, designed to familiarize players with basic 
 * mechanics like platforming, star collection, and enemy interactions. The 
 * level includes instructional messages to guide the player, ensuring they 
 * understand the controls and objectives. 
 * 
 * The level ends with a flag as the completion goal.
 */

const level1Map = [
    // Background
    new ScrollingBackground("images/image123.png", 0.5, 600, 800),

    // Platforms
    new MapObject(0, 500, 800, 100, "platform", "#654321"),
    new MapObject(500, 400, 300, 20, "platform", "#654321"),
    new MapObject(900, 300, 300, 20, "platform", "#654321"),
    new MapObject(1300, 200, 200, 20, "platform", "#654321"),
    new MapObject(1600, 300, 300, 20, "platform", "#654321"),
    new MapObject(2000, 400, 400, 20, "platform", "#654321"),

    // Enemies positioned on specific platforms
    new Enemy(520, 380, ENEMY_SIZE, 6, 80, new MapObject(500, 400, 300, 20, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(1020, 280, ENEMY_SIZE, 5, 100, new MapObject(900, 300, 300, 20, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(1350, 180, ENEMY_SIZE, 7, 90, new MapObject(1300, 200, 200, 20, "platform", "#654321"), ENEMY_COLOR),

    // Stars to collect for bonus points
    new Star(200, 450, 20, "gold"),
    new Star(700, 370, 20, "gold"),
    new Star(1400, 150, 20, "gold"),

    // Flag as the level completion goal
    new Flag(2300, 320, 40, 100, winLoseScreen)
];

// Total distance for progress bar calculation
level1Map.totalDistance = 5000;

/**
 * Level 2 Map Configuration
 * 
 * Intermediate level with more complex platforming, tougher enemies,
 * and additional stars to collect. Ends with a flag as the level goal.
 */

const level2Map = [
    // Background for Level 2
    new ScrollingBackground("images/image123.png", 0.5, 600, 800),

    // Platforms
    new MapObject(0, 500, 800, 100, "platform", "#654321"),
    new MapObject(500, 400, 300, 20, "platform", "#654321"),
    new MapObject(900, 400, 300, 100, "platform", "#654321"),
    new MapObject(1000, 300, 400, 20, "platform", "#654321"),
    new MapObject(1300, 300, 200, 50, "platform", "#654321"),
    new MapObject(1600, 200, 150, 50, "platform", "#654321"),
    new MapObject(1900, 300, 400, 100, "platform", "#654321"),
    new MapObject(2400, 400, 300, 100, "platform", "#654321"),
    new MapObject(2800, 450, 200, 50, "platform", "#654321"),
    new MapObject(3200, 300, 150, 50, "platform", "#654321"),
    new MapObject(3600, 200, 300, 100, "platform", "#654321"),
    new MapObject(4000, 500, 400, 100, "platform", "#654321"),
    new MapObject(4500, 400, 300, 50, "platform", "#654321"),
    new MapObject(4900, 450, 200, 50, "platform", "#654321"),

    // Enemies with varying positions, strengths, and behaviors
    new Enemy(520, 380, ENEMY_SIZE, 8, 60, new MapObject(500, 400, 300, 20, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(920, 370, ENEMY_SIZE, 10, 80, new MapObject(900, 400, 300, 100, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(1020, 280, ENEMY_SIZE, 8, 80, new MapObject(1000, 300, 400, 20, "platform", "#654321"), ENEMY_COLOR),
    new Enemy2(1320, 270, ENEMY_SIZE, 9, 70, new MapObject(1300, 300, 200, 50, "platform", "#654321"), ENEMY2_COLOR),
    new Enemy(1620, 170, ENEMY_SIZE, 11, 50, new MapObject(1600, 200, 150, 50, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(1920, 270, ENEMY_SIZE, 10, 90, new MapObject(1900, 300, 400, 100, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(2420, 370, ENEMY_SIZE, 9, 100, new MapObject(2400, 400, 300, 100, "platform", "#654321"), ENEMY_COLOR),
    new Enemy2(2820, 420, ENEMY_SIZE, 7, 110, new MapObject(2800, 450, 200, 50, "platform", "#654321"), ENEMY2_COLOR),
    new Enemy(3220, 270, ENEMY_SIZE, 10, 100, new MapObject(3200, 300, 150, 50, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(3620, 170, ENEMY_SIZE, 8, 90, new MapObject(3600, 200, 300, 100, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(4050, 470, ENEMY_SIZE, 9, 120, new MapObject(4000, 500, 400, 100, "platform", "#654321"), ENEMY_COLOR),
    new Enemy(4520, 370, ENEMY_SIZE, 11, 110, new MapObject(4500, 400, 300, 50, "platform", "#654321"), ENEMY_COLOR),

    // Stars for players to collect
    new Star(200, 450, 20, "gold"),
    new Star(700, 370, 20, "gold"),
    new Star(1200, 370, 20, "gold"),
    new Star(1400, 250, 20, "gold"),
    new Star(1650, 150, 20, "gold"),
    new Star(2200, 280, 20, "gold"),
    new Star(2500, 300, 20, "gold"),
    new Star(2950, 400, 20, "gold"),
    new Star(3250, 250, 20, "gold"),
    new Star(3700, 150, 20, "gold"),
    new Star(4150, 450, 20, "gold"),
    new Star(4700, 400, 20, "gold"),

    // Flag as the level completion goal
    new Flag(4950, 350, 40, 100, winLoseScreen)
];

// Total distance for progress bar calculation
level2Map.totalDistance = 7000;

/**
 * Level 3 Map Configuration
 * 
 * Final level featuring a boss battle, challenging platform layout, 
 * and a rewarding PinkReward upon defeating the boss.
 */

const level3Map = [
    // Scrolling background for Level 3
    new ScrollingBackground("images/evil.jpg", 0.5, 600, 800),

    // Platforms and structures
    new MapObject(0, 500, 300, 20, "platform", "#654321"), // Starting platform
    new MapObject(300, 400, 3000, 20, "platform", "#654321"), // Main platform
    new MapObject(300, 400, 20, 120, "wall", "#654321"), // Wall near the start

    // Boss entity
    new Boss(
        700, 470,  // Boss initial position
        100,       // Boss size
        15,        // Boss health
        new MapObject(0, 500, 1000, 20, "platform", "#654321"), // Arena platform
        "darkred", // Boss color
        pinkReward, // Reward upon defeating the boss
        "images/bigboss.png" // Boss image
    ),

    // PinkReward for defeating the boss
    pinkReward
];

// Total distance of the level for progress tracking
level3Map.totalDistance = 2000;


// Initialize core game components
const ball = new Ball(100, 470, BALL_SIZE, "blue", "black"); // Main player
const scoreManager = new ScoreManager(); // Tracks the score
const lifeManager = new LifeManager(3); // Tracks player lives
const camera = new Camera(800, 600, ball); // Camera to follow the player

// Create the menu with options
const menuOptions = ["Resume", "Restart", "Sound Effects", "Story", "How to Play"];
const menu = new Menu(menuOptions); // Initialize the pause menu

// Set up the LevelManager to handle transitions
const levelManager = new LevelManager(
    [level1Map, level2Map, level3Map], // Levels
    ball, // Player
    scoreManager, // Score manager
    lifeManager, // Life manager
    winLoseScreen, // Win/Lose screen
    camera, // Camera
    menu // Pause menu
);

// Add LevelTracker to display current level
const levelTracker = new LevelTracker(levelManager, game.canvas.width);
game.addSprite(levelTracker); // Add to the game sprites

// Link WinLoseScreen and LifeManager to the LevelManager
winLoseScreen.setLevelManager(levelManager);
lifeManager.setWinLoseScreen(winLoseScreen);

// Add components to the game engine
game.addSprite(levelManager);
game.addSprite(camera);
game.addSprite(winLoseScreen);
game.addSprite(menu);

// Load the first level and start the game
levelManager.loadLevel(game); // Initialize the first level
game.animate(); // Start the game loop
