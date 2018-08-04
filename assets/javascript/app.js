// trivia game
// declaring array of questions and answers
var myQuestions = [
    {
      question: "Which dog breed is the smallest of them all?",
      answers: [
       "Dachshund",
       "Shih tzu",
       "Chihuahua",
       "Pomeranian"
      ],
      correctAnswer: "Chihuahua"
    },
    {
      question: "What is the most common training command taught to dogs?",
      answers: [
        "Stay",
        "Beg",
        "Sit",
        "Dance"
      ],
      correctAnswer: "Sit"
    },
    {
      question: "What is the favorite dog breed of the Queen of England?",
      answers: [
        "Corgi",
        "Basenji",
        "Poodle",
        "Pomeranian"
      ],
      correctAnswer: "Corgi"
    },
    { question: "Normal adult dogs have how many teeth?",
      answers: [
        "24",
        "38",
        "42",
        "32"
      ],
      correctAnswer: "42"
    }
  ];
var imageLinks = ["assets/images/chihuahua.jpg", "assets/images/dogsit.jpg", "assets/images/corgi.jpg", "assets/images/dogteeth.jpg"];
var quizContainer = $("#quiz");
var questionContainer = $("#question");
var resultsContainer = $("#results");
var timerElement = $("#timer");
var answersCorrectEl = $("#correct");
var countDown = 20;  // for timer
var index = 0;  // keeps track of which question the user is on
var quizEnd;  // boolean variable to help reset quiz on last question
var userChoice;  // stores user's answer to check against correctAnswer
var answerStatus = 0; // for determining what to display after user's choice
var correctChoices = 0;  // for keeping score
var unansweredChoices = 0;
var intervalId;

// displays a question and its answers
  function createQuestions() {
      answersCorrectEl.text("There are " + (myQuestions.length - index) + " questions left.");
      questionContainer.text(myQuestions[index].question);
      renderButtons();
      displayImage(index);
      $("#results").text("Good Luck!");
      intervalId = setInterval(timerUpdate, 1000);
   }

function renderButtons() {  // renders the answer buttons
  $("#buttons-view").empty();
    for (j=0; j < myQuestions[index].answers.length; j++) {
      var btn = $("<button>");
      btn.addClass("quiz-btn");
      btn.attr("data-name", myQuestions[index].answers[j]);
      btn.text(myQuestions[index].answers[j]);
      $("#buttons-view").append(btn, "<br>");
    }
  }

  function nextQuestion() {   // calls the next question
    clearInterval(intervalId);
    countDown = 20;
    if (index < myQuestions.length - 1) {
    index++;
      if (index === myQuestions.length - 1) {
        $("#next-question").text("Start Over");
      }
    } else {
      index = 0;
      correctChoices = 0;
      $("#next-question").text("Next question");
    }
    answerStatus = 0;
    getResult();
    createQuestions();
  }

function checkAnswer() {  // checks the user's answer for correctness
  userChoice = $(this).attr("data-name");
  clearInterval(intervalId);
  countDown = 20;
  if (userChoice === myQuestions[index].correctAnswer && answerStatus === 0) { // if user guesses correctly
    correctChoices++;
    answerStatus = 1;
    getResult();
  } else if (userChoice != myQuestions[index].correctAnswer && answerStatus === 0) {  // if user guesses incorrectly
    answerStatus = 2;
    getResult();
  } else {  
    answerStatus = 4;
    getResult();
  }
  answersCorrectEl.text("Correct answers: " +correctChoices+ " out of " +myQuestions.length);
}

function getResult() {  // displays if user was right, wrong, or timed out
  if (answerStatus === 1) {
    $("#results").text("Correct! Good Job.");
    displayImage(index, answerStatus);
  } else if (answerStatus === 2) {
    $("#results").text("Sorry! That is wrong.");
    displayImage(index, answerStatus);
  } else if (answerStatus === 3) {
    $("#results").text("Sorry! Time's up!");
    displayImage(index, answerStatus);
  } else if (answerStatus === 4) {
    $("#results").text("You already answered!");
    displayImage(index, 3);
  }
}

function displayImage(count, aStatus) {   // gets images to display
  if (aStatus === 1) {
    $("#image-holder").html("<img src=" + imageLinks[count] + " class='img-responsive' width='250px' height='250px'>");
  } else if (aStatus === 2) {
    $("#image-holder").html("<img src='assets/images/incorrect.png' class='img-responsive' width='250px' height='250px'>");
  } else if (aStatus === 3) {
    $("#image-holder").html("<img src='assets/images/timesup.jpg' class='img-responsive' width='250px' height='250px'>");
  } else {
    $("#image-holder").html("<img src='assets/images/tick.gif' class='img-responsive' width='250px' height='250px'>");
  }
}

function timerUpdate() {  // updates timer to count down and time out
  if (countDown > 0) {
    countDown--;
  } else {
    clearInterval(intervalId);
    answerStatus = 3;
    getResult();
  }
  timerElement.text(countDown + "s remaining");
}

$(document).ready(function() { 
  alert("You have 20 seconds to answer each question!");
  createQuestions();

  $(document).on("click", ".quiz-btn", checkAnswer);
  $(document).on("click", "#next-question", nextQuestion);

});
