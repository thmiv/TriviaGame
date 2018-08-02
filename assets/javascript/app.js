// trivia game
var myQuestions = [
    {
      question: "The answer is a?",
      answers: {
        a: "aaa",
        b: "bbb",
        c: "ccc"
      },
      correctAnswer: "a"
    },
    {
      question: "The answer is c?",
      answers: [
        "aaaa",
        "bbbb",
        "cccc"
      ],
      correctAnswer: "c"
    },
    {
      question: "The answer is d?",
      answers: {
        a: "aaaaa",
        b: "bbbbb",
        c: "ccccc",
        d: "ddddd"
      },
      correctAnswer: "d"
    }
  ];

var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var index = 0;
var quizEnd;

function createQuiz() {
   if (index < myQuestions.length) {
     quizEnd = false; 
   } else {
     quizEnd = true;
   }
   if (quizEnd === false) {
      quizContainer.append(myQuestions[index].question);
      renderButtons();
      index++;
   }
}

function showResults() {
// will show the answer
}

function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < myQuestions.length; i++) {
    var btn = $("<button>");
    btn.addClass("quiz-btn");

    btn.attr("data-name", myQuestions[i].answers[j]);
    btn.text(myQuestions[i].answers);
    $("#buttons-view").append(btn);
  }
}

// display quiz right away
createQuiz();

// on submit, show results
//submitButton.addEventListener('click', showResults);
