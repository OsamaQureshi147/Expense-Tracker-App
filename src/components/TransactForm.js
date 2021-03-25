import React, { useState, useContext } from 'react'
import { TransContext } from "../transContext";


export const TransactForm = () => {
    let { addTransaction } = useContext(TransContext)
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleAddition = (e) => {
        e.preventDefault();
        if (Number(amount) === 0) {
            alert('Enter non-zero value!');
            return false;
        }
        addTransaction({
            amount: Number(amount),
            desc: description,
        })
    }

    return (
        <form onSubmit={handleAddition}>
            <label>
                Enter Description <br />
                <input className='trans-input' onChange={(e) => setDescription(e.target.value)} type='text' required />
            </label>
            <br />
            <label>
                Enter Amount    <br />
                <input className='trans-input' onChange={(e) => setAmount(e.target.value)} type='number' required />
            </label>
            <br />
            <input className='add-btn' type='submit' value='Add Transaction' />
        </form>
    )
}
