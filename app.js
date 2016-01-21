var questionRight = 0;
var questionWrong = 0;
var userName = prompt('Welcome, who is playing the game?');
var questions = [
  ' Hey there ' + ( userName ) + ',' + ' What\'s my favorite animal, Meerkat or Llama?',
  ' Next Question, ' + (userName) + ',' + ' What\'s my favorite musician? Pick between Frank Zappa or John Tesh. ',
  'Next up ' + (userName) + ',' + ' pick my favorite vegetable, Avocado or Beets?',
  'Another question ' + (userName) + ',' + ' What state was I born in? Oklahoma or Washington?'
];
var answers = ['meerkat', 'frank zappa', 'avocado', 'oklahoma']
var firstQuestion = document.getElementById('el1');
var correctAnswers = document.getElementById('el2');

function game(questions, answers) {
  var ques = prompt(questions).toLowerCase();
  firstQuestion.innerHTML = questions;
  if (ques === answers) {
    correctAnswers.innerHTML = "You got it right!";
    questionRight++;
  } else {
    correctAnswers.innerHTML = "Sorry, you got it wrong!";
    questionWrong++;
  }
}

for (var i = 0; i < questions.length; i += 1) {
  game(questions[i], answers[i]);
}
var userNumber = parseInt(prompt('Another question ' + (userName) + ',' + ' Guess my favorite number, between 1 and 10!'));
console.log(typeof userNumber);

while (userNumber !== 5) {
  if (userNumber < 5) {
    console.log('You guessed a little low,' + (userName));
    alert('You guessed a little low,' + (userName));
  } else if (userNumber > 5) {
    console.log('You guessed too high, ' + (userName));
    alert('You guessed a little high,' + (userName));
  }
  userNumber = parseInt(prompt('Guess my favorite number!'));
}

questionRight++;
console.log('Congrats ' + (userName) + ',' + ' That\'s the one!');
alert('Congrats ' + (userName) + ',' + ' That\'s the one!');


alert(" You got "  + questionRight + " out of 5 questions correct!");
console.log(" You got "  + questionRight + " out of 5 questions correct!");
alert("You got " + questionWrong + " out of 5 questions wrong! ");
console.log("You got " + questionWrong + " out of 5 questions wrong! ")
