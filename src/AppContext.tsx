import { ReactNode, createContext, useEffect, useState } from "react";

export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: Date;
  };

interface AppContextInterface {
    expenses: Expense[];
    filterYear: number;
    isFilterOn: boolean;
    addExpense: (exp: Expense) => void;
    getExpenses: () => Expense[];
    updateFilter: (year: string) => void;
}

const defaultValue: AppContextInterface = {
    expenses: [
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
      ],

      filterYear: 0,
      isFilterOn: false,
      addExpense(exp) {},
      getExpenses() {return [];},
      updateFilter(year) {},
};

const appCtx = createContext(defaultValue);

export function AppContextProvider({children}: {children: ReactNode}) {
    const [expenses, setExpenses] = useState(defaultValue.expenses);
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [filterYear, setFilterYear] = useState(0);

    function addExpense(exp: Expense) {
        setExpenses(prev => [...prev, exp]);
    }

    function getExpenses() {
        return expenses.filter(exp => (!isFilterOn || (isFilterOn && exp.date.getFullYear() === filterYear)));
    }

    function updateFilter(year: string) {
        if (year === '0') {
            setIsFilterOn(false);
        } else {
            setIsFilterOn(true);
        }
        setFilterYear(+year);
    }
    return (
        <appCtx.Provider value={{expenses, isFilterOn, filterYear, addExpense, getExpenses, updateFilter}}>
            {children}
        </appCtx.Provider>
    );
}

export function useAppContext() {
    return appCtx;
}