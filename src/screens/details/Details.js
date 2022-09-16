import React from 'react'
import Header from '../../common/header/Header'
import './Details.css'

export default function Details() {
    return (
        <>
            <Header bookShow={true} />
            <div className='container'>
                <div className='left'>Left</div>
                <div className='middle'>Middle</div>
                <div className='right'>Right</div>
            </div>
        </>
    )
}