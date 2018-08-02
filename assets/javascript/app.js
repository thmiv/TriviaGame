// trivia game
var myQuestions = [
    {
      question: "Who is the cutest?",
      answers: {
        a: "Rapty",
        b: "Poby",
        c: "Waluigi"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "google",
        b: "youtube",
        c: "netflix"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
