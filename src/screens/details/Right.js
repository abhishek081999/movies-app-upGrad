import React from 'react'
import { Typography, Rating } from '@mui/material'
import ArtistList from './ArtistList';

export default function Right({ movieInfo }) {
    const [rating, setRating] = React.useState(0);

    return (
        <>
            <Typography variant='subtitle' paragraph={true}><b>Rate this Movie :</b></Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
            <Typography sx={{
                marginTop :'16px',
                marginBottom :'16px'
            }}><b>Artists :</b></Typography>
            <ArtistList movieInfo={movieInfo} />
        </>
    )
}