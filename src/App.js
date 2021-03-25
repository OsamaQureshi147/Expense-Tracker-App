import './App.css';
import Balance from './components/Balance';
import { AccountSummary } from "./components/AccountSummary";
import { TransactForm } from "./components/TransactForm";
import { History } from "./components/History";
import { TransProvider } from "./transContext";

function App() {

  return (
    <TransProvider>
      <div className='container'>
        <h1 className='exp-heading'>Expense Tracker App</h1>
        <Balance />
        <AccountSummary />

        <h4>History</h4>
        <hr />
        <History />

        <h4>Add new Transactions</h4>
        <hr />
        <TransactForm />
      </div>
    </TransProvider>
  );
}

export default App;
