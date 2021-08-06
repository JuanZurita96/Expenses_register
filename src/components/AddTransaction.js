/*AddTransaction es el componente que permite añadir una nueva transaccion ya sea un ingreso o un gasto realizado 
    aqui se encuentra el formulario para ingresar los datos*/
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Agregar nueva Transaccion</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Nombre</label>
                <input type="text" 
               value={text} onChange={e => setText(e.target.value)} placeholder="Ingresa el nombre..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Cantidad <br />
                    (Ejemplo: -20 es Gasto | 150 es Ingreso)</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Agregar Transaccion</button>
            </form>
        </>
    )
}
