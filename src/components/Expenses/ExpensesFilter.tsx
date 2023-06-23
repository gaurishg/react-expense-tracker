import { ChangeEventHandler, useContext } from 'react';
import './ExpensesFilter.css';
import { useAppContext } from '../../AppContext';

const ExpensesFilter = () => {
    const ctx = useContext(useAppContext());
    const dropdownChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
        console.log(event.target.value);
        ctx.updateFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler}>
                    <option value='0'>Select</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
