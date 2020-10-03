var timerIsrunning = false;
var defaultSeconds = 30
var secondsLeft = defaultSeconds;
var timerInterval
var submitButton = document.getElementById('button2');

// Start submit button as hidden
submitButton.style.display = "none";

// Runs when button is clicked
function setTime() {
  // Start countdown timer
  countDown()
  // Show submit button
  submitButton.style.display = "block";
  timerIsrunning = true
  timerInterval = setInterval(countDown, 1000);
}

// Counts secondsLeft down from defaultSeconds
function countDown(){
  var timeEl = document.getElementById("time")
  timeEl.textContent = secondsLeft + " seconds till game over!";
  if(secondsLeft > 0) {
    secondsLeft--;
  }
  else {
    submitButton.style.display = "none";
    timeEl.textContent =  " GAME OVER";
    timerIsrunning = false
    clearInterval(timerInterval);
    secondsLeft = defaultSeconds
  }
}
// checks the answers and outputs scores
function check() {
  clearInterval(timerInterval);
   

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "div") {
        correct++;
    }
    if (question2 == "Hyper Text Markup Language") {
        correct++;
    }
    if (question3 == "Methods") {
        correct++;
    }

    if (question3 == "Method Man") {
        
    }

    var pictures = [src= "https://media.giphy.com/media/JnLSi2bWr80p2/giphy.gif", src= "https://ronemy927charlotte.files.wordpress.com/2018/03/15118039902587.jpg?quality=80&strip=all", src= "https://i0.wp.com/icecreamconvos.com/wp-content/uploads/2020/09/Method-Man-Power-Book-II-Ghost-scaled.jpg?resize=500%2C333&ssl=1", src= "https://i.etsystatic.com/20265194/r/il/073924/2529570808/il_794xN.2529570808_8l43.jpg"];
    var messages = ["Great job!", "That's just okay", "You really need to do better",  "Wu-Tang is forever"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    // If they choose Method Man, use custom message
    if (question3 == "Method Man") {
      document.getElementById("message").innerHTML = messages[3];
    }
    // Else use normal scoring message
    else {
      document.getElementById("message").innerHTML = messages[score];
    }
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    if (question3 == "Method Man") {
      document.getElementById("picture").src = pictures[3];
    }

    else {
      document.getElementById("picture").src = pictures[score];
    }
   

   }
