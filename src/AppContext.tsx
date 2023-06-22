import { ReactNode, createContext, useEffect, useState } from "react";

export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: Date;
  };

class AppContextInterface {
    constructor(private expenses: Expense[] = [], public filterYear: number = 2023, public isFilterOn: boolean = false) {}

    addExpense(exp: Expense) {
        this.expenses = [...this.expenses, exp];
    }

    getExpenses() {
        if (!this.isFilterOn)
            return this.expenses.slice();
        return this.expenses.filter(exp => exp.date.getFullYear() === this.filterYear);
    }

    updateFilter(filterYear: string) {
        if (filterYear === '0')
        {
            this.isFilterOn = false;
            return;
        }
        console.log('Setting filter');
        this.filterYear = +filterYear;
        this.isFilterOn = true;
    }

    updateCtx: React.Dispatch<React.SetStateAction<AppContextInterface>> = () => {

    }
}

const defaultValue: AppContextInterface = new AppContextInterface(
    [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ]
);

const appCtx = createContext(defaultValue);

export function AppContextProvider({children}: {children: ReactNode}) {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        value.updateCtx = setValue;
    }, []);
    return (
        <appCtx.Provider value={value}>
            {children}
        </appCtx.Provider>
    );
}

export function useAppContext() {
    return appCtx;
}