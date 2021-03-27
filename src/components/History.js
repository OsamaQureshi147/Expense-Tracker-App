import React, { useContext } from 'react'
import { TransContext } from "../transContext";



export const History = () => {
    let { transactions } = useContext(TransContext)



    return (
        <ul className='trans-history'>
            {transactions.map((transObj, index) => {
                return (
                    <li key={index}>
                        <div>
                            <button className='btn-delete'>X </button>
                            <span>{transObj.desc}</span>
                        </div>
                        <span>${transObj.amount}</span>
                    </li>
                );
            })}
        </ul>

    );
}
