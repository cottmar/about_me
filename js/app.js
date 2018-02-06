'use strict';

var userName = prompt('Hi! Glad you are here! What is your name?');

alert('Hi, ' + userName + ' , glad you are here! I am going to ask you a few questions about me. Please answer with y/n or yes/no.');

var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right, ' + userName + '! I have two dogs.');
} else if(answer1 === 'no' || answer1 === 'n') {
  alert('Um, no, ' + userName + ' you\'re wrong, I love animals.');
} else {
  alert('Sorry, that was not a valid answer. Maybe you made a type? Oh well, we can move on to the next question.');
}

var answer2 = prompt('Next question! Do you think I have siblings?').toLowerCase().trim();

if(answer2 === 'no' || answer2 === 'n') {
  alert('You are wrong, ' + userName + '! I have two sisters who live in Missouri.');
} else if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct, ' + userName + '! I have two older sisters who live in Missouri.');
} else {
  alert('That is not a valid response ' + userName + '! Please follow directions.');
}

