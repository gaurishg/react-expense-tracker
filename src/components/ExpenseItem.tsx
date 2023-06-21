import { Expense } from '../App';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem({title, amount, date}: Expense) {
    return (
    <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    </Card>);
}