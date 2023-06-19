import { Expense } from '../App';
import './ExpenseItem.css';

export default function ExpenseItem({title, amount, date}: Expense) {
    return (
    <div className="expense-item">
        <div>{date.toDateString()}</div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    </div>);
}