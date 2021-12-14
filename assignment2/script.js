function add() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  if (number1 == "" || number2 == "") {
    alert("Enter Number");
  } else {
    const addition = parseInt(number1) + parseInt(number2);
    document.getElementById("result").innerHTML = `Addition is ${addition}`;
  }
}
document.write("<br>");
function sub() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  if (number1 == "" || number2 == "") {
    alert("Enter Number");
  } else {
    const substraction = parseInt(number1) - parseInt(number2);
    document.getElementById(
      "result"
    ).innerHTML = `Substraction is ${substraction}`;
  }
}
