import React from 'react'
import './Details.css'
import { Typography } from '@mui/material'
import Header from '../../common/header/Header'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'

export default function Details({ movieInfo }) {
    return (
        <>
            <Header bookShow={true} />
            <Typography className="goBackToHome" variant='button' sx={{
                margin: "8px 0px 0px 24px ",
                // Margin Shorthand for Top, Right, Bottom, Left
                height: "24px"
            }}>
                {`<`} Back to Home
            </Typography>

            <div className='container'>
            <div className='left'><Left movieInfo={movieInfo} /></div>
                <div className='middle'><Middle movieInfo={movieInfo} /></div>
                <div className='right'><Right movieInfo={movieInfo} /></div>
            </div>
        </>
    )
}