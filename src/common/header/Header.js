import React from 'react';
import './Header.css';
import HeaderLogo from '../../assets/logo.svg';

export const Header = () => {
    return (
        <div className='header'>
            {/* Header */}
            <img src={HeaderLogo} alt='Header Animation Logo' />
        </div>
    )
}
export default Header;