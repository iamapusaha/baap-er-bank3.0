document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmmount = parseFloat(depositFieldString)
    console.log(newDepositAmmount);
    depositField.value = '';

    if (isNaN(newDepositAmmount)) {
        alert('please input a valid number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalElementString = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(depositTotalElementString);

    const currentDepositTotal = preDepositTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const PreBalanceTotal = parseFloat(balanceTotalString);

    const currentBalanceTotal = PreBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})