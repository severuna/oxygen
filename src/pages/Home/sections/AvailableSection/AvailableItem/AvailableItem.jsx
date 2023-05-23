import React from 'react';
import Button from '../../../../module/Button/Button';
import './AvailableItem.css';

const AvailableItem = ( props ) => {
    return (
        <div className='available-item column'>
            <img src={props.src} alt={props.title} className='available-item__img' />
            <h2 className='available-item__title'>{props.title}</h2>
            <p className='available-item__size'>{props.size}</p>
            <div className='available-item__details row'>
                <p className='available-item__details-price'>{props.price}$</p>
                <Button variant={'see details'} />
            </div>
        </div>
    );
};

export default AvailableItem;