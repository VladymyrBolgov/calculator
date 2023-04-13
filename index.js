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