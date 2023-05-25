const setOrderAction = ( order ) => {
    return {
        type: 'add', 
        payload: order
    };
};

export default setOrderAction;