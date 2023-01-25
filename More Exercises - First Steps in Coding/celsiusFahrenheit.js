function celsiusFahrenheit(input) {

    let celsius = Number(input[0]);
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(fahrenheit.toFixed(2));
}

celsiusFahrenheit(['-5.5'])

// (0 °C × 9/5) + 32 = 32 °F
