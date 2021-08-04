let gamePattern = [];
let pressedColors = [];
let lv = 0;
let start = false;
const buttonColors = ["red", "blue", "green", "yellow"];

//start the game
$("body").on('keydown', function(){
    if(!start){
        start = true;
        nextSequence();
    }
})

$("#key").on('click', function(){
    if(!start){
        start = true;
        nextSequence();
    }
})

//listening the buttons
for ( let i = 0; i < buttonColors.length; i++){
    $("." + buttonColors[i]).click(function(){
        if(start){
            clickMouse (buttonColors[i])
        }
    })
}

function clickMouse (color){
    //button Animation
    buttonAnimation(color)

    pressedColors.push(color)
    //Check whether game over or not.
    for(let j = 0; j < pressedColors.length; j++){
        if (pressedColors[j] != gamePattern[j]) {
            gameOver();
            return;
        }
    }
    
    if(pressedColors.length == gamePattern.length){
        setTimeout(function(){nextSequence()}, 1000);
    }
}

function gameOver(){
    //reset the value
    gamePattern = [];
    pressedColors = [];
    lv = 0;
    start = false;
    
    // Game Over Animation
    $("body").addClass("game-over");
    setTimeout(function(){ 
        $("body").removeClass("game-over")
        $("h3").text("Press A Key to Start <br> <br><button id='key'>Start</button>")
    }, 500)
    //Game Over Sound
    let wrong = new Audio('./sounds/wrong.mp3');
    wrong.play();
    
    
}

function nextSequence() {
    //Upgrade the lv and show it.
    lv++;
    $("h3").text("Level " + lv)
    //draw the num to the gamePattern Array
    let randomChosenColor = buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);

    //Reset the press Array.
    pressedColors = [];

    for(let i = 0; i < gamePattern.length; i++){
        setTimeout(function(){
            $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
            makeSound(gamePattern[i]);
        }, 500 + 500*i)
    }

    /*
    setTimeout(function(){
        $("#" + gamePattern[gamePattern.length - 1]).fadeOut(100).fadeIn(100);
        makeSound(gamePattern[gamePattern.length - 1]);
    }, 1000)
    */
}

function makeSound(key){
    switch (key) {
        case "red":
            let red = new Audio('./sounds/red.mp3');
            red.play();
            break;
        case "blue":
            let blue = new Audio('./sounds/blue.mp3');
            blue.play();
            break;
        case "green":
            let green = new Audio('./sounds/green.mp3');
            green.play();
            break;
        case "yellow":
            let yellow = new Audio('./sounds/yellow.mp3');
            yellow.play();
            break;
        default:
    }
}



function buttonAnimation(buttonColor){
    $("." + buttonColor).addClass("pressed");
    setTimeout(function() { $("." + buttonColor).removeClass("pressed") }, 100);
}
