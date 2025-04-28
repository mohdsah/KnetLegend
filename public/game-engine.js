// Game Engine Module
export function initGameEngine(config) {
    const canvas = config.canvas;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Render game objects here
        animationId = requestAnimationFrame(gameLoop);
    }
    
    return {
        start() {
            canvas.width = 800;
            canvas.height = 600;
            gameLoop();
        },
        stop() {
            cancelAnimationFrame(animationId);
        }
    };
}
