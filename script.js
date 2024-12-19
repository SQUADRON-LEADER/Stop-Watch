let sec = 0, min = 0, hour = 0;
const secs = document.getElementById("secs");
const mins = document.getElementById("mins");
const hours = document.getElementById("hours");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let interval;

start.addEventListener("click", function () {
    start.classList.add("active");
    stop.classList.remove("active");

    interval = setInterval(function () {
        if (sec < 59) {
            sec += 1;
        } else {
            sec = 0;
            if (min < 59) {
                min += 1;
            } else {
                min = 0;
                hour += 1;
            }
        }
        
        // Update the HTML elements with formatted time
        secs.innerHTML = sec < 10 ? "0" + sec : sec;
        mins.innerHTML = min < 10 ? "0" + min : min;
        hours.innerHTML = hour < 10 ? "0" + hour : hour;
    }, 1000);

    // Disable the start button
    start.style.pointerEvents = "none";
    stop.style.pointerEvents = "auto";
});

stop.addEventListener("click", function () {
    stop.classList.add("active");
    start.classList.remove("active");

    clearInterval(interval);
    start.style.pointerEvents = "auto";
    stop.style.pointerEvents = "none";
});

reset.addEventListener("click", function () {
    // Reset the time and update the display
    sec = 0;
    min = 0;
    hour = 0;
    
    // Update HTML elements with reset values
    secs.innerHTML = "00";
    mins.innerHTML = "00";
    hours.innerHTML = "00";

    // Reset buttons and disable the start button
    start.classList.remove("active");
    stop.classList.remove("active");
    start.style.pointerEvents = "auto";
    stop.style.pointerEvents = "none";
    
    // Clear the interval if it's running
    clearInterval(interval);
});
