import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './img/logo.svg';
import bag from './img/bag.svg';

const NavBar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);

    return (
        <header className='header row'>
            <Link to='oxygen' className='logo'>
                <img src={logo} alt='Oxygen logo' className='logo-img' />
            </Link>
            <nav className='header-nav row'>
                <Link to='oxygen/about' className='logo'>About us</Link>
                <Link to='oxygen/works' className='logo'>Works</Link>
                <Link to='oxygen/interior' className='logo'>interior</Link>
                <Link to='oxygen/available-works' className='logo'>Available works</Link>
                <Link to='oxygen/activities' className='logo'>Activities</Link>
                <Link to='oxygen/contacts' className='logo'>Contacts</Link>
            </nav>
            <Link to='oxygen/bag' className='bag-logo'>
                <img src={bag} alt='bag logo' className='bag-logo__img' />
            </Link>
        </header>
    );
};

export default NavBar;