import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import './ReleasedMovieContent.css';

const ReleasedMovieContent = ({ data, setMovieInfo, movieInfo }) => {

    function releaseDate(date) {
        let releaseDate = new Date(date);
        // console.log(releaseDate);
        return releaseDate.toDateString();
    }

    function handleClick(item) {
        setMovieInfo(item);
        console.log(item);
        // Check for Update of State by uncommenting the above console.log
    }
    return (
        <ImageList sx={{
            height:350
        }} cols={4}gap={25}>
            {data.map((item) => (
                <ImageListItem key={item.id} className='imageItem' onClick={()=>handleClick(item)} >
                    <img
                        src={item.poster_url}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={`Release Date : ${releaseDate(item.release_date)}`}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ReleasedMovieContent;