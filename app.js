// plus button
document.getElementById('plusButton').addEventListener('click', function () {
  valueCount = document.getElementById('inputValue').value;
  valueCount++;
  document.getElementById('inputValue').value = valueCount;

  if (valueCount > 1) {
    document.getElementById('minusButton').removeAttribute('disabled');
    document.getElementById('minusButton').classList.remove('disabled');
  }

  totalPrice();
});

// minus button

document.getElementById('minusButton').addEventListener('click', function () {
  valueCount = document.getElementById('inputValue').value;
  valueCount--;
  document.getElementById('inputValue').value = valueCount;

  if (valueCount == 1) {
    document.getElementById('minusButton').setAttribute('disabled', 'disabled');
  }
  totalPrice();
});

var price = document.getElementById('price').innerText;

// price calculation function

function totalPrice() {
  var total = valueCount * price;
  document.getElementById('price').innerText = total;
}
