import React from 'react';
import './OrderItem.css';
import Button from '../../module/Button/Button';

const OrderItem = ( props ) => {
    return (
        <div className='order-item row'>
            <div className='order-item__product column'>
                <img src={props.src} alt={props.title} className='order-item__img' />
                <p className='order-item__title'><strong>{props.title}</strong></p>
                <p className='description'>{props.price}$</p>
            </div>
            <div className='order-item__counter column'>
                <div className='counter row'>
                    <button className='order-item__btn'>-</button>
                    <p className='description'>{props.counter}</p>
                    <button className='order-item__btn'>+</button>
                </div>
                <button className='order-item__btn'>remove</button>
            </div>
        </div>
    );
};

export default OrderItem;