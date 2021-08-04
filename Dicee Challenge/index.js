function click(){
    
    let scr1 = draw();
    let scr2 = draw();
    
    document.querySelector(".img1").setAttribute("src", "images/dice" + scr1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + scr2 + ".png");

    if (scr1 > scr2){
        document.querySelector("h1").innerHTML = "Player 1 won!";
    } else if(scr2 > scr1){
        document.querySelector("h1").innerHTML = "Player 2 won!";
    } else {
        document.querySelector("h1").innerHTML = "Tier!";
    }
}

function draw(){
    n = Math.floor(Math.random()*6 + 1);
    return n
}

document.querySelector("#click").addEventListener("click", click);