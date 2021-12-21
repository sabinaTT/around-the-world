const startBtn = document.querySelector("#start");
const instructionButton = document.querySelector("#instruction");
const abtButton = document.querySelector("#about");
const countdown = document.querySelector(".countdown");
const title = document.querySelector("h1");
const image1 = document.getElementById("image1")
const bodyBg = document.getElementById("background");
const timesUp = "";
// const question1 = "";   
// const question2 = "";
// const question3 = "";
// const question4 = "";
// const question5 = "";
// const question6 = "";
// const question7 = "";
// const question8 = "";
// const question9 = "";
// const question10 = "";
let img1 = document.createElement("img1").src = "http://path/to/image";
document.querySelector(".countdown").style.display = "none";
document.querySelector(".question-box").style.display= "none";



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
// window.onload = function() {
span.onclick = function() {
    modal.style.display = "none";
}
// };
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




// function ask() {
//     let a = Math.floor(Math.random() * 10) + 1;
//     let b = Math.floor(Math.random() * 10) + 1;
//     let op = ["*", "+", "/", "-"][Math.floor(Math.random() * 4)];
//     let multiply = document.querySelector(".ask-question").innerText = `${randNum1} x ${randNum2} = ?`;
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
/*
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
console.log(problemList)

*/
// create a form box and submit button

startBtn.addEventListener("click", function() {
    document.querySelector(".question-box").style.display= "block";
})


// function multiply() {
//    return randNum1 * randNum2
// };

// function add() {
//     return randNum1 + randNum2
// };
// function subtract() {
//     return randNum1 - randNum2
// };







// the questions

// let randNum1 = Math.floor(Math.random() * 12) + 1;
// let randNum2 = Math.floor(Math.random() * 12) + 1;



// question 1
// function question1() {
//     let multiply = document.querySelector(".ask-question");
//     multiply.innerText = `${randNum1} x ${randNum2} = ?`;
//     return randNum1 * randNum2; 
// };
// let ans1 = question1();
// console.log("ans1", ans1)


// question 2

// let randNum1 = Math.floor(Math.random() * 12) + 1;
// let randNum2 = Math.floor(Math.random() * 12) + 1;
// let userInput = document.querySelector("#question-input").value;
/*
function question2() {
    let add = document.querySelector(".ask-question").innerText = `${randNum1} + ${randNum2} = ?`;
    // let userInput = document.querySelector("#question-input").value;
    let answer2 = randNum1 + randNum2;
    let tOf = true; 
    console.log(userInput);
    if (userInput != answer2) {
        return tOf = false;
    } else {
        return tOf;
    }
        return tOf;    
};


let ans2 = question2();
console.log(userInput)

// if (ans2 == userInput) {
//     console.log("heyyyyoooo")
// }

*/

let randNum1 = Math.floor(Math.random() * 12) + 1;
let randNum2 = Math.floor(Math.random() * 12) + 1;
let userInput = document.querySelector("#question-input");
// console.log(userInput).value
let submitButton = document.querySelector("#question-submit");


// question 3
function question3() {
    let subtract = document.querySelector(".ask-question")
    subtract.innerText = `${randNum1} - ${randNum2} = ?`;
    return randNum1 - randNum2;
};
let ans3 = question3();
document.querySelector(".question-box").addEventListener("submit", function(e) {
    e.preventDefault();
    if (ans3 == userInput.value) {
        console.log("correct!")
    } else {
        console.log('try again')
    }
    console.log(userInput.value)
})




 



/*
// question 4
function question4() {
    let subtract = document.querySelector(".ask-question").innerText = `${randNum1} - ${randNum2} = ?`;
    return randNum1 - randNum2;
};
let ans4 = question4();


// question 5
function question5() {
    let multiply = document.querySelector(".ask-question").innerText = `${randNum1} x ${randNum2} = ?`;
    return randNum1 * randNum2;
};
let ans5 = question5();

// question 6
function question6() {
    let add = document.querySelector(".ask-question").innerText = `${randNum1} + ${randNum2} = ?`;
    return randNum1 + randNum2;
};
let ans6 = question6();
 

*/

// function ask() {


//     return prompt(`How much is ${a} + ${b}?`) == eval (a + op + b);

// }



// console.log(correct)
/*
let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let op = ["*", "+", "-"][Math.floor(Math.random() * 3)];


//     return prompt(`How much is ${a} + ${b}?`) == eval (a + op + b);

// }
//     let questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask()],
//         total = questions.length,
//         correct = questions.filter(Boolean).length;

function ask() {
    let questionBox = document.querySelector(".ask-question")
    questionBox.innerText = `${a} ${op} ${b} = ?`;
    // return (a + op + b);
    
    // let questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask()],
    //     total = questions.length,
    //     correct = questions.filter(Boolean).length;

    // // if (userInput == )
    console.log(`What is ${a} ${op} ${b}?`)
}
let ans1 = ask()
// console.log(eval(userInput) === (ans1))

*/

