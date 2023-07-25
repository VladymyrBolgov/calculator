function addToScreen(val) {
    document.getElementById("screen").value += val;
  }
  
  function clearScreen() {
    document.getElementById("screen").value = "";
  }
 
  function backspace() {
    var screen = document.getElementById("screen");
    var screenValue = screen.value;
    screen.value = screenValue.substring(0, screenValue.length - 1);
}
  
function toggleSign() {
  var screen = document.getElementById("screen");
  var screenValue = screen.value;
  if (screenValue === "") {
    return;
  }
  var currentValue = parseFloat(screenValue);
  var newValue = -currentValue;
  screen.value = newValue.toString();
}
  
  function calculate() {
    var screen = document.getElementById("screen");
    var screenValue = screen.value;
    if (screenValue === "") {
      screen.value = "";
      return;
    }
    
    var result = eval(screenValue);
    screen.value = result;
}

document.addEventListener('keydown', function(event) {
  var key = event.key;
  if (/[0-9\+\-\*\/\(\)\.\s]/.test(key)) {
      addToScreen(key);
  } else if (key === 'Backspace' || key === 'Delete') {
      backspace();
  } else if (key === 'Enter') {
      calculate();
  }
});


var memoryValue = "";

function addToMemory() {
  var screen = document.getElementById("screen");
  memoryValue = screen.value;
}

function recallMemory() {
  var screen = document.getElementById("screen");
  screen.value += memoryValue;
}

