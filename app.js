
var questionRight= 0;
var questionWrong= 0;





var userAnimal = prompt('Hey there stranger! What\'s my favorite animal, Meerkat or Llama?');

if (userAnimal == 'Meerkat' ) {
  questionRight++
    console.log('Congrats, You are one cool cat!');
    alert("Congrats, You are one cool cat!")
  }
  else if (userAnimal == 'Llama' ) {
    questionWrong++
    console.log('Not the right answer!');
    alert("Not the right answer!")
  }
  else {
    questionWrong++
 console.log('You didn\'t guess the correct name.');
 console.log('Try again.');
 alert("Try again");
}

var userMusic = prompt('Next Question, What\'s my favorite musician? Pick between Frank Zappa or John Tesh');


if (userMusic == 'Frank Zappa' ) {
  questionRight++
    console.log('Fantastic choice, the other option is terrible!');
    alert("Fantastic choice, the other option is terrible!")
  }
  else if (userMusic == 'John Tesh' ) {
    questionWrong++
    console.log('Not the right answer!');
    alert("Not the right answer!")
  }
  else {
    questionWrong++
 console.log('You didn\'t guess the correct name.');
 console.log('Try again.');
 alert("Try again");
}

 var userVegetable = prompt('Next up is favorite vegetable, Avocado or Beets');

 if (userVegetable == 'Avocado' ) {
   questionRight++
     console.log('Right on! Glad you did not pick beets!');
     alert("Right on! Glad you did not pick beets!")
   }
   else if (userVegetable == 'Beets' ) {
     questionWrong++
     console.log('What a horrible decision!');
     alert("What a horrible decision!")
   }
   else {
     questionWrong++
  console.log('You didn\'t guess the correct name.');
  console.log('Try again.');
  alert("Try again");
 }

 var userState = prompt('Another question, What state was I born in? Oklahoma or Washington?');

 if (userState == 'Oklahoma' ) {
   questionRight++
     console.log('Congrats, That\'s the one!');
     alert("Congrats, That\'s the one!")
   }
   else if (userState == 'Washington' ) {
     questionWrong++
     console.log('Not a bad one, but not correct!');
     alert("Not a bad one, but not correct!")
   }
   else {
     questionWrong++
  console.log('You didn\'t guess the correct name.');
  console.log('Try again.');
  alert("Try again");

 }


alert(" You got "  + questionRight + " out of 4 questions correct!");
  console.log(" You got "  + questionRight + " out of 4 questions correct!");
alert("You got " + questionWrong + " out of 4 questions wrong! ");
  console.log("You got " + questionWrong + " out of 4 questions wrong! ")
