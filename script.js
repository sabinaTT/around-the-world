const startBtn = document.querySelector("#start");
const instructionButton = document.querySelector("#instruction");
const abtButton = document.querySelector("#about");
const countdown = document.querySelector(".countdown");
const title = document.querySelector("h1");
const image1 = document.getElementById("image1")
const bodyBg = document.getElementById("background");
const timesUp = "";
const question1 = "";   
const question2 = "";
const question3 = "";
const question4 = "";
const question5 = "";
const question6 = "";
const question7 = "";
const question8 = "";
const question9 = "";
const question10 = "";
let img1 = document.createElement("img1").src = "http://path/to/image";




document.querySelector(".countdown").style.display = "none";
document.querySelector(".questionBox").style.display= "none";

/* Instruction Button */
// get the modal
let modal = document.getElementById("modal-instruct");
// get the button that opens the modal
// get the <span> element that closes the modal
let span = document.querySelector(".close");
// when the user click on the button, open the modal
instructionButton.onclick = function() {
    modal.style.display ="block";
}
// When the user clicks on <span> (x), close the modal
window.onload = function() {
span.onclick = function() {
    modal.style.display = "none";
}
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display ="none";
    }
};

/* About Button */
// get the modal
let modalAbt = document.getElementById("modal-about");
// get the button that opens the modal
// get the <span> element that closes the modal
let spanAbt = document.querySelector(".close-about");
// when the user click on the button, open the modal
abtButton.onclick = function() {
    modalAbt.style.display ="block";
};
// When the user clicks on <span> (x), close the modal
spanAbt.onclick = function() {
    modalAbt.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalAbt) {
        modalAbt.style.display ="none";
    } 
};


/* Move the Title */


/* Timer */
function timer () {
const startingMinute = 1;
let time = startingMinute * 60;
const countdownEl = document.querySelector(".countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--; 
    time = time < 0 ? 0 : time;
};
}

// when clicking start button,  timer appears, buttons disappear, background changes and title moves to upper right corner
function firstQuestion() {
    
}

startBtn.addEventListener("click", function() {
    countdown.style.display = "block";
    instructionButton.style.display = "none";
    abtButton.style.display ="none";
    bodyBg.style.backgroundImage= "url('images/switzerland 1.jpeg')";
    title.style.color = "rgb(61, 144, 100, 0.1)";
    title.style.fontSize = "55px";
    title.style.marginTop = "-45px";
    title.style.marginRight = "5px";
    title.style.textAlign ="right";
    title.style.transition = "2s";
    bodyBg.style.transition = "3s";
    bodyBg.style.backgroundSize= "cover auto";
})
startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", firstQuestion)



// function ask() {
//     let a = Math.floor(Math.random() * 10) + 1;
//     let b = Math.floor(Math.random() * 10) + 1;
//     let op = ["*", "+", "/", "-"][Math.floor(Math.random() * 4)];
//     return prompt(`How much is ${a} + ${b}?`) == eval (a + op + b);

// }
//     let questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask()],
//         total = questions.length,
//         correct = questions.filter(Boolean).length;


// console.log(correct)


// function createQuestion() {
//     let formBox = document.querySelector 
// }
// function ask() {
//     let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     for (let i =0; i<12; i++) {
//     let sum = 
// }
// }

function generateProblem() {
    // creates a random number from 1-12
    let randNum1 = Math.floor(Math.random() * 12) + 1;
    let randNum2 = Math.floor(Math.random() * 12) + 1;

    // creates a random operator
    let op = ["-", "+", "*"][Math.floor(Math.random() * 3)];

    return {number1: randNum1, operator: op, number2: randNum2};
}
let problemList = [
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem(),
    generateProblem()
];
// create a form box and submit button
