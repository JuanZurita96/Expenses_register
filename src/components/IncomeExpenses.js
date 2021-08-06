//Gastos e Ingresos determina si la cantidad ingresada pertenece a un ingreso de dinero o a un gasto
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(value => value.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Ingreso</h4>
                    <p className="money plus">{income}</p>
                </div>
                <div>
                    <h4>Gasto</h4>
                    <p className="money minus">{expense}</p>
                </div>
            </div>
        </>
    )
}
