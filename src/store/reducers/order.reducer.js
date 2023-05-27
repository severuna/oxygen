const INITIAL_STATE = {};

const orderReducer = ( state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'add': {
            return {
                ...state, 
                orders: state.orders ? 
                    [
                        ...state.orders,
                        action.payload
                    ]
                    : 
                    [action.payload]
            }
        }

        case 'remove': {
            return {orders: state.orders.filter((element) => element.id !== action.payload.id)};
        }

        default: {
            return state
        }

    }
}

export default orderReducer;