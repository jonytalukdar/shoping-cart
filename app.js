// plus button
document.getElementById('plusButton').addEventListener('click', function () {
  // getting value form input
  valueCount = document.getElementById('inputValue').value;
  // increament value of input
  valueCount++;
  // settings increament input value
  document.getElementById('inputValue').value = valueCount;

  if (valueCount > 1) {
    document.getElementById('minusButton').removeAttribute('disabled');
    document.getElementById('minusButton').classList.remove('disabled');
  }

  totalPrice();
});

// minus button

document.getElementById('minusButton').addEventListener('click', function () {
  // getting value form input
  valueCount = document.getElementById('inputValue').value;
  // increament value of input
  valueCount--;
  // settings increament input value
  document.getElementById('inputValue').value = valueCount;

  if (valueCount == 1) {
    document.getElementById('minusButton').setAttribute('disabled', 'disabled');
  }
  totalPrice();
});

// taking price in variable

var price = document.getElementById('price').innerText;

// price calculation function

function totalPrice() {
  var total = valueCount * price;
  document.getElementById('price').innerText = total;
}
