// plus button
document.getElementById('plusButton').addEventListener('click', function () {
  plusButon('inputValue');

  totalPrice();
});

function plusButon(id) {
  valueCount = document.getElementById(id).value;
  valueCount++;
  document.getElementById(id).value = valueCount;

  if (valueCount > 0) {
    document.getElementById('minusButton').removeAttribute('disabled');
    document.getElementById('minusButton').classList.remove('disabled');
  }
}

// minus button

document.getElementById('minusButton').addEventListener('click', function () {
  valueCount = document.getElementById('inputValue').value;
  valueCount--;
  document.getElementById('inputValue').value = valueCount;

  if (valueCount == 0) {
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
