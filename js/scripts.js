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

//idea: add players to an array to loop through
Player.prototype.findScore = function() {
  var rollNumber = Math.floor((Math.random() * 6) + 1);
  this.diceRolls.push(rollNumber);

  if(rollNumber != 1) {
    roundScore = roundScore += rollNumber;
  } else {
    if(player1.activePlayer === true) {
      $("ol.player-1-history").append("<li>" + this.turnScore + "</li>");
      player1.activePlayer = false;
      player2.activePlayer = true;
    } else {
      $("ol.player-2-history").append("<li>" + this.turnScore + "</li>");
      player2.activePlayer = false;
      player1.activePlayer = true;
    }
    roundScore = 0;

  }
  this.turnScore = roundScore;
};

Player.prototype.findTotal = function() {
  gameScore = this.totalScore += roundScore;
  this.totalScore = gameScore;
  if(gameScore >= 100) {
    alert("Congrats you win!");
  }
};

var feedPig = function() {
  $("h3.output-dice-roll").text("");
  $("h3.output-turn-total").text("0");
  this.roundScore = 0;
};

//user interface logic
$(document).ready(function() {

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
    if(player1.activePlayer === true) {
      player1.findScore();
      $("h3.output-dice-roll").text(player1.diceRolls[player1.diceRolls.length - 1]);
      $("h3.output-turn-total").text(player1.turnScore);
    } else if (player2.activePlayer === true){
      player2.findScore();
      $("h3.output-dice-roll").text(player2.diceRolls[player2.diceRolls.length - 1]);
      $("h3.output-turn-total").text(player2.turnScore);
    } else {

    }

  });
  $("button.btn-feed-the-pig").click(function() {
    if(player1.activePlayer === true) {
      player1.findTotal();
      $("ol.player-1-history").append("<li>" + player1.turnScore + "</li>");
    } else if (player2.activePlayer === true){
      player2.findTotal();
      $("ol.player-2-history").append("<li>" + player2.turnScore + "</li>");
    } else {

    }
    feedPig();

    if(player1.activePlayer === true) {
      $("div.player-1-score").text(player1.totalScore);
      player1.activePlayer = false;
      player2.activePlayer = true;
    } else {
      $("div.player-2-score").text(player2.totalScore);
      player2.activePlayer = false;
      player1.activePlayer = true;
    }
  });

});
