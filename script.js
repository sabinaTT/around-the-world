const startBtn = document.querySelector("#start");
const instructionButton = document.querySelector("#instruction");
const abtButton = document.querySelector("#about");
const countdown = document.querySelector(".countdown");
const title = document.querySelector("h1");
const image1 = document.getElementById("image1")
const bodyBg = document.getElementById("background");
const timesUp = "";
const formBox = document.querySelector(".question-box");
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
let startingMinute = 1;
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




let randNum1 = Math.floor(Math.random() * 12) + 1;
let randNum2 = Math.floor(Math.random() * 12) + 1;
let randNum3 = Math.floor(Math.random() * 12) + 1;
let randNum4 = Math.floor(Math.random() * 12) + 1;
let randNum5 = Math.floor(Math.random() * 12) + 1;
let randNum6 = Math.floor(Math.random() * 12) + 1;
let randNum7 = Math.floor(Math.random() * 12) + 1;
let randNum8 = Math.floor(Math.random() * 12) + 1;
let randNum9 = Math.floor(Math.random() * 12) + 1;
let randNum10 = Math.floor(Math.random() * 12) + 1;
// let userInput = document.querySelector("#question-input");
// console.log(userInput).value
let submitButton = document.querySelector("#question-submit");

function question4() {
    let subtract = document.querySelector(".ask-question")
    subtract.innerText = `${randNum1} - ${randNum2} = ?`;
    return randNum1 - randNum2;
};
let ans4 = question4();
document.querySelector(".question-box").addEventListener("submit", function(e) {
    e.preventDefault();
    // if (ans4 == userInput.value) {
    //     console.log('great job')
    // } else {
    //     console.log('try again')
    // }
    // console.log(userInput.value)
})

// question 5
function question5() {
    let multiply = document.querySelector(".ask-question");
    multiply.innerText = `${randNum1} x ${randNum2} = ?`;
    return randNum1 * randNum2;
};
let ans5 = question5();
document.querySelector(".question-box").addEventListener("submit", function(e) {
    e.preventDefault();
})



/*  Another way of doing it but doesn't work
document.querySelector(".question-box").addEventListener("submit", function(e) {
    e.preventDefault();
let userInput = document.querySelector("#question-input");
let dne = true;

    while (dne) {
        
        function question1() {
        let multiply = document.querySelector(".ask-question")
        multiply.innerText = `${randNum1} * ${randNum2} = ?`;
        return randNum1 * randNum2; 
        };
    
        let ans1 = question1();

        
         userInput = document.querySelector("#question-input");
         

        if (ans1 != userInput.value) {
            console.log("incorrect1")
            dne = false;
        } 
        else {
        console.log("correct1")
        function question2() {
            let add = document.querySelector(".ask-question")
            add.innerText = `${randNum3} + ${randNum4} = ?`;
            return randNum3 + randNum4;
        };    
        
        let ans2 = question2(); 
    
        userInput = document.querySelector("#question-input");
        
    }
        if (ans2 != userInput.value) {
            console.log(ans2)
            console.log('incorrect2')
            dne = false;
        }
        
        
    
    
    }
})
*/

