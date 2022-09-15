import * as React from 'react';
import { InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@mui/material';
import artists from "../assets/artists"



export default function GenreSelect({ setFilterObject, filterObject }) {
    const [artistName, setArtistName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setArtistName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        // Logging the Input of User for Debugging
        // console.log(event.target.value);

        setFilterObject({ ...filterObject, artistName: event.target.value })
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: 240, maxWidth: 240 }}>
                <InputLabel id="artistSearchLabel">Artists</InputLabel>
                <Select
                    labelId="artistSearchLabel"
                    id="artistSearch"
                    multiple
                    value={artistName}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {artists.map((item) => (
                        <MenuItem key={item.id} value={item.first_name + " " + item.last_name}>
                            <Checkbox checked={artistName.indexOf(item.first_name + " " + item.last_name) > -1} />
                            <ListItemText primary={item.first_name + " " + item.last_name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}