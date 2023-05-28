const INITIAL_STATE = {
    orders: Array(0)
};

const orderReducer = ( state = INITIAL_STATE, action) => {
    console.log(state);
    console.log(state.orders.length);

    const uniqElem = ( array, elem ) => {
        if(array.length === 0 ) {
            array.push({...elem, counter: 1})
        } else {
            array.forEach((element) => {
                let k = Number(elem.id) === Number(element.id);
                switch(k) {
                    case true: {
                        return {...element, counter: element.counter++}
                    }
                    case false: {
                        return array.push({...elem, counter: 1})
                    }
                    default: {
                    break;}
                } 
            })
        };
    
        let uniq = array.reduce((acc, city) => {
            if (acc.map[city.id])
            return acc;
        
            acc.map[city.id] = true; 
            acc.uniq.push(city);
            return acc; 
        }, {
            map: {},
            uniq: [] 
        })
        .uniq
        return uniq
    }


    switch (action.type) {

        case 'add': {
            // return {
            //     ...state, 
            //     orders: state.orders ? 
            //         [
            //             ...state.orders,
            //             state.orders.filter((element) => Number(element.id) === Number(action.payload.id) ? element.counter++ : action.payload),
            //             action.payload
            //         ]
            //         : 
            //         [action.payload]
            // }
            return {orders: uniqElem(state.orders, action.payload)}
        }

        case 'remove': {
            return {orders: state.orders.filter((element) => Number(element.id) !== Number(action.payload.id))};
        }

        default: {
            return state
        }

    }
}

export default orderReducer;