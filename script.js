let select1 = document.getElementById("fromCurrency");
let select2 = document.getElementById("toCurrency");
let button = document.getElementById("convertBtn");
let currencyValue = document.getElementById("currencyValue");
let result = document.getElementById("result");

fetch("http://127.0.0.1:8000/CurrencyRates.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    data.forEach(function (item) {
      // Create and append option for the first select
      let option1 = document.createElement("option");
      option1.textContent = item.currency;
      option1.value = item.exchange_rate_to_dollar;

      select1.appendChild(option1);

      // Create and append option for the second select
      let option2 = document.createElement("option");
      option2.textContent = item.currency;
      option2.value = item.exchange_rate_to_dollar;

      select2.appendChild(option2);
    });
  });

button.addEventListener("click", function () {
  let value = Number(currencyValue.value); // User input value
  let from = Number(select1.value); // Exchange rate of "from" currency
  let to = Number(select2.value); // Exchange rate of "to" currency
  let toCurrencyName = select2.options[select2.selectedIndex].text;

  // Validate user input
  if (!value || !from || !to) {
    result.innerText = "Please enter a valid amount and select currencies.";
    return;
  }

  // Perform the conversion
  let convertedValue = (value * to) / from;
  convertedValue = convertedValue.toFixed(4);

  // Display the result
  result.innerText = `Converted Value: ${convertedValue} ${toCurrencyName}`;
});
