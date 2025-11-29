//move global variables on the top
let timer = 60;

//create bubbles
function createBubble(){
    let bubble = "";

    // let nmBbl = Math.floor(Math.random()*100);
    for(let i=1; i<154; i++){
        let nm = Math.floor(Math.random()*10);
        //add data the times loop runs 
        bubble += `<div class="bubble">${nm}</div>`;
    }
    let pbtm = document.querySelector('.pbtm');

    //used innerHtml here bcuz appendChild doesn't accept strings it accepts html elements
    pbtm.innerHTML = bubble;
}

//run timer for 1 min
function runTimer(){
    setInterval(function(){
        timer--;
        let time = document.querySelector('#time');
        time.textContent = timer;
    }, 1000)
}

function setHit(){
    let hit = Math.floor(Math.random()*10);
    let hits = document.querySelector('#hitnm');
    hits.textContent = hit;
}

createBubble();
runTimer();
setHit();