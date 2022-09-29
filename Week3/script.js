// initialize some constants
const PERSON_NAME = "Your name here";
const MPH = "Mph";
const RESTRATE= "Yes you did";

//EVENT LISTENERS -------------
//Initialize on load
window.onload = initialize

//calculate button
document.getElementById("touch").addEventListener("click", function (event) {
    calculate();
    event.preventDefault();
});


// FUNCTIONS ----------------
// *******************************************
function initialize() {
    document.getElementById("Person").value = PERSON_NAME;
    document.getElementById("Average_Mph").value = MPH;
}


// *****************************************************
function calculate() {
    
    let personName = document.getElementById("Person").value;
    
    let averageMPH = document.getElementById("Average_Mph").value;
    
    let x = averageMPH;
    let mph = x;

    let text = personName +" you ran "+x+" miles! <br> Your average pace was "+mph+"mph";
    let rest = (document.getElementById("rest").checked) ? RESTRATE : "No you didn't";
    document.getElementById("output").innerHTML = text +" _ "+ rest + " take a rest.";

}