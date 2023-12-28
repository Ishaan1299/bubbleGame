
var timer = 60;
var score = 0;
var Hitrandom = 0;
function makeBubble() {
   var clutter = "";
   for (var i = 1; i <= 168; i++){
   var rn = Math.floor(Math.random()*10)
   clutter += `<div id="bubble">${rn}</div>`;
   }
   document.querySelector("#panel-btm").innerHTML = clutter;
}

runTimer = () => {
   
   var timerInterval = setInterval(() => {
      
      if (timer > 0) {
         timer--;
         document.querySelector("#timer").innerText = timer;
      }
      else {
         clearInterval(timerInterval);
         document.querySelector("#panel-btm").innerHTML = `<h1>GAME OVER!! Your Final Score is ${score}</h1>`;
      }
   }, 1000);
   
}

hitNumber = () => {
   Hitrandom = Math.floor(Math.random()*10)
   document.querySelector("#hit").innerText = Hitrandom;
}

function scoreVal() {
   score += 10;
   document.querySelector("#score").innerText = score;
}

document.querySelector("#panel-btm").addEventListener("click", function (bubble) {
   var clickedNum = Number(bubble.target.innerText);
   if (clickedNum === Hitrandom) {
      scoreVal();
      hitNumber();
      makeBubble();
   }
});

makeBubble();
runTimer();
hitNumber();

