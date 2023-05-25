import React from 'react';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer';
import Work from './Work/Work';
import './Works.css';
import { useSelector } from 'react-redux';

const Works = () => {

    const WORKS_LIST = useSelector((state) => state.works);

    let elements = [];

    WORKS_LIST.forEach((element) => {
        elements.push(<Work key={element.id + Math.random()} {...element}/>)
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