const hero = document.getElementById("hero");
const camp = document.getElementById("campFire");
const zombie = document.getElementById("zombie")
var i = 0;
const b = 50;

document.addEventListener("keydown", function (event){
    jump();
})

function jump(){
    if(hero.classList != "jump"){
        hero.classList.add("jump")
    }
    else{
        setTimeout(function (){
            hero.classList.remove("jump")
        }, 300)
    }
}

let isAlive = setInterval(function (){
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"))
    let campLeft = parseInt(window.getComputedStyle(camp).getPropertyValue("left"))

    if(campLeft < 50 && campLeft > 0  && heroTop >= 140){
        if(i == b){
            alert("You Win")
            i = 0;
        }
        i=i+1;
        document.getElementById("score").innerHTML = i+"/50";
    }
},20)
let Alive = setInterval(function (){
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"))
    let zombieLeft = parseInt(window.getComputedStyle(zombie).getPropertyValue("left"))

    if(zombieLeft < 40 && zombieLeft > 0  && heroTop >= 370){
        alert("You LOSE!!")
        i = 0;
        document.getElementById("score").innerHTML = i+"/50";
    }
},10)

