document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please input valid number');
        return;
    }

    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawElementString = withdrawElement.innerText;
    const preWithdrawAmount = parseFloat(withdrawElementString);

    const currnetWithdrawTotal = preWithdrawAmount + newWithdrawAmount;


    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const PreBalanceTotalAmount = parseFloat(balanceTotalElementString);

    const currentBalanceTotal = PreBalanceTotalAmount - newWithdrawAmount;

    if (PreBalanceTotalAmount < newWithdrawAmount) {
        alert('baap er bank a ato tk nai ra vai!');
        return;
    }
    withdrawElement.innerText = currnetWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
})