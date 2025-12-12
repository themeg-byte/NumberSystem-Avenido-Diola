const inputType = document.getElementById("inputType");
const outputType = document.getElementById("outputType");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

function convert() {
  let fromBase = Number(inputType.value);
  let toBase = Number(outputType.value);
  let value = inputValue.value;

  if (fromBase === 2 && !/^[01]+$/.test(value)) {
    alert("Invalid! Must input only 0,1");
    return;
  }

  if (fromBase === 8 && !/^[01234567]+$/.test(value)) {
    alert("Invalid! Must input only 0-7");
    return;
  }

  if (fromBase === 16 && !/^[0123456789AaBbCcDdEeFf]+$/.test(value)) {
    alert("Invalid! Must input only 0-9 and A-F");
    return;
  }

  if (fromBase === 10 && !/^[0123456789]+$/.test(value)) {
    alert("Invalid! Must input only 0-9");
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
  document.getElementById("inputValue").value = "";
  document.getElementById("outputValue").value = "";
}
