// main.js
import { addIncome, addExpense, getBalance } from './budget.js';

const amountInput = document.getElementById('amount-input');
const addIncomeBtn = document.getElementById('add-income-btn');
const addExpenseBtn = document.getElementById('add-expense-btn');
const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const balanceEl = document.getElementById('balance');

const updateUI = () => {
    const { totalIncome, totalExpense, balance } = getBalance();

    // Format numbers as currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    totalIncomeEl.textContent = formatter.format(totalIncome);
    totalExpenseEl.textContent = formatter.format(totalExpense);
    balanceEl.textContent = formatter.format(balance);
};

const handleTransaction = (type) => {
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        if (type === 'income') {
            addIncome(amount);
        } else if (type === 'expense') {
            addExpense(amount);
        }
        amountInput.value = ''; // Clear input field
        updateUI();
    } else {
        alert('Please enter a valid positive amount.');
    }
};

addIncomeBtn.addEventListener('click', () => handleTransaction('income'));
addExpenseBtn.addEventListener('click', () => handleTransaction('expense'));

// Initial UI update
updateUI();
