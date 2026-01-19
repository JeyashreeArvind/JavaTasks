// budget.js
const createBudgetManager = () => {
    const state = {
        incomes: [],
        expenses: []
    };

    const addIncome = (amount) => {
        if (amount > 0) {
            state.incomes.push({ id: Date.now(), amount: amount });
        }
    };

    const addExpense = (amount) => {
        if (amount > 0) {
            state.expenses.push({ id: Date.now(), amount: amount });
        }
    };

    const getBalance = () => {
        const totalIncome = state.incomes.reduce((sum, income) => sum + income.amount, 0);
        const totalExpense = state.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const balance = totalIncome - totalExpense;

        return {
            totalIncome,
            totalExpense,
            balance
        };
    };

    // Return only the public functions
    return {
        addIncome,
        addExpense,
        getBalance
    };
};

// Create a single instance of the budget manager
const budgetManagerInstance = createBudgetManager();

// Export the public functions
export const addIncome = budgetManagerInstance.addIncome;
export const addExpense = budgetManagerInstance.addExpense;
export const getBalance = budgetManagerInstance.getBalance;
