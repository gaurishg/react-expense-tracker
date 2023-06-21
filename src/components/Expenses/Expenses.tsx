import { Expense } from "../../App";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses({expenses}: {expenses: Expense[]}) {
    return (<Card className="expenses">
      {expenses.map((exp, index) => <ExpenseItem key={index} {...exp}/>)}
    </Card>);
}