function gohome() {

    const restartBtn = document.querySelector("#question-submit");
    restartBtn.innerText = "RESTART";
    restartBtn.addEventListener("click", function() {
        window.location.href="index.html";
    })
}
// This is to save an example that works
// question 3
function question1() {
    let multiply = document.querySelector(".ask-question")
    multiply.innerText = `${randNum1} * ${randNum2} = ?`;
    return randNum1 * randNum2; 
}; 
    let ans1 = question1();
    document.querySelector(".question-box").addEventListener("submit", function(e) {
        e.preventDefault();
        userInput1 = document.querySelector("#question-input");
        if ((ans1 == userInput1.value)) {
        bodyBg.style.backgroundImage= "url('images/seattle - mt rainier 3.jpeg')";
        bodyBg.style.transition = "3s";
        bodyBg.style.backgroundSize= "cover";
        console.log("correct 1");
        function question2() {
            let add = document.querySelector(".ask-question")
            add.innerText = `${randNum3} + ${randNum4} = ?`;
            return randNum3 + randNum4;
        };
            let ans2 = question2(); 
            document.querySelector(".question-box").addEventListener("submit", function(e) {
                e.preventDefault();
                userInput2 = document.querySelector("#question-input");
                if ((ans2 == userInput2.value)) {
                    bodyBg.style.backgroundImage= "url('images/italy - tuscany 1.jpeg')"; 
                    console.log("correct 2");
                    function question3() {
                        let subtract = document.querySelector(".ask-question");
                        subtract.innerText = `${randNum5} - ${randNum6} = ?`;
                        return randNum5 - randNum6;
                    };
                        let ans3 = question3();
                        document.querySelector(".question-box").addEventListener("submit", function(e) {
                            e.preventDefault();
                            let userInput3 = document.querySelector("#question-input");
                            if (ans3 == userInput3.value) {
                                bodyBg.style.backgroundImage= "url('images/egypt -2.jpeg')"; 
                                console.log("correct 3");
                                function question4() {
                                    let subtract = document.querySelector(".ask-question");
                                    subtract.innerText = `${randNum7} - ${randNum8} = ?`;
                                    return randNum7 - randNum8;
                                };
                                    let ans4 = question4();
                                    document.querySelector(".question-box").addEventListener("submit", function(e) {
                                        e.preventDefault();
                                        let userInput4 = document.querySelector("#question-input");
                                        if(ans4 == userInput4.value) {
                                            bodyBg.style.backgroundImage= "url('images/egypt -2.jpeg')"; 
                                            console.log("correct 4"); 
                                            function question5() {
                                                let multiply = document.querySelector(".ask-question")
                                                multiply.innerText = `${randNum9} * ${randNum10} = ?`;
                                                return randNum9 * randNum10; 
                                            };
                                                let ans5 = question5();
                                                document.querySelector(".question-box").addEventListener("submit", function(e) {
                                                    e.preventDefault();
                                                    let userInput5 = document.querySelector("#question-input");
                                                    if (ans5 == userInput5.value) {
                                                        console.log("correct 5");
                                                        bodyBg.style.backgroundImage= "url('images/cappadocia - the one.jpeg')";
                                                        title.style.color = "rgb(61, 144, 100, 0.1)";
                                                        countdown.style.display = "none";
                                                        title.style.fontSize = "55px";
                                                        title.style.textAlign = "center";
                                                        title.style.marginTop = "30px";
                                                        title.style.transition = "2s";
                                                        bodyBg.style.transition = "3s";
                                                        bodyBg.style.backgroundSize= "cover auto";
                                                        formBox.style.display = "none";
                                                    } else {
                                                        console.log("wrong 5")
                                                    }
                                                })
                                        } else {
                                            console.log("wrong 4")
                                        }
                                    })
                            } else {
                                console.log("wrong 3")
                            }
                        })
                } else {
                    console.log("wrong 2")
                }
        });
    } else {
        console.log("wrong 1")
    }
})


/*
function question5() {
    let multiply = document.querySelector(".ask-question");
    multiply.innerText = `${randNum1} x ${randNum2} = ?`;
    return randNum1 * randNum2;
};
let ans5 = question5();
document.querySelector(".question-box").addEventListener("submit", function(e) {
    e.preventDefault();
    if (ans5 == userInput.value) {
        console.log('correct')
    } else {
        console.log("next time")
    }
    return;
    // console.log(userInput.value)
})
*/



/*
// question 4
function question4() {
    let subtract = document.querySelector(".ask-question").innerText = `${randNum1} - ${randNum2} = ?`;
    return randNum1 - randNum2;
};
let ans4 = question4();




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

        