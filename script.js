



function setTime() {
var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " till game over!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

}








function check() {
    
    


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

    var pictures = [src= "https://media.giphy.com/media/JnLSi2bWr80p2/giphy.gif", src= "https://ronemy927charlotte.files.wordpress.com/2018/03/15118039902587.jpg?quality=80&strip=all", src= "https://i0.wp.com/icecreamconvos.com/wp-content/uploads/2020/09/Method-Man-Power-Book-II-Ghost-scaled.jpg?resize=500%2C333&ssl=1"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
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

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}


