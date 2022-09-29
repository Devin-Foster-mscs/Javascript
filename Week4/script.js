// initialize some constants
const PERSON_NAME = "Your name here";
const MPH = "Mph";
const RESTRATE= "Yes you did";
const HOURS_WK= .25

let formanme = document.getElementById("Person");
let Person =  document.getElementById("formname");
let Hourly_Rate =  document.getElementById("Average_Mph");
let Hours_per_week =  document.getElementById("Hours_per_week");
let tax =  document.getElementById("rest");
let output =  document.getElementById("output");
let reset =  document.getElementById("reset");
let calculate =  document.getElementById("calculate");

//EVENT LISTENERS -------------
//Initialize on load
window.onload = initialize

//calculate button
formname.addEventListener("change", function (event) {
    calculate();
    event.preventDefault();
});


// FUNCTIONS ----------------
// *******************************************
function initialize() {
    Person.value = PERSON_NAME;
    Hourly_Rate.value = RATE;
    Hours_per_week.value = HOURS_WK;
}


// *****************************************************
function calculate() {
    
    let personName = Person.value;
    
    let rate = document.Hourly_Rate.value;
    let hrsPerWeek = Hours_per_week.value;
    
    let x = rate * hrsPerWeek;
    let annualSalary = x * 52;

    let text = personName +" would make $ "+x+" per week <br>That's $"+annualSalary+"per year!";
    let tax = (document.getElementById("tax").checked) ? TAXRATE : 0;
    document.getElementById("output").innerHTML = text +" _ "+ (annualSalary *tax) + "tax.";

}