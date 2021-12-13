/* Instruction Button */

// get the modal
let modal = document.getElementById("modal-instruct");

// get the button that opens the modal
let instructionButton = document.querySelector(".instruction");

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


/* Timer */
const startingMinute = 1;
let time = startingMinute * 60;
const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--; 
    time = time < 0 ? 0 : time;
};


