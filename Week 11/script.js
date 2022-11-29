"use strict";
let output = document.getElementById("output");
let formNode = document.getElementById("formid");

// GET FORMAT (URI FORMAT)
// http(s)://domain.com/folder/file.ext?var=1&var=a+string&var=3

let queryString = location.search.slice(1); // removes the ? from query string
console.log(queryString);

queryString = queryString.replace(/\+/g," ");
queryString = decodeURIComponent(queryString); //%20
console.log(queryString);

let formData = queryString.split("&");
console.log(formData);

for (let items of formData) {
    let pair = items.split("=");
    let fieldLabel = document.createElement("li");
    fieldLabel.innerHTML = pair[0]+" = "+pair[1];
    formNode.appendChild(fieldLabel);
    let inputField = document.createElement("input");
    inputField.id = pair[0];
    inputField.name = pair[0]; 
    inputField.value = pair[1];
//    inputField.disabled = true;
    inputField.hidden = true;
    formNode.appendChild(inputField);
}


// // storage ****************************************************************

// // localStorage // permanent
for (let items of formData) {
    let pair = items.split("=");
    localStorage.setItem(pair[0],pair[1]);
}
    
    // // sessionStorage // only while browser is open to that site
    for (let items of formData) {
    let pair = items.split("=");
    sessionStorage.setItem(pair[0],pair[1])
    }
    
    console.log(localStorage.getItem('first_name'));
    console.log(localStorage.first_name);

    // // cookies // persistent, but can expire
    
    function setCookie (name,value,expDate,path,domain,secure) {
        if (name && value) {
            let cStr= name + "="+encodeURIComponent(value);
            if (expDate) cStr += ";expires="+expDate.toUTCString();
            if (path) cStr += ";path="+path;
            if (domain) cStr += ";domain="+domain;
            if (secure) cStr += ";secure";
            document.cookie = cStr;
        }
    }

    let expDate = new Date("November 02, 2021");
    setCookie("password", "donotstoremysecretpassword",expDate,"","","secure");

    console.log(document.cookie);

    let cookies = document.cookie.split("; ");
    console.log(cookies);
 
    