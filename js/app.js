'use strict';

var userName = prompt('Hi! Glad you are here! What is your name?');

alert('Hi, ' + userName + ', glad you are here! I am going to ask you a few questions about me. Please answer with y/n or yes/no.');
console.log('User was asked their name and responded ' + userName + '.');

var answer1 = prompt('Do you think I have pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You are right, ' + userName + '! I have two dogs.');
} else if(answer1 === 'no' || answer1 === 'n') {
  alert('Nope ' + userName + ', I do have animals. I have two dogs. ');
} else {
  alert('Sorry, that was not a valid answer. Maybe you made a typo? Oh well, we can move on to the next question. But yes, I do have animals, two dogs.');
  console.log('User was asked if they thought I had pets and answered with ' + answer1 + '.');
}

var answer2 = prompt('I bet you can\'t guess my dogs\' names, ' + userName + '. Tell me, do you think I have a dog named after a Michael Jackson song, and a dog named after another animal?').toLowerCase().trim();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct, ' + userName + '! My Chihuahua Minpin Mix is named Billie Jean, and I have another Chihuahua Mix named Bird. Bird is pretty cute -- she is a Tripod dog!');
} else if(answer2 === 'no' || answer2 ==='n' ) {
  alert('Oh, but I do ' + userName + '! My Chihuahua Minpin Mix is named Billie Jean, and I have another Chihuahua Mix named Bird. Bird is pretty cute -- she is a Tripod dog!');
} else {
  alert('Whoops! Looks like you still haven\'t figured out the directions!');
  console.log('User was asked if they thought my dogs were named after a Michael Jackson song and another animal and responded with ' + answer2 + '.');
}

var answer3 = prompt('What dog parent would I be if I had no nicknames for my dogs, ' + userName + '? Do you think that I have given each dog a full first and middle name?').toLowerCase().trim();
if(answer3 === 'yes' || answer3==='y') {
  alert('Of course I do, ' + userName + '! Billie Jean is short for Wilhemina Jeanette and Bird is short for Birdie Blue.');
} else if(answer3==='n' || answer3==='no') {
  alert('Come on, ' + userName + ', of course they have full names! How else would I scold them? Billie Jean is short for Wilhemina Jeanette and Bird is short for Birdie Blue.');
} else {
  alert('I cannot believe you still have not figured this out.');
  console.log('User was asked if they thought my dogs had full names and responded with ' + answer3 + '.');
}

var answer4 = prompt('Now that we\'ve established I am a Crazy Dog Lady, let\'s move on! ' + userName + ' do you think I have siblings?').toLowerCase().trim();

if(answer4 === 'no' || answer4 === 'n') {
  alert('You are wrong, ' + userName + '! I have two sisters who live in Missouri.');
} else if (answer4 === 'yes' || answer4 === 'y') {
  alert('Correct, ' + userName + '! I have two older sisters who live in Missouri.');
} else {
  alert('That is not a valid response ' + userName + '! Please follow directions.');
  console.log('User was asked if they thought I had siblings and responded with ' + answer4 + '.');
}

var answer5 = prompt('This has been fun! One last question, ' + userName + '. Let\'s get a little more personal. Question: do you think I have ever had a cavity?').toLowerCase().trim();
if(answer5 === 'yes' || answer5 === 'y') {
  alert('WRONG! I have had zero cavities in my life. Each time I go to the dentist I feel anxious that I will have one.');
} else if (answer5 === 'n' || answer5 === 'no') {
  alert('Boom! I have never had a cavity.');
} else {
  alert('The game is over, and you just lost $1,000,000.');
  console.log('User was asked if they thought I have ever had a cavity and responded with ' + answer5 + '.');
}


