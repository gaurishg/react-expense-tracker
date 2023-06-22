import { useContext, useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import { useAppContext } from "../../AppContext";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses() {
    const ctx = useContext(useAppContext());
    const [expenses, setExpenses] = useState(ctx.getExpenses());
    useEffect(() => {
      setExpenses(ctx.getExpenses());
    }, [ctx.isFilterOn, ctx.filterYear]);
    
    return (<Card className="expenses">
      <ExpensesFilter />
      {expenses.map(exp => <ExpenseItem key={exp.id} {...exp}/>)}
    </Card>);
}