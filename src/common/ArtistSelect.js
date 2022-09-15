import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import artists from "./artists"



export default function GenreSelect() {
    const [artistName, setArtistName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setArtistName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ width: 240 }}>
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