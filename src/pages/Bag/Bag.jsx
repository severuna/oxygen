import React from 'react';
import './Bag.css';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer'
import OrderItem from './OrderItem/OrderItem';
import { useSelector } from 'react-redux';

const Bag = () => {

    const ORDER_LIST = useSelector((state) => state.orders);

    let elements = [];

    if(Object.keys(ORDER_LIST).length === 0 || ORDER_LIST.orders.length === 0) {

        elements = <h2 className='title'>Your order list is empty.</h2>

    } else {

        ORDER_LIST.orders.forEach((element) =>  elements.push(<OrderItem key={element.id + Math.random()} {...element}/>)

        );
    }

    return (
        <Section content={ 
            <ListContainer content={elements}/>
            }
        />
    );
};

export default Bag;