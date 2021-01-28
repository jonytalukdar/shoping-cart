function handleProductChange(product, increase) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);
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
}
