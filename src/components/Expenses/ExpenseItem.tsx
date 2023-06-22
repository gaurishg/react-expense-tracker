import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { Expense } from '../../AppContext';

export default function ExpenseItem({title, amount, date}: Expense) {
    const [appTitle, setAppTitle] = useState(title);

    const clickHandler = () => {
        setAppTitle('Updated');
    }

    return (
    <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{appTitle}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>);
}