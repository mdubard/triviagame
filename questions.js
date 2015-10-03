var questionTracker = 2;
var score = 0;
var questionsRight = 0;
var quizData = {
"What do you need at the end of every line?":
      [";", 
       "2", 
       "3", 
       "4"],
"What is an array?":
      ["1",
       "array",
       "3",
       "4"],
"2+2=?":
      ["a",
       "b",
       "4",
       "c"],
"How do you dance?":  
      ["1",
       "dance",
       "3",
       "4"]
};

var correctAnswers = {
"What do you need at the end of every line?": ";",
"What is an array?": "array",
"2+2=?": "4",
"How do you dance?": "dance"
};

var points = [5, 5, 10, 10];

function wrongAnswer(){
	alert("Wrong Answer");
	if(questionTracker<4)
		nextQuestion();
	else
		results();
}

function rightAnswer(){
	alert("Right Answer");
	score += points[questionTracker-2];
	document.getElementById("points").innerHTML = score;
	questionsRight++;
	if(questionTracker<4)
		nextQuestion();
	else
		results();
}

function nextQuestion(){
document.getElementById("questionHead").innerHTML = "Question " + questionTracker;
var arr = Object.keys(quizData);
var answers = quizData[arr[questionTracker-1]];
answers = shuffle(answers);
document.getElementById("question").innerHTML = arr[questionTracker-1];

document.getElementById("a1").innerHTML = answers[0];
document.getElementById("a2").innerHTML = answers[1];
document.getElementById("a3").innerHTML = answers[2];
document.getElementById("a4").innerHTML = answers[3];

if(correctAnswers[arr[questionTracker-1]] === answers[0]){
	document.getElementById("a1").onclick = rightAnswer;
	}
else{
	document.getElementById("a1").onclick = wrongAnswer;
}
	
if(correctAnswers[arr[questionTracker-1]] === answers[1])
	document.getElementById("a2").onclick = rightAnswer;
else
	document.getElementById("a2").onclick = wrongAnswer;	

if(correctAnswers[arr[questionTracker-1]] === answers[2])
	document.getElementById("a3").onclick = rightAnswer;
else
	document.getElementById("a3").onclick = wrongAnswer;
	
if(correctAnswers[arr[questionTracker-1]] === answers[3])
	document.getElementById("a4").onclick = rightAnswer;
else
	document.getElementById("a4").onclick = wrongAnswer;
	
questionTracker++;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function results(){
	window.location = '/Users/marydubard/triviagame/results.html';
	
}

