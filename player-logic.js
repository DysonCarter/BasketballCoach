// player-logic.js

class Player {
    constructor(attributes, x, y) {
        this.name = attributes.name;
        this.speed = attributes.speed;
        this.finishing = attributes.finishing;
        this.jumpShooting = attributes.jumpShooting;
        this.ballHandling = attributes.ballHandling;
        this.perimiterDefense = attributes.perimiterDefense;
        this.paintDefense = attributes.paintDefense;
        this.height = attributes.height;

        // Position
        this.x = x;
        this.y = y;

        // Movement velocity
        this.vx = 0;
        this.vy = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}
