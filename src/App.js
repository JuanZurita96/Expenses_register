/*App.js donde se junta el llamado a componentes y, en este caso, el Provider dado por Context 
  se importan los componentes y modulos necesarios*/
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {List} from './components/List';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <List />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
export default App;
