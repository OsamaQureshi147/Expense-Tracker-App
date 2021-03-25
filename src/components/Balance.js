import React, { useContext } from 'react'
import { TransContext } from "../transContext";


export default function Balance() {
    const { transactions } = useContext(TransContext);

    const getBalance = (transactions) => {
        let balance = 0;
        for (let x = 0; x < transactions.length; x++) {
            balance += parseInt(transactions[x].amount);
        }
        return balance;
    }

    return (
        <div className='balance-container'>
            <h4>Balance</h4>
            <h1>{getBalance(transactions)}</h1>
        </div>
    )
}
