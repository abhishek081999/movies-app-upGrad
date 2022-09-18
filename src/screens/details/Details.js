import React from 'react'
import './Details.css'
import { Typography } from '@mui/material'
import Header from '../../common/header/Header'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
import { Link } from "react-router-dom";

export default function Details({ movieInfo }) {
    return (
        <>
            <Header bookShow={true} />
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography className="goBackToHome" variant='button' sx={{
                    margin: "8px 0px 0px 24px ",
                    // Margin Shorthand for Top, Right, Bottom, Left
                    height: "24px"
                }}>
                    {`<`} Back to Home
                </Typography>
            </Link>

            <div className='container'>
            <div className='leftDetails'><Left movieInfo={movieInfo} /></div>
                <div className='middleDetails'><Middle movieInfo={movieInfo} /></div>
                <div className='rightDetails'><Right movieInfo={movieInfo} /></div>
            </div>
        </>
    )
}