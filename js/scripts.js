//business logic
var active;
var roundScore = 0;
var gameScore = 0;
var diceRoll;

function Player(name, active) {
  this.playerName = name;
  this.activePlayer = active;
  this.diceRolls = [];
  this.turnScore = 0;
  this.totalScore = 0;
};

// var diceRoll = function() {
//   var rollNumber = Math.floor((Math.random() * 6) + 1);
//   return rollNumber;
// };

// var getCurrentPlayer = function() {
//   if(player1.activePlayer === true) {
//     player1.activePlayer = false;
//     player2.activePlayer = true;
//   } else {
//     player2.activePlayer = false;
//     player1.activePlayer = true;
//   }
// };

//idea: add players to an array to loop through
Player.prototype.findScore = function() {
//while loop to check active is true execute code for turnScore
  // debugger;
  var rollNumber = Math.floor((Math.random() * 6) + 1);
  this.diceRolls.push(rollNumber);
  // return rollNumber;

  if(rollNumber != 1) {
    roundScore = roundScore += rollNumber;
  } else {
    this.activePlayer = false;
    roundScore = 0;
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
  var showScore;
  var rollNumber;
  // var feedThePig;
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
    // rollNumber = diceRoll();
    player1.findScore();
    // Player.turnScore(diceRoll);
    $("h3.output-dice-roll").text(player1.diceRolls[player1.diceRolls.length - 1]);
    $("h3.output-turn-total").text(player1.turnScore);
  });
  $("button.btn-feed-the-pig").click(function() {
    // var currentPlayer = getCurrentPlayer();
    // Player.totalScore(Player.turnScore());
    // var feedThePig = diceRolls();
    // player1.findScore();
    if(player1.activePlayer === true) {
      $("div.player-1-score").text(feedThePig);
      player1.activePlayer = false;
      player2.activePlayer = true;
    } else {
      $("div.player-2-score").text(feedThePig);
      player2.activePlayer = false;
      player1.activePlayer = true;
    }
  });

});
