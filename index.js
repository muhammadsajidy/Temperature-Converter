const temperature = document.getElementById("temperature");
const p = document.getElementById("convertedvalue");

function celsiusToKelvin() {
    if (temperature.value === "") {
        alert("Please enter a temperature value to convert it")
    }
    else {
        p.innerHTML = Number(temperature.value) + 273.15 + " K";
    }
}

function celsiusToFahrenheit() {
    if (temperature.value === "") {
        alert("Please enter a temperature value to convert it")
    }
    else {
        p.innerHTML = (9/5) * Number(temperature.value) + 32 + " °F";
    }
}

function clearInput() {
    temperature.value = "";
    p.innerHTML = "";
}