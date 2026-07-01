const questions = [
{
question:"Which company developed JavaScript?",
options:["Netscape","Microsoft","Google","Oracle"],
answer:0
},
{
question:"Which keyword is used to declare a variable?",
options:["var","constant","variable","int"],
answer:0
},
{
question:"Which symbol is used for comments?",
options:["//","##","**","%%"],
answer:0
},
{
question:"Which method prints to the console?",
options:["console.log()","print()","echo()","write()"],
answer:0
},
{
question:"Which keyword declares a block scoped variable?",
options:["let","var","const","scope"],
answer:0
},
{
question:"Which operator checks equality and type?",
options:["===","==","=","!="],
answer:0
},
{
question:"Which method converts JSON to object?",
options:["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],
answer:0
},
{
question:"Which loop runs at least once?",
options:["do...while","while","for","foreach"],
answer:0
},
{
question:"Which function converts string to integer?",
options:["parseInt()","toString()","Number()","valueOf()"],
answer:0
},
{
question:"Which event occurs when a button is clicked?",
options:["click","change","submit","mouseover"],
answer:0
}
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");

startBtn.addEventListener("click", () => {
welcomeScreen.classList.remove("active");
quizScreen.classList.add("active");
loadQuestion();
});

function loadQuestion(){

questionNumber.innerHTML=`Question ${currentQuestion+1} of ${questions.length}`;

progressBar.style.width=((currentQuestion+1)/questions.length)*100+"%";

questionText.innerHTML=questions[currentQuestion].question;

optionsDiv.innerHTML="";

questions[currentQuestion].options.forEach((option,index)=>{

const div=document.createElement("div");

div.classList.add("option");

if(userAnswers[currentQuestion]===index){
div.classList.add("selected");
}

div.innerHTML=option;

div.addEventListener("click",()=>{

userAnswers[currentQuestion]=index;

document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));

div.classList.add("selected");

});

optionsDiv.appendChild(div);

});

prevBtn.disabled=currentQuestion===0;

if(currentQuestion===questions.length-1){
nextBtn.style.display="none";
submitBtn.style.display="block";
}else{
nextBtn.style.display="block";
submitBtn.style.display="none";
}

}

nextBtn.addEventListener("click",()=>{

if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}

});

prevBtn.addEventListener("click",()=>{

if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}

});

submitBtn.addEventListener("click",showResult);

function showResult(){

let score=0;

questions.forEach((q,index)=>{
if(userAnswers[index]===q.answer){
score++;
}
});

const wrong=questions.length-score;

const percent=Math.round((score/questions.length)*100);

quizScreen.classList.remove("active");
resultScreen.classList.add("active");

document.getElementById("correct").innerHTML=score;
document.getElementById("wrong").innerHTML=wrong;
document.getElementById("total").innerHTML=questions.length;
document.getElementById("percentage").innerHTML=percent+"%";

let message="Keep Practicing!";

if(percent===100){
message="Excellent!";
}
else if(percent>=80){
message="Great Job!";
}
else if(percent>=60){
message="Good Effort!";
}

document.getElementById("performance").innerHTML=message;

}

restartBtn.addEventListener("click",()=>{

currentQuestion=0;

userAnswers=new Array(questions.length).fill(null);

resultScreen.classList.remove("active");

welcomeScreen.classList.add("active");

});