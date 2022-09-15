import React, { useState } from 'react';
import { Box, Card, CardActions, CardContent, Typography, TextField, FormControl, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GenreSelect from "./GenreSelect"
import ArtistSelect from "./ArtistSelect"

const card = (setFilterObject, filterObject, setMoviesData, moviesData, defaultData) => (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} variant="h2" color="primary.light">
                FIND MOVIES BY:
            </Typography>
            <FormControl>
                <CardActions>
                    <TextField
                        id="movieSearch"
                        label="Movie Name"
                        type="search"
                        variant="standard"
                        fullWidth
                        onChange={(event) => setFilterObject({ ...filterObject, movieName: event.target.value })}
                    />
                </CardActions>
                <CardActions>
                    <GenreSelect setFilterObject={setFilterObject} filterObject={filterObject}/>
                </CardActions>
                <CardActions>
                    <ArtistSelect setFilterObject={setFilterObject} filterObject={filterObject}/>
                </CardActions>
                <CardActions>
                    <TextField
                        id="startDate"
                        label="Release Date Start"
                        type="date"
                        variant="standard"
                        placeholder="dd-mm-yyyy"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        onChange={(event) => setFilterObject({ ...filterObject, startDate: event.target.value })}
                    />
                </CardActions>
                <CardActions>
                    <TextField
                        id="endDate"
                        label="Release Date End"
                        type="date"
                        variant="standard"
                        placeholder="dd-mm-yyyy"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        onChange={(event) => setFilterObject({ ...filterObject, endDate: event.target.value })}
                    />
                </CardActions>
            </FormControl>
            <CardActions sx={{
                marginTop: "10px"
            }}>
                <Button variant="contained" fullWidth onClick={() =>
                    setMoviesData(() => moviesData.filter(movie => {
                        return movie.title.toLowerCase().includes(filterObject.movieName.toLowerCase());
                    }))
                }>
                    APPLY
                </Button>
                <IconButton aria-label="delete" size="small" onClick={() =>
                    setMoviesData(defaultData)
                }>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </CardContent>
    </React.Fragment>
);

export default function MovieFilterCard({ setMoviesData, moviesData, defaultData }) {

    const [filterObject, setFilterObject] = useState({
        
    });
    // Test Data is used above for Filter Object
    //console.log(filterObject);

    return (
        <Box sx={{ minWidth: 275 }} >
            <Card variant="outlined">{card(setFilterObject, filterObject, setMoviesData, moviesData, defaultData)}</Card>
        </Box>
    );
}