// var height = prompt("what is your height in meters?")
// var weight = prompt("what is your weight in Kgs?")

let button = document.querySelector("#submit");
button.addEventListener("click", () => {
    bmiCalculator();
});

document.addEventListener("keydown", function(evt) {
    if (evt.key === "Enter") {
        bmiCalculator();
    }
});


function bmiCalculator() {
    var height = document.querySelector("#height");
    var weight = document.querySelector("#weight");

    let heightInput = false;
    let weightInput = false;

    if (height.value === "" || (height.value <= 0) || isNaN(height.value)) {
        document.querySelector("#height-error").innerHTML = "Please enter your Height";
    } else {
        document.querySelector("#height-error").innerHTML = "";
        heightInput = true;
    }

    if (weight.value === "" || (weight.value <= 0) || isNaN(weight.value)) {
        document.querySelector("#weight-error").innerHTML = "Please enter your Weight";
    } else {
        document.querySelector("#weight-error").innerHTML = "";
        weightInput = true
    }
    if (heightInput && weightInput) {
        var bmi = parseFloat(weight.value / ((Math.pow(height.value, 2)) / 10000)).toFixed(2);
        var finalBmi = document.querySelector("#finalBmi");
        finalBmi.innerHTML = bmi;
        bmiChart(bmi);
    } else {
        alert("The form has error");
    }
}

function bmiChart(event) {
    var result = document.querySelector("#result");
    if (event < 18.5) {
        result.innerHTML = "You are underweight";
    } else if (event < 25) {
        result.innerHTML = "You are Healthy";
    } else if (event < 30) {
        result.innerHTML = "You are Overweight";
    } else if (event < 35) {
        result.innerHTML = "You are Obese";
    } else {
        result.innerHTML = "You are Exteremly Obese";
    }
}