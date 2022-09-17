import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function ArtistList({ movieInfo }) {
    return (
        <>
            <ImageList cols={2} gap={10}>
                {movieInfo.artists.map((item) => (
                    <ImageListItem key={item.id} className='imageItem'>
                        <img
                            src={item.profile_url}
                            alt={`${item.first_name} ${item.last_name}`}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={`${item.first_name} ${item.last_name}`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}