// Array visualizer

// HTML Variables
let containerEl = document.getElementById("container");

// Global Variable
let myData = [];
for (let n = 1; n <= 50; n++) {
  myData.push(Math.random() * 600);
}

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  for (let i = 0; i < myData.length; i++) {
    outputStr += `<div style="height:${myData[i]}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.keyCode === 38) {
    // Up Arrow - add 600 to the index 0 
    myData.splice(0, 0, Math.random() * 600);
  } else if (event.keyCode === 40) {
    // Down arrow - remove element from middle
    myData.splice(0, 1);
  }

//   if (event.keyCode === 38) {
//     // Up Arrow - Push value to the end of array
//     myData.push(Math.random() * 600);
//   } else if (event.keyCode === 40) {
//     // Down arrow - remove value from the end of array
//     let poppedValue = myData.pop();
//   }

  // Redraw the array
  drawArray();
}
