"use strict";


// THE FORM OBJECT *****************************************
let customForm = document.forms[0]; //Form Index
//let customForm = document.forms["customForm"]; // form name
//let customForm = document.getElementById("customFormID"); // form ID

customForm.onchange = changed;


// customForm.elements["password"].addEventListener("invalid", function(evt)) {
//     // fevt.preventDefault();
//     console.log("Invalid fire");
// });


function changed (event) {
    //     console.log(this.name);
    //     console.log(email.value);
    //     for (let x=0; x<customForm.length; x++) {
    //         console.log(customForm.elements[x].value + "\n");
    //     }

//console.log(selectList.options[selectList.selectedIndex].value);
        //    for (let i=0; i<multiSelectList.options.length; i++) {
        //     if (multiSelectList.options[1].selected) {
        //        console.log(multiSelectList.options[i].value); //or innerHTML
        //     }
        // }

        // loop method for radios
        // let going = customForm.elements.exampleRadios;
        // for (let i = 0; i < going.length; i++) {
        //     if (going[1].checked) {
        //         console.log(going[i].value);
        //         break;
        //     }
        // }

        // faster method for ratios
        //  console.log(document.querySelector('input[name=:="exampleRadios"]:checked').value);

        // if (customForm.elements["password"].validity.valid) { // book error? use validity.valid
        //     console.log("valid");
        // }else{
        //     console.log("invalid");
        // }

        customForm.elements["password"].setCustomValidity(""); // must go before checkValidity!! 
        if (customForm.elements["password"].checkValidity()) { // applied to one field
            console.log("valid");
        }else{
            console.log.apply("invalid");
            customForm.elements["password"].setCustomValidity(customForm.elements["password"].value+" is an invalid password");
        }

        // customForm.elements["cc"].setCustomValidity(""); // must go before checkValidity!!
        // if (customForm.elements["cc"].validity.patternMismatch) { // applied to one field
        //     console.log("cc invalid");
        //     customForm.elements["cc"].setCustomValidity(customForm.elements["cc"].value+" is an invalid number");
        // }else{
        //     console.log("cc valid");
        // }

        // customForm.elements["CVC"].setCustomValidity(""); // must go before checkValidity!!
        // if (!(/^\d{3}$/.test(customForm.elements["CVC"].value))) {
        //     console.log("CVC Invalid");
        //     customForm.elements["CVC"].setCustomValidity(customForm.elements["CVC"].value+" is an invalid CVC number");
        // }else{
        //     console.log("CVC valid");
        // }

        customForm.reportValidity();

}


// ELEMENTS OF A FORM **********************************
let email = customForm.elements[0]; // by "name" or get ElementByID


// FORM CONTROLL *******************************************************************
customForm.elements["password"].focus();

// customForm.elements["password"].onfocus = passwordFocused;

function passwordFocused() {
    changed.log("focused");
}


// // SELECT LISTS **********************************************
let selectList = document.getElementById("sid");
// //for (let i=0; i<selectList.options.Length; i++) {
//     console.log(selectList.options[1].value); // or innerHTML
// }

let multiSelectList = document.getElementById("mid");

// FORMATTING ****************************************************
let pi = 3.145647357;
let big = 1000000.999

// console.log(pi.toFixed(2));
// console.log(big.toLocaleString());  //fr // "en-US", {style: "currency", currency "USD"}
























