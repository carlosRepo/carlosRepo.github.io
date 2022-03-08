var player;
var powerUP;

function setup() {
    createCanvas(700, 600);
    player = new player();
    powerUP = new powerUP();
}

function draw() {
    background(51);
    try {
        player.update();
        player.show();
        powerUP.show();
    } catch (error) {
        noLoop();
        modal.style.display = "block";
        clearInterval(timer);
    }

}

function keyPressed() {
    if (keyIsDown(LEFT_ARROW)) {
        player.move(-1 * player.speed, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(1 * player.speed, 0);
    }
    if (keyIsDown(UP_ARROW)) {
        player.move(0, -1 * player.speed);
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.move(0, 1 * player.speed);
    }
    if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
        player.move(-1 * player.speed, 1 * player.speed);
    }
    if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
        player.move(1 * player.speed, 1 * player.speed);
    }
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
        player.move(-1 * player.speed, -1 * player.speed);
    }
    if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
        player.move(1 * player.speed, -1 * player.speed);
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW ||
        keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        keyPressed();
    }
}