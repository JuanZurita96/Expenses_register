//La lista de las transacciones realizadas
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Transaction} from './Transaction';

export const List = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>Transacciones</h3>
            <ul className="list">
                {transactions.map(value => (<Transaction key={value.id} value={value}/>))}                
            </ul>
        </>
    )
}
