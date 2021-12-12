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
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display ="none";
    }
}

/* About Button */
// get the modal

let modal_About = document.getElementById("modal-about");

// get the button that opens the modal
let aboutButton = document.querySelector(".about");

// get the <span> element that closes the modal
let spanAbout = document.querySelector(".closeAbout");

// when the user click on the button, open the modal
aboutButton.onclick = function() {
    modal_About.style.display ="block";
}

// When the user clicks on <span> (x), close the modal
window.onload = function() {
    spanAbout.onclick = function() {
    modal_About.style.display = "none";
}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_About) {
        modal_About.style.display ="none";
    }
}
