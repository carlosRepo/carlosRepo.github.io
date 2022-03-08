function player() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.yDirection = 0 * this.speed;
    this.xDirection = 1 * this.speed;


    this.move = function(x, y) {
        this.xDirection = x;
        this.yDirection = y;
    }

    this.update = function() {
        this.x = this.x + this.xDirection;
        this.y = this.y + this.yDirection;

        this.x = constrain(this.x, 0, width - this.width);
        this.y = constrain(this.y, 0, height - this.height);
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}