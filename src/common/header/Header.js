import React from 'react';
import './Header.css';
import HeaderLogo from '../../assets/logo.svg';
import { Button } from '@mui/material'
export const Header = ({ heading, bookShow}) => {
    return (
    <>
     {bookShow && <Button variant='contained' sx={{
            position: "absolute",
            marginTop:"8px",
            right:"3%"
        }}>Book Show</Button>}
        
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