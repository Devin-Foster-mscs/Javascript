function checkAddress() {
    if (document.getElementById("same_shipping").checked==true ) {
        document.getElementById("City2").value = document.getElementById("City").value;
	document.getElementById("State2").value = document.getElementById("State").value;
	document.getElementById("Zip2").value = document.getElementById("Zip").value;

    }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function ValidationForm() {
    let username = document.forms["customForm"]["UserName"];
    let password = document.forms["customForm"]["psw"];
    let password2 = document.forms["customForm"]["psw"];
    let city = document.forms["customForm"]["City"];
    let state = document.forms["customForm"]["State"];
    let zip = document.forms["customForm"]["Zip"];
    if(username.value == "") {
      alert("Please enter your name.");
      username.focus();
      return false;
    }
    if(password.value == "") {
      alert("Please enter a valid password.");
      password.focus();
      return false;
    }
    if(password2.value != password.value) {
      alert("Please make sure your passwords match.");
      password2.focus();
      return false;
    }
    if(password2.value == password.value) {
      alert("These passwords match! Good job!!!.");
      password2.focus();
      return true;
    }
    if(city.value == "") {
      alert("Please enter your city.");
      city.focus();
      return false;
    }
    if(state.value == "") {
      alert("Please enter your state");
      state.focus();
      return false;
    }
    

    if(zip.value == "") {
      alert("Please enter your zip.");
      zip.focus();
      return false;
    }
    return true;
  }

function myFunction() {
    document.getElementById("customForm").submit();
  }
        