document.getElementById("output").innerHTML = "Week 3!";

var x = 2;
let y = 3;

const z = 5;

// x = x + y;

function testFunc(a,b) {
     let sum = (a * b)/z ** 2;

     let result = ((a === b) && (a == 1)) ? "yes" : "no";

     document.getElementById("output").innerHTML = result;
 }

//testFunc(x,y);

document.getElementById("calculate").addEventListener("click", function () {
    testFunc(x,y);
});




