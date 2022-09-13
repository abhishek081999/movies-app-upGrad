import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarImageList({data}) {
    return (
        <ImageList sx={{ height: 250 }} cols={5} >
            {data.map((item) => (
                <ImageListItem key={item.id} >
                    <img
                        src={`${item.poster_url}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}