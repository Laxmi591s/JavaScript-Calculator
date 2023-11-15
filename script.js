function appendToDisplay(value) {
  document.forms[0].display.value += value;
}

function clearDisplay() {
  document.forms[0].display.value = '';
}

function deleteLast() {
  var currentValue = document.forms[0].display.value;
  document.forms[0].display.value = currentValue.slice(0, -1);
}

function calculate() {
  document.forms[0].display.value = eval(document.forms[0].display.value);
}
