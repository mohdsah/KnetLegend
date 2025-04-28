// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhEtEeG_niZnzbKr08GY7DDyfU_XSELY",
  authDomain: "knetlegend.firebaseapp.com",
  databaseURL: "https://knetlegend-default-rtdb.firebaseio.com", // PASTIKAN INI ADA!
  projectId: "knetlegend",
  storageBucket: "knetlegend.firebasestorage.app",
  messagingSenderId: "877515833109",
  appId: "1:877515833109:web:f5f73094482ddd2c1cf31c",
  measurementId: "G-W83J3WB719"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Game State
let score = 100;
let hp = 5;
const playerId = "player_" + Math.random().toString(36).substr(2, 9);

// DOM Elements
const scoreElement = document.getElementById('score');
const hpElement = document.getElementById('hp');
const attackBtn = document.getElementById('attack-btn');

// Attack Function
attackBtn.addEventListener('click', () => {
    score += 10;
    hp -= 1;
    
    updateGameDisplay();
    saveGameState();
    
    if (hp <= 0) gameOver();
});

function updateGameDisplay() {
    scoreElement.textContent = score;
    hpElement.textContent = `HP: ${'♥'.repeat(hp)}`;
}

function saveGameState() {
    firebase.database().ref('players/' + playerId).set({
        score: score,
        hp: hp,
        lastUpdated: firebase.database.ServerValue.TIMESTAMP
    });
}

function gameOver() {
    alert(`Game Over! Final Score: ${score}`);
    resetGame();
}

function resetGame() {
    score = 100;
    hp = 5;
    updateGameDisplay();
}