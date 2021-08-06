//La funcion reducer para recibir y ejecutar las acciones
export default function reducer (state, action) {
    switch(action.type){
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(value => value.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
        return state;
    }
}