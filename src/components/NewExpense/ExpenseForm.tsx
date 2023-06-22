import { ChangeEventHandler, useState } from "react";
import "./ExpenseForm.css";

function formatDate(date: Date) {
    const year = ('0000'+date.getFullYear()).slice(-4);
    const month = ('00' + date.getMonth()).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
}

export default function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState<Date>(new Date());

    const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAmount(event.target.valueAsNumber);
    }

    const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setDate(event.target.valueAsDate??(new Date()));
    }

    const submitHandler: ChangeEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const expenseData: {title: string; amount: number; date: Date} = {title, amount, date};
        console.log(expenseData);
        setTitle('');
        setAmount(0);
        setDate(new Date());
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title-input">Title</label>
                <input type="text" id="title-input" onChange={titleChangeHandler} value={title}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount-input">Amount</label>
                <input type="number" id="amount-input" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date-input">Amount</label>
                <input type="date" id="date-input" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} value={formatDate(date)}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
}