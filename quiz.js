/* 

PRACTICE QUIZ W/MULTIPLE OUTCOMES

Created a quiz that implements if, else if, else conditions. Also incorporates booleans.

*/


//Assume the user's answers will be wrong.

var answers = 0;

var questionOne = false;
var questionTwo = false;
var questionThree = false;
var questionFour = false;
var questionFive = false;


//Correct answers to questions.


var questionOneAnswer = "CARNIVORE";
var questionTwoAnswer = "FALSE";
var questionThreeAnswer = "NO";
var questionFourAnswer = "MEAT";
var questionFiveAnswer = "VEGETARIANS";


//Question prompts and acknowledgement of whether answers are right or wrong.


questionOne = prompt("What is the opposite of vegetarian?");
  if( questionOne.toUpperCase() === questionOneAnswer ) {
    questionOne = true;
  }
  if( questionOne === true ) {
    alert("That's right! Onto the next question!");
    answers =+ 1;
  } else {
    alert("Nope, that's not right. Oh well...");
    answers =+ 0;
  }
questionTwo = prompt("TRUE or FALSE: It's very difficult to get enough protein as a vegetarian.");
  if( questionTwo.toUpperCase() === questionTwoAnswer ) {
    questionTwo = true;
  }
  if( questionTwo === true ) {
    alert("That's right! Onto the next question!");
    answers =+ 1;
  } else {
    alert("Nope, that's not right. Oh well...");
    answers =+ 0;
  }
questionThree = prompt("Can you eat fish as a vegetarian?");
  if( questionThree.toUpperCase() === questionThreeAnswer ) {
    questionThree = true;
  }
  if( questionThree === true ) {
    alert("That's right! Onto the next question!");
    answers =+ 1;
  } else {
    alert("Nope, that's not right. Oh well...");
    answers =+ 0;
  }
questionFour = prompt("A vegetarian's diet will not consist of what food group?");
  if( questionFour.toUpperCase() === questionFourAnswer ) {
    questionFour = true;
  }
  if( questionFour === true ) {
    alert("That's right! Onto the next question!");
    answers =+ 1;
  } else {
    alert("Nope, that's not right. Oh well...");
    answers =+ 0;
  }
questionFive = prompt("Are gorillas vegetarians, omnivores, or carnivores?");
  if( questionFive.toUpperCase() === questionFiveAnswer ) {
    questionFive = true;
  }
  if( questionFive === true ) {
    alert("That's right! Wow we're already done!");
    answers =+ 1;
  } else {
    alert("Nope, that's not right. Oh well...");
    answers =+ 0;
  }


//Alert to let user know how many questions they got right and what their ranking is.

var goldCrown = answers === 5;
var silverCrown = answers > 2 && answers < 5;
var bronzeCrown = answers > 0 && answers < 3;


if ( goldCrown  ) {
  alert("You got all the questions right! You get a gold crown! Sweet!");
} else if ( silverCrown ) {
  alert("You got " + answers + " right! That means you get a silver crown! Not too bad!");
} else if ( bronzeCrown ) {
  alert("You got " + answers + " right! You get a bronze crown!");
} else {
  alert("You didn't get any answers right, so no crown for you. :(");
}

