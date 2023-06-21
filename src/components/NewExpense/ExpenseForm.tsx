import "./ExpenseForm.css";

export default function ExpenseForm() {
    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title-input">Title</label>
                <input type="text" id="title-input" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount-input">Amount</label>
                <input type="number" id="amount-input" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date-input">Amount</label>
                <input type="date" id="date-input" min="2019-01-01" step="2023-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
}