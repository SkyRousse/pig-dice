//business logic
var active;
var roundScore = 0;
var gameScore = 0;

function Player(name, active) {
  this.playerName = name;
  this.activePlayer = active;
  this.turnScore = 0;
  this.totalScore = 0;
};

var diceRoll = function() {
  var rollNumber = Math.floor((Math.random() * 6) + 1);
  return rollNumber;
};

var getCurrentPlayer = function() {
  if(this.activePlayer === true) {
    currentplayer = this.activePlayer
  }
};

//idea: add players to an array to loop through
Player.prototype.turnScore = function() {
//while loop to check active is true execute code for turnScore
  if(diceRoll !== 1) {
    roundScore += diceRoll;
  } else {
    this.activePlayer === false;
    roundScore === 0;
  }
  this.turnScore = roundScore;
};

Player.prototype.totalScore = function() {
  gameScore += roundScore;
  this.totalScore === gameScore;
};

//user interface logic
$(document).ready(function() {
  var player1;
  var player2;
  $("form#player-setup-1").submit(function(event) {
    event.preventDefault();
    var player1Name = $("input.player-1-name").val();
    player1 = new Player(player1Name, true);
    console.log(player1.playerName);
    $("h3.output-player-1-name").text(player1.playerName);
  });
  $("form#player-setup-2").submit(function(event) {
    event.preventDefault();
    var player2name = $("input.player-2-name").val();
    player2 = new Player(player2name, false);
    $("h3.output-player-2-name").text(player2.playerName);
  });

  $("button.btn-roll-dice").click(function() {
    var rollNumber = diceRoll();
    console.log(rollNumber);
    var currentplayer = getCurrentPlayer();
    // Player.turnScore(diceRoll);
    $("h3.output-dice-roll").text(rollNumber);
    $("h3.output-turn-total").text(rollNumber);
  });
  $("button.btn-feed-the-pig").click(function() {
    Player.totalScore(Player.turnScore());
  });

});
