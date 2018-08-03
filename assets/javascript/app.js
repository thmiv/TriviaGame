// trivia game
// declaring array of questions and answers
var myQuestions = [
    {
      question: "The answer is a?",
      answers: [
       "aaa",
       "bbb",
       "ccc"
      ],
      correctAnswer: "aaa"
    },
    {
      question: "The answer is c?",
      answers: [
        "aaaa",
        "bbbb",
        "cccc"
      ],
      correctAnswer: "cccc"
    },
    {
      question: "The answer is d?",
      answers: [
        "aaaaa",
        "bbbbb",
        "ccccc",
        "ddddd"
      ],
      correctAnswer: "ddddd"
    }
  ];

var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var index = 0;  // keeps track of which question the user is on
var quizEnd;  // boolean variable to help reset quiz on last question
var userChoice;  // stores user's answer to check against correctAnswer
var correctChoices;  // for keeping score

// displays a question and its answers
  function createQuestions() {
      quizContainer.text(myQuestions[index].question);
      renderButtons();
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

function checkAnswer() {
  userChoice = $(this).attr("data-name");
  $("#results").text(userChoice);
  console.log(myQuestions[index].correctAnswer);
  console.log(index);
  if (userChoice === myQuestions[index].correctAnswer && index < myQuestions.length - 1) {
    index++;
    createQuestions();
  } else if (userChoice != myQuestions[index].correctAnswer && index < myQuestions.length) {
    // do something probably
  } else {
    index = 0;
    createQuestions();
  }
}

$(document).ready(function() { 
  createQuestions();


  $(document).on("click", ".quiz-btn", checkAnswer);

});

