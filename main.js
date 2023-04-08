//
//  JS File



// Variables
var alltasks = [];

//
// Functions
//

function delitetask() {
  var id = this.id;
  alltasks.splice(id, 1);
  creatlistoftasks(alltasks);
}

function creatlistoftasks(list) {

  var addNewList = document.getElementById("addNewList");
  addNewList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {

    var newelement = "<li> <input type = 'checkbox'>" + alltasks[i] + "</input> <button id ='" + i + "'  onclick='delitetask()'> delete </button > </li > "; //newelement  
    addNewList.innerHTML += newelement;

  }
}


function addtask() {

  document.getElementById("AddNewTask").value;//value
  var AddNewTask = document.getElementById("AddNewTask").value; //tack out value in input box
  alltasks.push(AddNewTask);
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
