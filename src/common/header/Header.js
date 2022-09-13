import React from 'react';
import './Header.css';
import HeaderLogo from '../../assets/logo.svg';

export const Header = ({ heading }) => {
    return (
    <>
        <div className='header'>
            {/* Header */}
            <img src={HeaderLogo} alt='Header Animation Logo' />
        </div>

        <div>
            <span><h3>{heading}</h3></span>
        </div>
    </>
    )
}
export default Header;