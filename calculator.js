// Function to clear the display
function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

// Function to delete the last digit entered
function deleteDigit() {
  let display = document.getElementById("display").innerText;
  document.getElementById("display").innerText = display.slice(0, -1) || "0";
}

// Function to append a value to the display
function appendToDisplay(value) {
  let display = document.getElementById("display").innerText;
  if (display === "0") {
    document.getElementById("display").innerText = value;
  } else {
    document.getElementById("display").innerText += value;
  }
}

// Function to evaluate the entered expression and display the result
function calculateResult() {
  let display = document.getElementById("display").innerText;
  try {
    document.getElementById("display").innerText = eval(display);
  } catch (error) {
    document.getElementById("display").innerText = "Error";
  }
}
