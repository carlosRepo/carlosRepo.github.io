function powerUP() {
    this.x = rand(width, 1);
    this.y = rand(height, 1);
    this.width = rand(50, 30);
    this.height = rand(50, 30);
    this.powerUpWidth = 0;
    this.powerUpHeight = 0;
    this.color = color(rand(255, 1), rand(255, 1), rand(255, 1));

    this.show = function() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        if (isTouched(player, powerUP)) {
            powerUP.createPowerUp();
            powerUP.addPlayerSpeed(player);
            powerUP.addPlayerWidth(player);
            powerUP.addPlayerHeight(player);
            powerUP.addPowerUpWidth();
            powerUP.addPowerUpHeight();
        }
    }

    this.createPowerUp = function() {
        this.x = rand(width, 1);
        this.y = rand(height, 1);
        this.width = rand(50, 30) + this.powerUpWidth;
        this.height = rand(50, 30) + this.powerUpHeight;
        this.color = color(rand(255, 1), rand(255, 1), rand(255, 1));
        this.show();
    }
    this.addPlayerSpeed = function(player) {
        player.speed = player.speed + 1;
    }
    this.addPlayerWidth = function(player) {
        player.width = player.width + 1;
    }
    this.addPlayerHeight = function(player) {
        player.height = player.height + 1;
    }
    this.addPowerUpWidth = function() {
        this.powerUpWidth = this.powerUpWidth + 1;
    }
    this.addPowerUpHeight = function() {
        this.powerUpHeight = this.powerUpHeight + 1;
    }
}