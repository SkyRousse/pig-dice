//business logic
var active = true;
var roundScore = 0;
var gameScore = 0;

function Player(name, turn, total, active) {
  this.playerName = name;
  this.turnScore = turn;
  this.totalScore = total;
  this.activePlayer = active;
}

var diceRoll = function() {
    var rollNumber = Math.floor((Math.random() * 6) + 1);
    return rollNumber
}

// Player.prototype.rollScore = function() {
//   if/else or loop or equation
// }

Player.prototype.turnScore = function() {
  if(diceRoll !== 1) {
    roundScore += diceRoll;
  } else {
    this.activePlayer === false;
  }
  this.turnScore = roundScore;
}

Player.prototype.totalScore = function() {
  gameScore += roundScore;
  this.totalScore === gameScore;
}

//user interface logic
$(document).ready(function() {
  $("form#player-setup-1").submit(function(event) {
    event.preventDefault();
    var player1 = $("input.player-1-name").val();
    // pigPlayer = new Player(player1)
    $("h3.output-player-1-name").text(player1);
  });
  $("form#player-setup-2").submit(function(event) {
    event.preventDefault();
    var player2 = $("input.player-2-name").val();
    // pigPlayer = new Player(player2)
    $("h3.output-player-2-name").text(player2);
  });
});
