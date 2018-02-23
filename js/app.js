'use strict';

var correctAnswers = 0;

var userName = prompt('Hi! Glad you are here! What is your name?');
console.log(userName + ' was asked their name and responded ' + userName + '.');

alert('Hi, ' + userName + ', glad you are here! I am going to ask you a few questions about me. Please answer with y/n or yes/no.');

var answer1 = prompt('Do you think I have pets?').toLowerCase().trim();
console.log(userName + ' was asked if they thought I had pets and answered with ' + answer1 + '.');

function question1 () {

  if (answer1 === 'yes' || answer1 === 'y') {
    correctAnswers++;
    alert('You are right, ' + userName + '! I have two dogs.');
  } else if(answer1 === 'no' || answer1 === 'n') {
    alert('Nope ' + userName + ', I do have animals. I have two dogs. ');
  } else {
    alert('Sorry, that was not a valid answer. Maybe you made a typo? Oh well, we can move on to the next question. But yes, I do have animals, two dogs.');
  }
}

question1();

var answer2 = prompt('I bet you can\'t guess my dogs\' names, ' + userName + '. Tell me, do you think I have a dog named after a Michael Jackson song, and a dog named after another animal?').toLowerCase().trim();
console.log(userName + ' was asked if they thought my dogs were named after a Michael Jackson song and another animal and responded with ' + answer2 + '.');

function question2 () {

  if (answer2 === 'yes' || answer2 === 'y') {
    correctAnswers++;
    alert('Correct, ' + userName + '! My Chihuahua Minpin Mix is named Billie Jean, and I have another Chihuahua Mix named Bird. Bird is pretty cute -- she is a Tripod dog!');
  } else if(answer2 === 'no' || answer2 ==='n' ) {
    alert('Oh, but I do ' + userName + '! My Chihuahua Minpin Mix is named Billie Jean, and I have another Chihuahua Mix named Bird. Bird is pretty cute -- she is a Tripod dog!');
  } else {
    alert('Whoops! Looks like you still haven\'t figured out the directions!');
  }
}

question2();

var answer3 = prompt('What dog parent would I be if I had no nicknames for my dogs, ' + userName + '? Do you think that I have given each dog a full first and middle name?').toLowerCase().trim();
console.log(userName + ' was asked if they thought my dogs had full names and responded with ' + answer3 + '.');

function question3 () {

  if(answer3 === 'yes' || answer3==='y') {
    correctAnswers++;
    alert('Of course I do, ' + userName + '! Billie Jean is short for Wilhemina Jeanette and Bird is short for Birdie Blue.');
  } else if(answer3==='n' || answer3==='no') {
    alert('Come on, ' + userName + ', of course they have full names! How else would I scold them? Billie Jean is short for Wilhemina Jeanette and Bird is short for Birdie Blue.');
  } else {
    alert('I cannot believe you still have not figured this out.');
  }
}

question3();

var answer4 = prompt('Now that we\'ve established I am a Crazy Dog Lady, let\'s move on! ' + userName + ' do you think I have siblings?').toLowerCase().trim();
console.log(userName + ' was asked if they thought I had siblings and responded with ' + answer4 + '.');

function question4 () {

  if(answer4 === 'no' || answer4 === 'n') {
    correctAnswers++;
    alert('You are wrong, ' + userName + '! I have two sisters who live in Missouri.');
  } else if (answer4 === 'yes' || answer4 === 'y') {
    alert('Correct, ' + userName + '! I have two older sisters who live in Missouri.');
  } else {
    alert('That is not a valid response ' + userName + '! Please follow directions.');
  }
}

question4();

var answer5 = prompt('This has been fun! One last question, ' + userName + '. Let\'s get a little more personal. Question: do you think I have ever had a cavity?').toLowerCase().trim();
console.log(userName + ' was asked if they thought I have ever had a cavity and responded with ' + answer5 + '.');

function question5 () {

  if(answer5 === 'yes' || answer5 === 'y') {
    alert('WRONG! I have had zero cavities in my life. Each time I go to the dentist I feel anxious that I will have one.');
  } else if (answer5 === 'n' || answer5 === 'no') {
    correctAnswers++;
    alert('Boom! I have never had a cavity.');
  } else {
    alert('The game is over, and you just lost $1,000,000.');
  }
}

question5();

var correctNumber = 1;
var numGuesses = 4;

function question6 () {

  while (numGuesses > 0) {
    var answer6 = prompt('Guess how many bones I have broken. Please enter an integer.');
    answer6 = parseInt (answer6); // parseInt turns their string 'guess' into their integer guess
    console.log(answer6 + ' is a ' + typeof answer6); // this is how we find out if things are broken because of type issues
    console.log(userName + ' is asked to guess how many bones I have broken in 4 guesses or less');
    if (answer6 === correctNumber) {
      correctAnswers++;
      alert('You have the right answer! I broke my collar bone.');
      break;
    } else if (answer6 < 1) {
      alert('You are too low.');
      numGuesses--;
    } else if (answer6 > 1) {
      alert('You are too high.');
      numGuesses--;
    }
  }
}

question6();

var caraFaveFoods = ['crab rangoon', 'chocolate chip cookie', 'cheesy garlic biscuits'];
var numberOfGuesses = 6;
var flag = true;

function question7 () {

  while(numberOfGuesses > 0 && flag === true) {
    var answer7 = prompt('Can you guess in 6 tries or less any of my favorite foods? Go ahead and guess!').toLowerCase().trim();
    console.log(userName + ' is asked to guess my favorite foods in 6 tries or less and responded with ' + answer7);

    for (var i = 0; i < caraFaveFoods.length; i++ ) {
      if(answer7 === caraFaveFoods[i]) {
        correctAnswers++;
        alert('Good job!');
        flag = false;
        break; //break will break out of the current loop and we need to break all the loops
      }
    }
    if(flag === true && numberOfGuesses === 1) {
      alert('You got it wrong...You are out of tries. The possible answers were Crab Rangoon, Chocolate Chip Cookies, and Cheesy Garlic Biscuits');
    }
    if(flag === true && numberOfGuesses > 1) {
      alert('You got it wrong, try again!');
    }
    numberOfGuesses--;
  }
}

question7();

alert('Hey, you answered ' + correctAnswers + ' out of 7 possible right.');