

const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page

let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
    let timeID;
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function() {
    overlay.className = "showquiz";
    timeID = setInterval(countdown, 1000);
}

function countdown() {
    if(timeLeft === 0) {
    clearInterval(timeID)
    let totalCorrect = checkAnswers();
    if(totalCorrect === correctAnswers.length) {
       window.alert("congrats on 100%!");
    }
        else {
          window.alert("You got  " + totalCorrect + "  correct! out of " + correctAnswers.length);
            timeLeft = quizTime;
            quizClock.value = quizTime;
            overlay.className = "hidequiz";
        }
    } else {
        timeLeft--;
        quizClock.value = timeLeft;           
    }
}

function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

