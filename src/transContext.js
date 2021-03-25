import { createContext, useReducer } from "react"
import transReducer from "./transReducer";

const initTransactions = [];

export const TransContext = createContext(initTransactions);

export const TransProvider = ({ children }) => {
    let [state, dispatch] = useReducer(transReducer, initTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return (
        <TransContext.Provider value={{
            transactions: state,
            addTransaction
        }}
        >
            {children}
        </TransContext.Provider>
    );
}