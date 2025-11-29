//move global variables on the top
let timer = 60;
let hit = 0; //can be used to match the values
let score = 0;

//these are used more then once so fetched globally (optimized)
let pbtm = document.querySelector('#pbtm');
let scoreVal = document.querySelector('#scoreVal');
let hits = document.querySelector('#hitnm');
let storeScore = document.querySelector("#highScore");

//get the high score from local storage 
let highScore = Number(localStorage.getItem("highScore")); //convert to number to compare
storeScore.textContent = highScore; //show old highscore

//create bubbles
function createBubble(){
    let bubble = "";

    // let nmBbl = Math.floor(Math.random()*100);
    for(let i=1; i<154; i++){
        let nm = Math.floor(Math.random()*10);
        //add data the times loop runs 
        bubble += `<div class="bubble">${nm}</div>`;
    }

    //used innerHtml here bcuz appendChild doesn't accept strings it accepts html elements
    pbtm.innerHTML = bubble;
}

//run timer for 1 min
function runTimer(){
    let interval = setInterval(function(){
        if(timer > 0){
            timer--;
            let time = document.querySelector('#time');
            time.textContent = timer;
        } else{
            clearInterval(interval);
            pbtm.innerHTML = `<div class="gmOver">Game Over<div>Your Score is ${score}</div></div>`; //print final score
            scoreVal.innerHTML = 0;
            hits.innerHTML = 0;

            //checking and storing high score
            if(score>highScore){
                highScore = score;
                localStorage.setItem("highScore", highScore);
            }
            storeScore.textContent = highScore;
        }
    }, 1000)
}

//set random hit number
function setHit(){
    hit =  Math.floor(Math.random()*10);
    // let hit = Math.floor(Math.random()*10); -- not accessible outside

    hits.textContent = hit;
}

//increase the score by 10
function addScore() {
    score += 10;
    scoreVal.innerHTML = score;
}

//bubble click events
pbtm.addEventListener("click", function(dets){
    console.log(dets.target.textContent); //gives string
    let bubbleVal = Number(dets.target.textContent);

    //matches the hit value and bubble number
    if(bubbleVal === hit) {
        //refresh the values and bubbles
        addScore();
        createBubble();
        setHit();
    }
})

createBubble();
runTimer();
setHit();