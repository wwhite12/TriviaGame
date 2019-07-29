var time = 10;
var timerRunning = false;


//start timer when window loads
window.onload = timer();
window.onload = startTimer();
setTimeout(stopTimer,10000);

function startTimer(){
    if(!timerRunning){
        intervalID = setInterval(timer, 1000);
        timerRunning = true;
    }
}

function stopTimer(){
    clearInterval(intervalID);
    timerRunning = false;
    endGame();
}

function timer(){
time --;
var converted = timeConverter(time);
$("#timeLeft").text(converted);
}

function timeConverter(t){
    var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}



let rightAnswer = 0;
let wrongAnswer = 0;
let unanswered = 0;


$("#submit").on("click", endGame);
//endGame function, loops through each question, logs right/wrong/unanswered responses
function endGame (){

var answerOne = $("#questionOne");
var answerTwo = $("#questionTwo");
var answerThree = $("#questionThree");
var answerFour = $("#questionFour");
var answerFive = $("#questionFive");
let easyOne;
let easyTwo;
let easyThree;
let easyFour;
let easyFive;

//question one loop
for(let i =0;i < answerOne[0].length;i++){
   easyOne= answerOne[0][i]
    if(easyOne.checked ===true && easyOne.id === "correctOne"){
        rightAnswer++;
   }else if(answerOne[0][0].checked ===false && answerOne[0][1].checked ===false && answerOne[0][2].checked ===false && answerOne[0][3].checked ===false){
       unanswered+=.25;
   }else if(answerOne[0][0].checked ===false){
       wrongAnswer+=.25;
   }
}
//question two loop
for(let i =0;i < answerTwo[0].length;i++){
   easyTwo= answerTwo[0][i]
    if(easyTwo.checked ===true && easyTwo.id === "correctTwo"){
        rightAnswer++; 
   }else if(answerTwo[0][0].checked ===false && answerTwo[0][1].checked ===false && answerTwo[0][2].checked ===false && answerTwo[0][3].checked ===false){
       unanswered+=.25;
   }else if(answerTwo[0][3].checked ===false){
       wrongAnswer+=.25;
   }    
}
//question three loop
for(let i =0;i < answerThree[0].length;i++){
   easyThree= answerThree[0][i]
    if(easyThree.checked ===true && easyThree.id === "correctThree"){
        rightAnswer++; 
   }else if(answerThree[0][0].checked ===false && answerThree[0][1].checked ===false && answerThree[0][2].checked ===false && answerThree[0][3].checked ===false){
       unanswered+=.25;
   }else if(answerThree[0][1].checked ===false){
       wrongAnswer+=.25;
   }
}
//question four loop
for(let i =0;i < answerFour[0].length;i++){
   easyFour= answerFour[0][i]
    if(easyFour.checked ===true && easyFour.id === "correctFour"){
        rightAnswer++;
   }else if(answerFour[0][0].checked ===false && answerFour[0][1].checked ===false && answerFour[0][2].checked ===false && answerFour[0][3].checked ===false){
       unanswered+=.25;
   }else if(answerFour[0][0].checked ===false){
       wrongAnswer+=.25;
   }
}


//question five loop
for(let i =0;i < answerFive[0].length;i++){
   easyFive= answerFive[0][i]
    if(easyFive.checked ===true && easyFive.id === "correctFive"){  
        rightAnswer++;  
   }else if(answerFive[0][0].checked ===false && answerFive[0][1].checked ===false && answerFive[0][2].checked ===false && answerFive[0][3].checked ===false){
       unanswered+=.25;
   }else if(answerFive[0][2].checked ===false){
       wrongAnswer+=.25;
   }
   
}
//display right/wrong/unanswered to DOM
$("#timeLeft").text("Right Answers: "+rightAnswer+" Wrong Answers: "+wrongAnswer+ " Unanswered: " + unanswered);
$(".row").empty();
//call stopTimer function
stopTimer();
}