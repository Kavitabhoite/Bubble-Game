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