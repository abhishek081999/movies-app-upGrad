import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, FormControl, Button } from '@mui/material';
import GenreSelect from "./GenreSelect"
import ArtistSelect from "./ArtistSelect"

const card = (
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
                    />
                </CardActions>
                <CardActions>
                    <GenreSelect />
                </CardActions>
                <CardActions>
                    <ArtistSelect />
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
                    />
                </CardActions>
            </FormControl>
            <CardActions sx={{
                marginTop: "10px"
            }}>
                <Button variant="contained" fullWidth>APPLY</Button>
            </CardActions>
        </CardContent>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}