import React from 'react';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer';
import Work from './Work/Work';
import one from './img/item_1.png';
import two from './img/item_2.png';
import three from './img/item_3.png';
import four from './img/item_4.png';
import five from './img/item_5.png';
import six from './img/item_6.png';
import seven from './img/item_7.png';
import eight from './img/item_8.png';
import nine from './img/item_9.png';
import './Works.css';

const Works = () => {

    const works_list = [
        {
            id: 0,
            src: one,
            title: 'Item #1',
            price: '216',
            size: '18,5x18см'
        },
        {
            id: 1,
            src: two,
            title: 'Item #2',
            price: '160',
            size: '17,1x16,5x15cm'
        },
        {
            id: 2,
            src: three,
            title: 'Item #3',
            price: '250',
            size: '23x19x15сm'
        },
        {
            id: 3,
            src: four,
            title: 'Item #4',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
        {
            id: 4,
            src: five,
            title: 'Item #5',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
        {
            id: 5,
            src: six,
            title: 'Item #6',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
        {
            id: 6,
            src: seven,
            title: 'Item #7',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
        {
            id: 7,
            src: eight,
            title: 'Item #8',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
        {
            id: 8,
            src: nine,
            title: 'Item #9',
            price: '260',
            size: '22 x 20,5 x 20см'
        },
    ];

    let elements = [];

    works_list.forEach((element) => {
        elements.push(<Work key={element.id} {...element}/>)
    });

    return (
        <Section content={
            <>
                <h1 className='page-title'>works</h1>
                <ListContainer content={elements}/>
            </>
        } />
    );
};

export default Works;