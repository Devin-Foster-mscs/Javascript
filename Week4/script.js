// initialize some constants
const PERSON_NAME = "Your name here";
const RATE = 15;
const HOURS_WK = 20;
const TAXRATE=.25

let formname = document.getElementById("formname");
let Person =  document.getElementById("Person");
let Hourly_Rate =  document.getElementById("Hourly_Rate");
let Hours_per_week =  document.getElementById("Hours_per_week");
let tax =  document.getElementById("tax");
let output =  document.getElementById("output");
let reset =  document.getElementById("reset");
let calculate =  document.getElementById("calculate");

//EVENT LISTENERS -------------
//Initialize on load
window.onload = initialize;


// formname.addEventListener("change", function (event) {
//     calculate_it();
//     event.preventDefault();
// });

calculate.addEventListener("click", function (event) {
    calculate_it();
    event.preventDefault();
});

reset.addEventListener("click", function (event) {
    initialize();
    output.innerHTML = '<div class="alert alert-warning alert-dismissible"" role="alert"> The form has been reset <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
});


// FUNCTIONS ----------------
// *******************************************
function initialize() {
    output.innerHTML = null;
}


// *****************************************************
function calculate_it() {
    
    let x = ((isNaN(Hourly_Rate.value) || !Hourly_Rate.value) || (isNaN(Hours_per_week.value) || !Hours_per_week.value))
    ? alert("Please enter a number")
    : Math.round(Hourly_Rate.value * Hours_per_week.value*100)/100;

    let annualSalary = Math.round(x * 52 * 100)/100;

    let text = Person.value +" would make $ "+x+" per week.<br>That's $"+annualSalary+"per year!";
    let tax_amount = (tax.checked) ? TAXRATE : 0;
    output.innerHTML = text +" - $"+ Math.round(annualSalary*tax_amount*100)/100 + "tax.";

}