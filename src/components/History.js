import React, { useContext } from 'react'
import { TransContext } from "../transContext";



export const History = () => {
    let { transactions } = useContext(TransContext)


    return (
        <ul className='trans-history'>
            {transactions.map((transObj, index) => {
                return (
                    <li key={index}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                );
            })}
        </ul>

    );
}
