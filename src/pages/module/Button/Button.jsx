import React from 'react';
import { Link } from 'react-router-dom';
import style from './Button.module.css';

const Button = ({ variant = 'btn', link}) => {

    return (
        <Link to={link} className={style.btn}>{variant}</Link>
    );
};

export default Button;