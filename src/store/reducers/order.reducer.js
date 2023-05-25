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

        default: {
            return state
        }

    }
}

export default orderReducer;