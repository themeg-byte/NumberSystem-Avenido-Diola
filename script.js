const inputType = document.getElementById("inputType");
const outputType = document.getElementById("outputType");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

function convert() {
  let fromBase = Number(inputType.value);
  let toBase = Number(outputType.value);
  let value = inputValue.value;

  if (fromBase === 2 && !/^[01]+$/.test(value)) {
    outputValue.value = "Invalid!";
    return;
  }
  if (fromBase === 8 && !/^[01234567]+$/.test(value)) {
    outputValue.value = "Invalid!";
    return;
}
    if (fromBase === 16 && !/^[0123456789ABCDEF]+$/.test(value)) {
    outputValue.value = "Invalid!";
    return;
}

  let decimalNumber = parseInt(value, fromBase);

  if (isNaN(decimalNumber)) {
    outputValue.value = "Invalid!";
    return;
  }

  outputValue.value = decimalNumber.toString(toBase).toUpperCase();
}

function clr() {
  inputValue.value = "";
  outputValue.value = "";
}

