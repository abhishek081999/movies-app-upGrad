import React from 'react'

export default function Left({movieInfo}) {
    return (
        <>
            <img src={movieInfo.poster_url} alt='Movie Poster' style={{
                margin : '10px 24px 0px 0px',
                // Margin Shorthand for Top, Right, Bottom, Left
                width:"80%"
            }}></img>
        </>
    )
}