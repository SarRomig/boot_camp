window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  const inputs  = { amount: 250000, years: 15, rate: 7.5 };
  const amountInput = document.getElementById("loan-amount");
  amountInput.value = inputs.amount;
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = inputs.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = inputs.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentInputs = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentInputs));
}

// Given an object of values (a value has amount, years and rate ), (the return of getCurrentUIValues)
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places. Use to Fixed for 2 decimal places! monthly payment = 𝑃×𝑖1−(1+𝑖)−𝑛

function calculateMonthlyPayment(input) {
  let monthlyRate = (input.rate / 100) / 12;
  let n = Math.floor(input.years * 12);
  let monthlyCalculation = (monthlyRate * input.amount) / 
  (1-Math.pow((1 + monthlyRate), -n));
  return monthlyCalculation.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector("#monthly-payment");
  monthlyPayment.innerHTML = `$${monthly}`;
}
