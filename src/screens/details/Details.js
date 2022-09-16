import React from 'react'
import { Typography } from '@mui/material'
import Header from '../../common/header/Header'
import Left from './Left'
import './Details.css'

export default function Details() {
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
                <div className='left'><Left /></div>
                <div className='middle'>Middle</div>
                <div className='right'>Right</div>
            </div>
        </>
    )
}