import React from 'react';
import './Interior.css';
import ListContainer from '../module/ListContainer/ListContainer';
import InteriorItem from './InteriorItem/InteriorItem';
import Section from '../module/Section/Section';
import one from './img/interior_1.png';
import two from './img/interior_2.png';
import three from './img/interior_3.png';
import four from './img/interior_4.png';
import five from './img/interior_5.png';
import six from './img/interior_6.png';
import seven from './img/interior_7.png';
import eight from './img/interior_8.png';

const Interior = () => {

    const interior_list = [
        {
            id: 0,
            title: 'Vase 1',
            src: one
        },
        {
            id: 1,
            title: 'Vase 2',
            src: two
        },
        {
            id: 2,
            title: 'Vase 3',
            src: three
        },
        {
            id: 3,
            title: 'Vase 4',
            src: four
        },
        {
            id: 4,
            title: 'Vase 5',
            src: five
        },
        {
            id: 5,
            title: 'Vase 6',
            src: six
        },
        {
            id: 6,
            title: 'Vase 7',
            src: seven
        },
        {
            id: 7,
            title: 'Vase 8',
            src: eight
        }
    ];

    let elements = [];

    interior_list.forEach((element) => {
        elements.push(<InteriorItem key={element.id} {...element} />)
    });

    return (
        <Section content={
            <>
            <div className='interior-head row'>
                <h1 className="page-title">In the interior</h1>
                <p className='description'>Ukrainian designers show the spirit of freedom and courage, the characteristics of which, among others, are the main ones. Their research delves into meanings and meanings to find new combinations of familiar natural materials and craft techniques.</p>
            </div>
            <ListContainer content={elements} />
            </>
        } />
    );
};

export default Interior;