import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function TitlebarImageList({ data }) {
    return (
        <ImageList sx={{
            height: 250,
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
            gridAutoColumns: "minmax(250px, 1fr)"
        }} >
            {data.map((item) => (
                <ImageListItem key={item.id} >
                    <img
                        src={item.poster_url}
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