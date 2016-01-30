// declare variables

var canvas_width = 505;
var canvas_height = 606;


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // the initial position and speed of any enemy
    this.x = 0;
    this.y = Math.random() * 184 + 50; // todo

    this._speed = Math.random() * 256; // todo
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // update the enemy. Make the enemy move.
    this.x += dt * this._speed;

    // renew the enemy
    if (this.x >= canvas_width){
      this.x = 0;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  // initial speed of the player
  this._speed = 50;
  // initial position of the player
  this.x = 202.5;
  this.y = 383;

}

Player.prototype.update = function() {
  // todo
  // Prevent the player go off the canvas.
  if (this.y > 383 ) {
      this.y = 383;
  }
  if (this.x > 402.5) {
      this.x = 402.5;
  }
  if (this.x < 2.5) {
      this.x = 2.5;
  };
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  // todo
  switch (key) {
    case 'left':
      this.x -= this._speed;
      break;
    case 'right':
      this.x += this._speed;
      break;
    case 'up':
      this.y -= this._speed;
      break;
    case 'down':
      this.y += this._speed;
      break;
    // todo
    default:
      this.x = this.x;
      this.y = this.y;
  };
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player();
var enemy = new Enemy();

allEnemies.push(enemy);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
