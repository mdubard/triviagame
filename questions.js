var questionTracker = 2;
var score = 0;
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
	nextQuestion();
}

function rightAnswer(){
	alert("Right Answer");
	score += points[questionTracker-2];
	document.getElementById("points").innerHTML = score;
	nextQuestion();
}

function nextQuestion(){
document.getElementById("questionHead").innerHTML = "Question " + questionTracker;
var arr = Object.keys(quizData);
var answers = quizData[arr[questionTracker-1]];
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

