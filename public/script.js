import { initGameEngine } from './game-engine.js';

// Inisialisasi Firebase
const firebaseConfig = { /* ... config Anda ... */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// State Game
const gameState = {
    score: 0,
    hp: 100,
    level: 1
};

// Init Engine
const engine = initGameEngine({
    canvas: document.getElementById('game-canvas'),
    onAttack: handleAttack,
    onDamage: takeDamage
});

// Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    engine.start();
});

// Sistem Pertarungan
function handleAttack() {
    gameState.score += 10;
    updateHUD();
}

function takeDamage(amount) {
    gameState.hp -= amount;
    if (gameState.hp <= 0) gameOver();
}
