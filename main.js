document.getElementById('case-increase').addEventListener('click', function () {
  const caseInput = document.getElementById('case-count');
  const caseCount = parseFloat(caseInput.value);
  const caseNewCount = caseCount + 1;
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 59;
  document.getElementById('case-total').innerText = caseTotal;
});
