let secs = 0;
let mins = 0;
let hours = 0;

//var to hold display value
let displaySecs = 0;
let displayMins = 0;
let displayHours = 0;

//var to hold function
let interval = null;

//var to hold stopwatch status
let status = "stopped";

//stop watch function
function stopwatch (){

    secs++;
    //increase value
    if(secs - 60 === 0){
        secs = 0;
        mins++;
        if(mins - 60 === 0){
            mins = 0;
            hours++;
        }
    }

    //addiing leading 0 to value
    if(secs < 10){
        displaySecs = "0"+secs.toString();
    }
    else{
        displaySecs = secs;
    }
    if(mins < 10){
        displayMins = "0"+mins.toString();
    }
    else{
        displayMins = mins;
    }
    if(hours < 10){
        displayHours = "0"+hours.toString();
    }
    else{
        displayHours = hours;
    }
    //display time
    document.getElementById("display").innerHTML = displayHours + ":" + displayMins + ":" + displaySecs;
}

function startStop(){
    if(status === "stopped"){
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("startstop").innerHTML = "stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "start";
        status = "stopped";
    }
}

//reset
function reset(){
    window.clearInterval(interval);
    secs = 0;
    mins = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "start";
}