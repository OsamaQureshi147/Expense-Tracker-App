import React, { useState } from 'react'

export const TransactForm = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleAddition = (e) => {
        e.preventDefault();
        console.log(description, amount)
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
