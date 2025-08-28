const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const button = document.querySelector('.equals');
const select = document.getElementById('select');
const ms = document.getElementById('ms')
const container = document.querySelector('.container');
const resultDisp = document.getElementById('result');
const copy = document.querySelector('.copy');

function showResult(result) {
    if (result == "Infinity" || String(result) == "NaN") {
        resultDisp.style.color = "red";
        resultDisp.textContent = "Ty dolbaeb";
        
    } else {
        resultDisp.style.color = "black";
        resultDisp.textContent = result;
        
    }
    resultDisp.style.display = "flex";

    copy.style.display = "flex";

    copy.addEventListener('click', function() {
        navigator.clipboard.writeText(resultDisp.textContent);
    })
}

function calc() {
    const firstValue = Number(firstInput.value);
    const secondValue = Number(secondInput.value);
    const operation = select.value;
    const metricsys = ms.value;

    console.log(firstValue);
    console.log(secondValue);

    let result = 0;

    switch(operation) {
        case "add":
            showResult(firstValue + secondValue);
            break;
        case "subtract":
            showResult(firstValue - secondValue);
            break;
        case "multiply":
            showResult(firstValue * secondValue);
            break;
        case "divide":
            showResult(firstValue / secondValue);
            break;
        case "sqrt":
            showResult(Math.pow(firstValue, 0.5));
            break;
        case "sqr":
            showResult(Math.pow(firstValue, 2));
            break;
        case "exponent":
            showResult(Math.pow(firstValue, secondValue));
            break;
        case "nrt":
            showResult(Math.pow(secondValue, 1/firstValue));
            break;
        case "sin":
            if (String(metricsys) == "deg"){
                showResult(Math.sin(firstValue * Math.PI / 180));
            }
            else if (String(metricsys) == "rad"){
                showResult(Math.sin(Math.PI / firstValue));
            }
            break;
        case "cos":
            if (String(metricsys) == "deg"){
                showResult(Math.cos(firstValue * Math.PI / 180));
            }
            else if (String(metricsys) == "rad"){
                showResult(Math.cos(Math.PI / firstValue));
            }
            break;
        case "tg":
            if (String(metricsys) == "deg"){
                showResult(Math.tan(firstValue * Math.PI / 180));
            }
            else if (String(metricsys) == "rad"){
                showResult(Math.tan(Math.PI / firstValue));
            }
            break;
        default:
            return;
    }
}

button.addEventListener('click', calc);

document.addEventListener('keyup', function(event) {
    if (event.key === "Enter") { calc(); };
});