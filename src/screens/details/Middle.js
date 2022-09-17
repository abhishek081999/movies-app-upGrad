import React from 'react'
import { Typography } from '@mui/material'
import Youtube from 'react-youtube'

export default function Middle({ movieInfo }) {
    return (
        <>
            <Typography variant='heading' component='h2' paragraph={true}>
                {movieInfo.title}
            </Typography>
            <Typography>
                <b>Genre :</b> {movieInfo.genres.join(', ')}
            </Typography>
            <Typography>
                <b>Duration :</b> {movieInfo.duration}
            </Typography>
            <Typography>
                <b>Release Date :</b> {convertToDateString(movieInfo.release_date)}
            </Typography>
            <Typography>
                <b>Rating :</b> {movieInfo.critics_rating}
            </Typography>
            <Typography sx={{
                marginTop: '16px'
            }}>
                <b>Plot :</b> <a href={movieInfo.wiki_url} target='_blank' rel='noreferrer'>(Wiki Link)</a> {movieInfo.storyline}
            </Typography>
            <Typography sx={{
                marginTop: '16px'
            }}>
                <b>Trailer :</b>
            </Typography>
            <Youtube videoId={getVideoID(movieInfo.trailer_url)}></Youtube>
        </>
    )
}

function convertToDateString(date) {
    let d = new Date(date);
    return d.toDateString();
}

function getVideoID(url) {
    const [, videoID] = url.split('=');
    return videoID;
}