
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip p ercent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}


//Step Three of Exercise: takes in a table row element and appends a new td element with value of X; when clicked, parent tr is removed from the dom
appendDeleteBtn(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerHTML = "X";
  newTd.classList.add("deleteBtn");
  newTd.addEventListener("click", function (e) {
    //remove parent tr
    let tr = e.target.closest('tr');
    tr.remove();
    updateServerTable();
  })
  tr.append(newTd);
}
