for(let i = 0; i < document.querySelectorAll(".drum").length ; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let key = this.innerHTML
        makeSound(key);
        buttonPress(key);
    })
}

document.addEventListener("keypress", (e) => {
    makeSound(e.key);
    buttonPress(e.key)
})

function makeSound(key){
    switch(key){
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
        case "k":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;
    }
}

function buttonPress(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed")
    },150)
}