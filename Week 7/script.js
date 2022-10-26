
// let heading_1 = document.getElementById("heading_1");
// let ordered_list_1 = document.getElementById("ordered_list_1");

// heading_1.textContent = "Edited";

//Line_items = ordered_list_1.children;
// line_items = document.querySelectorAll("#ordered_list_1 > l1");

// new_item = document.createElement("li");
// ordered_list_1.appendChild(new_item).textContent = "Four";
// ordered_list_1.appendChild(new_item).textContent = "Five";

// for (x=0;xcline_items.length;x++) {
//     alert(line_items[x].textContent);
// }

// before_item = document.createElement("li")
// ordered_list_1.insertBefore(before_item,line_items[0]).textContent = "Six";


// ***************************************************************************
// view in debugger
// in console: ordered_list_1.removeChild(line_items[3]);

// line_items[1].id = "colorLineItems";
//


// Start from scratch ****************************************
let content_2 = document.getElementById("content_2");
let item = [];
for (i=0; i<5; i++) {
    item[i] = document.createElement("li")
    content_2.appendChild(item[i]).textContent = "Child "+i;
    item[i].onclick = popup;
}

function popup() {
    let overlay = document.childElement("div");
    overlay.id = "lbOverlay";
    // Add the figure box to the overlay
    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);
    document.body.appendChild(overlay).textContent = this.innerHTML;

    // Add a close button to the overlay
    let closeBox = document.createElement("div");
    closeBox.innerHTML = "&Times;";
    closeBox.onclick = function() {
        document.body.removeChild(overlay);
    }
    overlay.appendChild(closeBox);

}

//content_2.appendChild(content_2.firstElementChild);
//content_2.insertBefore(content_2.lastElementChild.content_2.firstElementChild);
//
//timers *******************************************************************
// let timeID = windows.setInterval(bubbler, 2000)
//window.clearInterval(timeID);
// let timeID = window.setInterval(bubbler, 5000);
//window.clearTimeout(timeID);





function bubbler() {
    content_2.appendChild(content_2.firstElementChild);
}


// pop up windows************************************
alert();
let truth = confirm ("really?");
let firstName = promt("What's your name","First Name");


