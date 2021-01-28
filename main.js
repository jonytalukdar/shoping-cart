function handlePhoneChange(increase) {
  const phoneInput = document.getElementById('phone-count');
  const phoneCount = parseInt(phoneInput.value);
  //   const phoneNewCount = phoneCount - 1;
  let phoneNewCount = 0;
  if (increase == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (increase == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }
  phoneInput.value = phoneNewCount;

  const phoneTotal = phoneNewCount * 1219;
  document.getElementById('phone-total').innerText = phoneTotal;
}

function handleProductChange(isIncrease, count, total) {
  const caseInput = document.getElementById(count);
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = 0;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 59;
  document.getElementById(total).innerText = caseTotal;
}
