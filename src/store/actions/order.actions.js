export const setOrderAction = ( order ) => {
    return {
        type: 'add', 
        payload: order
    };
};

export const removeOrderAction = ( order ) => {
    return {
        type: 'remove', 
        payload: order
    };
};
