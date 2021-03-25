import React, { useContext } from 'react'
import { TransContext } from "../transContext";



export const History = () => {
    let { transactions } = useContext(TransContext)


    return (
        <ul className='trans-history'>
            {transactions.map((transObj, index) => {
                return (
                    <li key={index}>
                        <span>{transObj.amount}</span>
                        <span>{transObj.desc}</span>
                    </li>
                );
            })}
        </ul>

    );
}
