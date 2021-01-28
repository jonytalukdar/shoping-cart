function handleProductChange(product, increase) {
  const productInput = document.getElementById(product + '-count');
  const productCount = getInputValue(product);
  let productNewCount = 0;
  // condition for increase decrease
  if (increase == true) {
    productNewCount = productCount + 1;
  }
  if (increase == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;

  // condition for price
  let productTotal = 0;
  if (product == 'phone') {
    productTotal = productNewCount * 1219;
  }
  if (product == 'case') {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + '-total').innerText = productTotal;

  calculalateTotal();
}

function calculalateTotal() {
  const phoneCount = getInputValue('phone');
  const caseCount = getInputValue('case');

  const totalPrice = phoneCount * 1259 + caseCount * 59;
  document.getElementById('total-price').innerText = totalPrice;

  const tax = totalPrice * 0.1;
  const taxAmount = Math.round(tax);
  document.getElementById('tax-amount').innerText = taxAmount;

  const grandTotal = Math.round(totalPrice + tax);
  document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);

  return productCount;
}
