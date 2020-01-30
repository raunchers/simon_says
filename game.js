// User's clicked button pattern
var userClickedPattern = [];

// The four button colors and the computer's generated pattern
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var randomChosenColor = "";

var gameStarted = false;

// Current level of the game
var level = 0;

gamePattern.push(randomChosenColor);

// Detect when a keyboard key has been pressed to start the game
$(document).on("keypress", function(key){

    // Check if game has been started
    if(gameStarted != true){

      // Get a color from the computer
      randomChosenColor = buttonColors[nextSequence()];

      // Remove the empty string from the array
      gamePattern.pop();
      gamePattern.push(randomChosenColor);

      // Choose the correct button
      $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
      playSound(randomChosenColor);

      gameStarted = true;

    }
});

// Detect when any of the buttons are pressed
$("#green, #red, #yellow, #blue").click(function() {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

// Randomly generates a new sequence
function nextSequence() {
  // Increment the level number
  level++;

  //Update the h1 to show the current level
  $("#level-title").text("Level " + level);

  return randomNumber = Math.floor(Math.random() * 4);
}

// Plays the correct audio for the computer's and player's choices
function playSound(name){
    var clickedAudio = new Audio("sounds/" + name + ".mp3");
    clickedAudio.play();
}

// Animates the button the user clicks on
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  // Wait 100ms then remove the pressed classes
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){

  //Check if pattern matches computers game's pattern
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    setTimeout(function(){
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  }else{

  }
}
