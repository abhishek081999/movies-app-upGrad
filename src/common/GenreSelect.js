import * as React from 'react';
import { InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@mui/material';
import genres from "../assets/genre"



export default function GenreSelect() {
    const [genreName, setGenreName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setGenreName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ width: 240 }}>
                <InputLabel id="genreSearchLabel">Genres</InputLabel>
                <Select
                    labelId="genreSearchLabel"
                    id="genreSearch"
                    multiple
                    value={genreName}
                    onChange={handleChange}
                    // input={<OutlinedInput label="" />}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {genres.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            <Checkbox checked={genreName.indexOf(item.name) > -1} />
                            <ListItemText primary={item.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}