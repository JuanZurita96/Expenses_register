//El manejo de las transacciones para su comportamiento y eliminacion
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({value}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sing = value.amount < 0 ? '-' : '+';
    return (
        <li className={value.amount < 0 ? 'minus' : 'plus'}>
           {value.text} <span>{sing}${Math.abs(value.amount)}</span>
           <button onClick={() => deleteTransaction(value.id)} className="delete-btn">x</button>
        </li>
    )
}