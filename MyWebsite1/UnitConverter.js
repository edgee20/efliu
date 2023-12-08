function convertTemperature() {
    var fahrenheit = document.getElementById('temperature').value;
    var celsius = (fahrenheit - 32) * (5 / 9);
    document.getElementById('result').innerHTML = fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius";
  }

  function convertLength() {
    var meters = document.getElementById('length').value;
    var feet = meters * 3.28084;
    document.getElementById('result').innerHTML = meters + " Meters is equal to " + feet.toFixed(2) + " Feet";
  }

  function convertToFahrenheit() {
    var celsius = document.getElementById('temperature').value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').innerHTML = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit";
  }

  function convertToMeters() {
    var feet = document.getElementById('length').value;
    var meters = feet / 3.28084;
    document.getElementById('result').innerHTML = feet + " Feet is equal to " + meters.toFixed(2) + " Meters";
  }