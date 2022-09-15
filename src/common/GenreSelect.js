import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import genres from "./genre"



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
            <FormControl sx={{ mx: "auto", width: 250 }}>
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