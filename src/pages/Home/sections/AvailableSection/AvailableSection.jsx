import React from 'react';
import Section from '../../../module/Section/Section';
import Button from '../../../module/Button/Button';
import ListContainer from '../../../module/ListContainer/ListContainer';
import AvailableItem from './AvailableItem/AvailableItem';
import one from './img/item_1.png';
import two from './img/item_2.png';
import three from './img/item_3.png';

const AvailableSection = () => {

    const available_list = [
        {
            id: 0,
            src: one,
            title: "Vase one",
            size: '18,5x18x18см',
            price: '216'
        },
        {
            id: 1,
            src: two,
            title: "Vase two",
            size: '17,1x16,5x15cm',
            price: '160'
        },
        {
            id: 2,
            src: three,
            title: 'Vase three',
            size: '23x19x15сm',
            price: '250'
        },
    ];

    let elements = [];

    available_list.forEach((element) => {
        elements.push(<AvailableItem key={element.id} {...element} />)
    })

    return (
        <Section content={
            <>
                <h2 className='title'>Available works </h2>
                <ListContainer content={elements} />
                <Button variant='view all' link={'/oxygen/available-works'}/>
            </>
        } />
    );
};

export default AvailableSection;