// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 : get the deposit amount from the deposit input field 
    // For input field use .value to the value inside the input field

    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = depositField.value; // type of string so convert the parseFloat()

    // step 3: get the current deposit  total
    // for non-input (element, textarea, other than input ) use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-balance');
    const previousDepositTotal = depositTotalElement.innerText; // type of string so convert the parseFloat
    // step 4: add number to set the total deposit
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;
    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step-6: calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount)
    // set the balance total balace total
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear
    depositField.value = "";

})

/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the input field
3. add the total value input field + get withdraw balance

*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step -1 : get withdraw balance as input .value
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawField.value;
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number')
    }
    withdrawField.value = "";
    // step -2: get withdraw balance as innerText
    const withdrawTotalElement = document.getElementById('withdraw-balance');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    // step -3:
    
    // step -4:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have not enough Taka');
        return;
    }
    const currentWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step -5:
    const currentBalanceTotal = previousBalanceTotal - parseFloat(newWithdrawAmount);
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // input field clear 
    
})