// first plus button
document.getElementById('plusButton').addEventListener('click', function () {
  plusButton('inputValue');
  totalPhonePrice();

  const currentPrice = document.getElementById('phonePrice').innerText;
  const totalPrice = document.getElementById('totalPrice');
  const total = currentPrice + totalPrice;
  const totalValue = parseFloat(total);
  document.getElementById('totalPrice').innerText = totalValue;
});

// first minus button
document.getElementById('minusButton').addEventListener('click', function () {
  minusButton('inputValue');
  totalPhonePrice();
});

// second plus button
document
  .getElementById('secondPlusButton')
  .addEventListener('click', function () {
    plusButton('secondInputValue');
    totalCasingPrice();

    if (valueCount > 0) {
      document.getElementById('secondMinusButton').removeAttribute('disabled');
      document.getElementById('secondMinusButton').classList.remove('disabled');
    }
  });

//second minus button
document
  .getElementById('secondMinusButton')
  .addEventListener('click', function () {
    minusButton('secondInputValue');
    totalCasingPrice();

    if (valueCount == 0) {
      document
        .getElementById('secondMinusButton')
        .setAttribute('disabled', 'disabled');
    }
  });

// function for plus button
function plusButton(id) {
  valueCount = document.getElementById(id).value;
  valueCount++;
  document.getElementById(id).value = valueCount;

  if (valueCount > 0) {
    document.getElementById('minusButton').removeAttribute('disabled');
    document.getElementById('minusButton').classList.remove('disabled');
  }
}

// fucntion for minus button
function minusButton(id) {
  valueCount = document.getElementById(id).value;
  valueCount--;
  document.getElementById(id).value = valueCount;

  if (valueCount == 0) {
    document.getElementById('minusButton').setAttribute('disabled', 'disabled');
  }
}

// taking value form phone price
var phonePrice = document.getElementById('phonePrice').innerText;
// price calculation function
function totalPhonePrice() {
  var total = valueCount * phonePrice;
  document.getElementById('phonePrice').innerText = total;
}

var casPrice = document.getElementById('casingPrice').innerText;

function totalCasingPrice() {
  var total = valueCount * casPrice;
  document.getElementById('casingPrice').innerText = total;
}
