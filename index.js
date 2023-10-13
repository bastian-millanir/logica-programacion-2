



function conversionTemperatura() {
    let temperatura = parseFloat(prompt("Ingrese la temperatura en Celsius para convertirla en Fahrenheit y Kelvin: "));
    if (isNaN(temperatura)) {
        alert("Ingrese una temperatura valida");
        return;
    }else{  
    fahrenheit = temperatura * 1.8 + 32;
    kelvin = temperatura + 273.15;
    alert(`La temperatura en Fahrenheit es ${fahrenheit} y la temperatura en Kelvin es ${kelvin}`);
    }
};

conversionTemperatura();
