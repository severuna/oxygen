import React from 'react';
import Button from '../../../module/Button/Button';
import Section from '../../../module/Section/Section';
import ListContainer from '../../../module/ListContainer/ListContainer';
import WorkItem from './WorkItem/WorkItem';
import accessories from './img/Accessories.png';
import vases from './img/vases.png';
import biofireplaces from './img/Biofireplaces.png';
import aroma_lamps from './img/aroma_lamps.png';
import light from './img/light.png';
import interior from './img/interior.png';

const WorksSection = () => {

    const works_list = [
        {
            id: 0,
            src: vases,
            title: 'vases'
        },
        {
            id: 1,
            src: accessories,
            title: 'accessories'
        },
        {
            id: 2,
            src: light,
            title: 'light'
        },
        {
            id: 3,
            src: aroma_lamps,
            title: 'aroma lamps'
        },
        {
            id: 4,
            src: biofireplaces,
            title: 'biofireplaces'
        },
        {
            id: 5,
            src: interior,
            title: 'in the interior'
        },
    ];

    let elements = [];
    
    works_list.forEach((element) => {
        elements.push(<WorkItem key={element.id} {...element} />)
    })

    return (
        <Section content={
            <>
                <h2 className='title'>Works</h2>
                <ListContainer content={
                    elements
                } />
                <Button variant='view more' link={'/oxygen/works'} />
            </>
        } />
    );
};

export default WorksSection;