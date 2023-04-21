//
//  JS File



// Variables
var alltasks = [];
var checkbox = [];

//
// Functions
//

function delitetask(id) {
  alltasks.splice(id, 1);
  checkbox.splice(id, 1);
  creatlistoftasks(alltasks);
}

function updatcheckbox(id) {

  if (checkbox[id]) {
    checkbox[id] = false;
  }

  else {

    checkbox[id] = true;
  }

}







function creatlistoftasks(list) {

  var addNewList = document.getElementById("addNewList");
  addNewList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    var checked = checkbox[i] ? "checked" : "";

    var newelement = "<li style='padding: 2.7%; border: 1px solid black; width: 50%; margin: 0 auto; background-color: cadetblue;'> <input type ='checkbox'" + checked + " onchange= 'updatcheckbox(" + i + ")'> " + alltasks[i] + "</input>  <button id='" + i + "' onclick='delitetask(" + i + ")'> D-elete </button > </li > "; //newelement
    addNewList.innerHTML += newelement;
  }
}


function addtask() {

  document.getElementById("AddNewTask").value;//value
  var AddNewTask = document.getElementById("AddNewTask").value; //tack out value in input box
  alltasks.push(AddNewTask);
  creatlistoftasks(alltasks);
  checkbox.push(false);
}

function clearAndRestart() {

  alltasks = [];
  checkbox = [];
  creatlistoftasks(alltasks);

}


/*
//  You may remove the code below - it's just boilerplate
//
//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// Variables

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
*/
