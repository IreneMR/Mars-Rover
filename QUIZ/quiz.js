

var user = {}
var responses = [user]

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

question1();

function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();

function question3() {
  var js = prompt('What was the original name for javascript: java, livescript, javalive, or scriptyscript?');
  js = js.toLowerCase();
  switch (js) {
  	case "java":
  	js = false;
  	break;
  	case "livescript":
  	js = true;
  	break;
  	case "javalive":
  	js = false;
  	break;
  	case "scriptyscript":
  	js = false;
  	break;

  	default:
    alert("choice an option")
   return question3()
    // your own answers
  }
  responses.push(js);
}

question3();

function question4() {
  var multi = prompt('What is the name of the actor who plays Spock in the Star Trek series ?: brad pitt, leonard nimoy, william shatner, zachary quinto');
  multi= multi.toLowerCase();
  switch (multi) {
  	case "brad pitt":
  	multi = false;
  	break;
  	case "leonard nimoy":
  	multi = true;
  	break;
  	case "william shatner":
  	multi = false;
  	break;
  	case "zachary quinto":
  	multi = false;
  	break;

  	default:
    alert("choice an option")
   return question4()
    // your own answers
  }
  responses.push(multi);
}

question4();

function question5() {

  var firstQuestion = prompt('Is steven spilberg the director of Star Wars? yes or no')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = false
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = true
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question5();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question5();

function evaluate(responses) {
  var correct =  0
 var wrong = 0 ;
 for(i=1;i<=responses.length;i++){

 
   if (responses[i] === true){
           correct += 1;
       }else{
           wrong += 1;
       }
 user.correct = correct;
 user.wrong = wrong;
 } 
  }

  
function showResults() {
    alert(user.name + ' score ' + user.correct + ' correct answers ' + user.wrong + ' wrong answers')
}
evaluate(responses);
showResults(); 

		

