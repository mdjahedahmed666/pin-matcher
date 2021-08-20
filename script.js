const generatePin = document
  .getElementById("generatePin")
  .addEventListener("click", function () {
    const generateRandomNum = Math.round(1000 + Math.random() * 9000);
    document.getElementById("generatePinShow").value = generateRandomNum;
  });

// function calcNumbers(result) {
//   console.log(result);
//   calc.displayResult.value = calc.displayResult.value + result;
// }
const submitBtn = document
  .getElementById("submit")
  .addEventListener("click", function () {
    const pin = document.getElementById("generatePinShow").value;
    const clacVlaue = document.getElementById("clacVlaue").value;

    if (pin === clacVlaue) {
      document.getElementById("matched").style.display = "block";
    } else {
      document.getElementById("didNotMatch").style.display = "block";
      let tryValue = document.getElementById("tryValue").innerText;
      let tryNewValue = tryValue - 1;
      tryValue = tryNewValue;
      document.getElementById("tryValue").innerText = tryValue;
      document.getElementById("tryLeft").style.display = "block";
      if (tryValue == 0) {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.backgroundColor = "#fff";
      }
    }
  });

const clearBtn = document
  .getElementById("clear")
  .addEventListener("click", function () {
    document.getElementById("clacVlaue").value = "";
  });

const clearOneBtn = document
  .getElementById("clearOne")
  .addEventListener("click", function () {
    let clac = document.getElementById("clacVlaue").value;
    var output = clac.toString();
    output = output.substr(0, output.length - 1);
    document.getElementById("clacVlaue").value = output;
  });
