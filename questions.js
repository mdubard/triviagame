var questionTracker = 2;
var questions = ["What is an array?", "2+2=?", "How do you dance?"];
var answersA =  ["1",                 "1",     "1"];
var answersB =  ["2",                 "2",     "2"];
var answersC =  ["3",                 "3",     "3"];
var answersD =  ["4",                 "4",     "4"];

function wrongAnswer(){
	alert("Wrong Answer");
}

function rightAnswer(){
	alert("Right Answer");
}

function nextQuestion(){
document.getElementById("questionHead").innerHTML = "Question " + questionTracker;
document.getElementById("question").innerHTML = questions[questionTracker-2];
document.getElementById("a").innerHTML = answersA[questionTracker-2];
document.getElementById("b").innerHTML = answersB[questionTracker-2];
document.getElementById("c").innerHTML = answersC[questionTracker-2];
document.getElementById("d").innerHTML = answersD[questionTracker-2];
questionTracker++;
}