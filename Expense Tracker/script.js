var expenses = [];

function addExpense() {
    var description = document.getElementById('description').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please enter valid description and amount.');
        return;
    }

    expenses.push({ description: description, amount: amount });
    updateExpenses();
}

function updateExpenses() {
    var expenseList = document.getElementById('expenseList');
    var totalExpense = document.getElementById('totalExpense');
    
    expenseList.innerHTML = '';
    var total = 0;
    expenses.forEach(function(expense) {
        var li = document.createElement('li');
        li.textContent = expense.description + ': $' + expense.amount.toFixed(2);
        expenseList.appendChild(li);
        total += expense.amount;
    });

    totalExpense.textContent = '$' + total.toFixed(2);
}
