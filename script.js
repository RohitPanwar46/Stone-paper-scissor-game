let spsbutton = document.querySelectorAll(".btn")
let userChoose;
let comchoose;
let Uscore = 0;
let Cscore = 0;

let userscore = document.querySelectorAll(".score")[0]
let comscore = document.querySelectorAll(".score")[1]
console.log(comscore);

userscore.innerHTML = Uscore
comscore.innerHTML = Cscore

function compchoose() {
    let rand = 1 + Math.random() * 8
    if (1 <= rand && rand <= 3) {
        comchoose = "stone"
    } else if (4 <= rand && rand <= 6) {
        comchoose = "paper"
    } else if (7 <= rand && rand <= 9) {
        comchoose = "scisser"
    }
}

spsbutton[0].addEventListener("click", () => {
    userChoose = "stone";
    compchoose()

    if (comchoose === "stone") {
        document.querySelector(".messageButton").innerHTML = "Match Drow comp choose stone !"
    } else if (comchoose === "paper") {
        document.querySelector(".messageButton").innerHTML = "You Lost comp choose paper !"
        Cscore += 1;
        comscore.innerHTML = Cscore
    } else if (comchoose === "scisser") {
        document.querySelector(".messageButton").innerHTML = "You Win comp choose scisser !"
        Uscore += 1;
        userscore.innerHTML = Uscore;
    }
})


spsbutton[1].addEventListener("click", () => {
    userChoose = "paper";
    compchoose()

    if (comchoose === "stone") {
        document.querySelector(".messageButton").innerHTML = "You Win comp choose stone !"
        Uscore += 1;
        userscore.innerHTML = Uscore;
    } else if (comchoose === "paper") {
        document.querySelector(".messageButton").innerHTML = "Match Drow comp choose paper !"
        
    } else if (comchoose === "scisser") {
        document.querySelector(".messageButton").innerHTML = "You Lost comp choose scisser !"
        Cscore += 1;
        comscore.innerHTML = Cscore
    }
})


spsbutton[2].addEventListener("click", () => {
    userChoose = "scisser";
    compchoose()

    if (comchoose === "stone") {
        document.querySelector(".messageButton").innerHTML = "You Lost comp choose stone !"
        Cscore += 1;
        comscore.innerHTML = Cscore;
    } else if (comchoose === "paper") {
        document.querySelector(".messageButton").innerHTML = "You Win comp choose paper !"
        Uscore += 1;
        userscore.innerHTML = Uscore;
    } else if (comchoose === "scisser") {
        document.querySelector(".messageButton").innerHTML = "Match Drow comp choose scisser !"
        
    }
})


