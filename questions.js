

var questionTracker = 2;
var score = 0;
var questionsRight = 0;
var quizData = {
"Which isn't one of the top five majors at Wellesley?":
      ["Computer Science", 
       "Economics", 
       "Political Science", 
       "Biology"],
"How much money does Wellesley spend to replace dishes every year?":
      ["$50,000",
       "$2,500",
       "$25,000",
       "$60,000"],
"Who founded Wellesley?":
      ["Henry and Pauline Durant",
       "Horatio Hollis Hunnewell",
       "Ada Howard",
       "Wendy Wellesley"],
"What class of Wellesley students first planted a class tree?":
      ["1905",
       "1910",
       "1890",
       "1879"],
"What is Wellesley's motto?":
      ["Non Ministrari sed Ministrare",
       "Veritas",
       "Eruditio et Religio",
       "Non Slytherins sed Gryffindors"],
"What is the most common class tree species?":  
      ["white oak",
       "red oak",
       "yellow birch",
       "pine tree"],
"A ghost haunts the elevator of which hall:":  
      ["Tower",
       "Munger",
       "Pomeroy",
       "Haunted Mansion"],
"How many majors does Wellesley offer?":  
      ["56",
       "23",
       "61",
       "83"],
"Which of these is not a tradition at Wellesley?":  
      ["Apple Cider Day",
       "Lake Day",
       "Tree Planting",
       "Hoop Rolling"],
"Which of these is not part of the Wellesley 50?":
      ["Buy candy in El Table to eat during class.",
       "Be the subject of a psychology experiment.",
       "Join an organization.",
       "Sled down Severance Green face first."]
};

var correctAnswers = {
"Which isn't one of the top five majors at Wellesley?": "Computer Science",
"How much money does Wellesley spend to replace dishes every year?": "$50,000",
"Who founded Wellesley?": "Henry and Pauline Durant",
"What class of Wellesley students first planted a class tree?": "1879",
"What is Wellesley's motto?": "Non Ministrari sed Ministrare",
"What is the most common class tree species?": "red oak",
"A ghost haunts the elevator of which hall:": "Tower",
"How many majors does Wellesley offer?": "56",
"Hold3": "a",
"Which of these is not part of the Wellesley 50?": "Sled down Severance Green face first."
};

var points = 10;

function wrongAnswer(){
	alert("Wrong Answer");
	if(questionTracker<=10)
		nextQuestion();
	else
		results();
}

function rightAnswer(){
	alert("Right Answer");
	score += points;
	document.getElementById("points").innerHTML = score;
	questionsRight++;
	if(questionTracker<=10)
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
	$(".fbbutton").css("display", "block");
	document.getElementById("questionHead").innerHTML = "Results:";
	
	document.getElementById("question").innerHTML = "You got " + questionsRight + " out of 10 questions right!";
		
	if(questionsRight <= 1)
		document.getElementById("rank").innerHTML = "Are you sure you don't attend Harvard?";
	else if (questionsRight <= 5)
		document.getElementById("rank").innerHTML = "Maybe you visited once...";
	else if (questionsRight <= 8)
		document.getElementById("rank").innerHTML = "Welcome to Wellesley, first year.";
	else if(questionsRight <= 10)
		document.getElementById("rank").innerHTML = "You are truly a Wendy Wellesley!";
		
			
	var child1 = document.getElementById("a1");
	var child2 = document.getElementById("a2");
	var child3 = document.getElementById("a3");
	var child4 = document.getElementById("a4");
	child1.parentNode.removeChild(child1);
	child2.parentNode.removeChild(child2);
	child3.parentNode.removeChild(child3);
	child4.parentNode.removeChild(child4);
}



