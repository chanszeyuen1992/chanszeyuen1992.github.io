for(let i = 0; i < document.querySelectorAll(".key").length ; i++){
    
    document.querySelectorAll(".key")[i].addEventListener("click", function () {
        let key = this.id
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
        case "a":
            let a = new Audio('./sound/c.mp3');
            a.play();
            break;
        case "w":
            let w = new Audio('./sound/c-shape.mp3');
            w.play();
            break;
        case "s":
            let s = new Audio('./sound/d.mp3');
            s.play();
            break;
        case "e":
            let e = new Audio('./sound/d-shape.mp3');
            e.play();
            break;
        case "d":
            let d = new Audio('./sound/e.mp3');
            d.play();
        case "f":
            let f = new Audio('./sound/f.mp3');
            f.play();
            break;
        case "t":
            let t = new Audio('./sound/f-shape.mp3');
            t.play();
            break;
        case "g":
            let g = new Audio('./sound/g.mp3');
            g.play();
        case "y":
            let y = new Audio('./sound/g-shape.mp3');
            y.play();
            break;
        case "h":
            let h = new Audio('./sound/a.mp3');
            h.play();
            break;
        case "u":
            let u = new Audio('./sound/a-shape.mp3');
            u.play();
        case "j":
            let j = new Audio('./sound/b.mp3');
            j.play();
            break;
    }
}



function buttonPress(key){
    document.querySelector("#" + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#" + key).classList.remove("pressed")
    },200)
}