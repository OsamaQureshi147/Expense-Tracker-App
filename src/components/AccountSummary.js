import React from 'react';
import '../App.css';

export const AccountSummary = () => {
    return (
        <div className='expense-income-container'>
            <div>
                <h4>
                    INCOME
                </h4>
                <h5>
                    $500.00
                </h5>
            </div>
            <div>
                <h4>
                    EXPENSE
                </h4>
                <h5>
                    $240.00
                </h5>
            </div>
        </div>
    )
}
