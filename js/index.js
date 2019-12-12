// assigning heart object to 'element'
let element = document.getElementById("beatbox");

// when the heart is clicked, we run the inFlating function
element.addEventListener("click", inFlating);

// EventListener needed for when inflation transition ends
// where class 'inflate' is removed and heart resumes 'animated' state
element.addEventListener("animationend", function(event) {
    element.classList.remove('inflate');
    element.classList.add('pulse');
    element.classList.add('animated');
}, false);

function inFlating() {
    console.log(element)
        // get current width of heart
    element.style.transform = 'scale(5)';
    // var computedStyle = element.getBoundingClientRect();
    // console.log(computedStyle);
    // if heart is not inflating yet
    if (!element.classList.contains('inflate')) {
        // assign current width to .heart width
        // add inflate class property
        element.classList.remove('animated');
        element.classList.remove('pulse');
        element.classList.add('inflate');
    } else {
        // pause animation, say 'HOLD YOUR BREATH'
        console.log('Hold your breath...');
    }
}