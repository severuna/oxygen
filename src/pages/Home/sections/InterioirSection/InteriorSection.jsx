import React from 'react';
import Button from '../../../module/Button/Button';
import interior_banner from './interior-banner.png';
import './InteriorSection.css';

const InteriorSection = () => {
    return (
        <section className='home-interior column'>
            <h2 className='title'>In the interior</h2>
            <div className='home-interior__description row'>
                <Button variant='view more' />
                <p className='description'>Ukrainian designers show the spirit of freedom and courage, the characteristics of which, among others, are the main ones. Their research delves into meanings and meanings to find new combinations of familiar natural materials and craft techniques. </p>
            </div>
            <img src={interior_banner} alt='interior_banner' className='home-interior__media' />
        </section>
    );
};

export default InteriorSection;