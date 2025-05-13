// game-init.js

const canvas = document.getElementById('court');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Default attributes for players, all attributes are 0-20
const defaultAttributes = {
    name: "Bill Bonson",
    speed: 20,
    finishing: 20,
    jumpShooting: 20,
    ballHandling: 20,
    perimiterDefense: 20,
    paintDefense: 20,
    height: 20
};

// Create player instances
const players = [];
for (let i = 0; i < 1; i++) {
    players.push(new Player(defaultAttributes, 100 + i * 80, 150));
}

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

function render() {
    drawCourt();
    players.forEach(p => {
        p.update();
        p.draw(ctx);
    });
    requestAnimationFrame(render);
}

render();
