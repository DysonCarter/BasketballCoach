// game-init.js

const canvas = document.getElementById('court');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const players = [
    { x: 100, y: 100 }
];

// Draw basketball court background
function drawCourt() {
    ctx.fillStyle = '#D2B48C'; //Light Brown
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw half-court line
    ctx.strokeStyle = '#ffffff'; //White
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// Draw players as circles
function drawPlayers() {
    players.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0000'; // red player
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    });
}

// Main draw loop
function render() {
    drawCourt();
    drawPlayers();
    requestAnimationFrame(render);
}

render();
