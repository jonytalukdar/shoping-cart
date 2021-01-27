// first plus button
document.getElementById('plusButton').addEventListener('click', function () {
  plusButton('inputValue');
  totalPhonePrice('phonePrice');
});

// first minus button
document.getElementById('minusButton').addEventListener('click', function () {
  minusButton('inputValue');
  totalPhonePrice('price');
});

// second plus button
document
  .getElementById('secondPlusButton')
  .addEventListener('click', function () {
    plusButton('secondInputValue');
  });

//second minus button
document
  .getElementById('secondMinusButton')
  .addEventListener('click', function () {
    minusButton('secondInputValue');
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

// taking value form price
var price = document.getElementById('phonePrice').innerText;
// price calculation function
function totalPhonePrice() {
  var total = valueCount * price;
  document.getElementById('phonePrice').innerText = total;
}
