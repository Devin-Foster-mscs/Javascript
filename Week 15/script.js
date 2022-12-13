// Select the input element where the user enters a Fahrenheit temperature
const fahrenheitInput = $('#fahrenheit-input');

// Select the element where we will display the converted temperature
const celsiusOutput = $('#celsius-output');

// Define a function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

// Listen for changes to the Fahrenheit input and update the Celsius output
fahrenheitInput.on('input', function() {
  const fahrenheit = $(this).val();
  const celsius = convertFahrenheitToCelsius(fahrenheit);
  celsiusOutput.text(celsius);
});
