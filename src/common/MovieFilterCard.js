import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} variant="h2" color="primary.light">
                FIND MOVIES BY:
            </Typography>
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
                <TextField
                    id="genreSearch"
                    label="Genres"
                    type="search"
                    variant="standard"
                    fullWidth
                />
            </CardActions>
            <CardActions>
                <TextField
                    id="artistSearch"
                    label="Artists"
                    type="search"
                    variant="standard"
                    fullWidth
                />
            </CardActions>
            <CardActions>
                <TextField
                    id="startDate"
                    label="Release Date Start"
                    type="date"
                    variant="standard"
                    defaultValue="dd-mm-yyyy"
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
                    defaultValue="dd-mm-yyyy"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
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