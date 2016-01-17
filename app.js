
var questionRight= 0;
var questionWrong= 0;
var userName = prompt ('Welcome, who is playing the game?');
var questions = [' Hey there ' + ( userName ) + ',' + ' What\'s my favorite animal, Meerkat or Llama?', ' Next Question, ' + (userName) + ',' + ' What\'s my favorite musician? Pick between Frank Zappa or John Tesh. ', 'Next up ' + (userName) + ',' + ' pick my favorite vegetable, Avocado or Beets?', 'Another question ' + (userName) + ',' + ' What state was I born in? Oklahoma or Washington?'];
var answers = ['meerkat', 'frank zappa', 'avacado', 'oklahoma']

var firstQuestion= document.getElementById('El1');
var correctAnswers= document.getElementById("El2");



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


// var userAnimal = prompt(' Hey there ' + ( userName ) + ',' + ' What\'s my favorite animal, Meerkat or Llama?');
//
//   if (userAnimal == 'Meerkat' ) {
//     questionRight++
//     console.log(' Congrats ' + ( userName ) +  ' You are one cool cat!');
//     alert(' Congrats ' + ( userName ) +  ' ,You are one cool cat!')
//   }
//   else if (userAnimal == 'Llama' ) {
//     questionWrong++
//     console.log(' Not the right answer, '  +  ( userName ) + '!');
//     alert(' Not the right answer, '  +  ( userName ) + '!');
//   }
//   else {
//     questionWrong++
//     console.log(' You didn\'t guess the correct name. ' + (userName) + '!' );
//     alert(' You didn\'t guess the correct name. ' + (userName) + '!' );
// }
//
//  var userMusic = prompt(' Next Question, ' + (userName) + ',' + ' What\'s my favorite musician? Pick between Frank Zappa or John Tesh. ');
//     if (userMusic == 'Frank Zappa' ) {
//   questionRight++
//     console.log('Fantastic choice, ' + (userName) + ',' + ' the other option is terrible!');
//     alert('Fantastic choice, ' + (userName) + ',' + ' the other option is terrible!');
//   }
//     else if (userMusic == 'John Tesh' ) {
//     questionWrong++
//     console.log('Not the right answer ' + (userName) + '!');
//     alert('Not the right answer ' + (userName) + '!');
//   }
//     else {
//     questionWrong++
//     console.log('You didn\'t guess the correct name.');
//     alert("Try again");
// }
//
//  var userVegetable = prompt('Next up ' + (userName) + ',' + ' pick my favorite vegetable, Avocado or Beets?');
//
//     if (userVegetable == 'Avocado' ) {
//    questionRight++
//      console.log('Right on! ' + (userName) + ',' + ' Glad you did not pick beets!');
//      alert('Right on! ' + (userName) + ',' + ' Glad you did not pick beets!');
//    }
//     else if (userVegetable == 'Beets' ) {
//      questionWrong++
//      console.log('What a horrible decision ' + (userName) + '!');
//      alert('What a horrible decision ' + (userName) + '!');
//    }
//     else {
//      questionWrong++
//      console.log('You didn\'t guess the correct name.');
//      alert('You didn\'t guess the correct name.')
//  }
//
//  var userState = prompt('Another question ' + (userName) + ',' + ' What state was I born in? Oklahoma or Washington?');
//
//    if (userState == 'Oklahoma' ) {
//      questionRight++
//      console.log('Congrats ' + (userName) + ',' + ' That\'s the one!');
//      alert('Congrats ' + (userName) + ',' + ' That\'s the one!');
//    }
//    else if (userState == 'Washington' ) {
//      questionWrong++
//      console.log('Not a bad one, but not correct ' + (userName) + '!' );
//      alert('Not a bad one, but not correct ' + (userName) + '!' );
//    }
//    else {
//      questionWrong++
//      console.log('You didn\'t guess the correct name.');
//      console.log('Try again.');
//      alert("Try again");
// }
//
// var userNumber = parseInt(prompt('Another question ' + (userName) + ',' + ' Guess my favorite number, between 1 and 10!'));
//     console.log(typeof userNumber);
//
// while (userNumber !== 5) {
//   if (userNumber < 5) {
//     questionWrong++
//     console.log('You guessed a little low,' + (userName));
//     alert('You guessed a little low,' + (userName));
//   } else if (userNumber > 5) {
//     questionWrong++
//     console.log('You guessed too high, ' + (userName));
//     alert('You guessed a little high,' + (userName));
//
//   }
//   userNumber = parseInt(prompt('Guess my favorite number!'));
// }
//
//   questionRight++
//   console.log('Congrats ' + (userName) + ',' + ' That\'s the one!');
//   alert('Congrats ' + (userName) + ',' + ' That\'s the one!');



alert(" You got "  + questionRight + " out of 5 questions correct!");
  console.log(" You got "  + questionRight + " out of 5 questions correct!");
alert("You got " + questionWrong + " out of 5 questions wrong! ");
  console.log("You got " + questionWrong + " out of 5 questions wrong! ")
