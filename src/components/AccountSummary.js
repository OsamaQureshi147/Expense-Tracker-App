import React, { useContext } from 'react';
import '../App.css';
import { TransContext } from "../transContext";


export const AccountSummary = () => {
    let { transactions } = useContext(TransContext);

    const getIncome = (transactions) => {
        let income = 0;
        for (let x = 0; x < transactions.length; x++) {
            if (transactions[x].amount > 0) {
                income += parseInt(transactions[x].amount);
            }
        }
        return income;
    }

    const getExpense = (transactions) => {
        let expense = 0;
        for (let x = 0; x < transactions.length; x++) {
            if (transactions[x].amount < 0) {
                expense += parseInt(transactions[x].amount);
            }
        }
        return expense;
    }


    return (
        <div className='expense-income-container'>
            <div>
                <h3>
                    INCOME
                </h3>
                <h4>
                    {getIncome(transactions)}
                </h4>
            </div>
            <div>
                <h3>
                    EXPENSE
                </h3>
                <h4>
                    {getExpense(transactions)}
                </h4>
            </div>
        </div>
    )
}
