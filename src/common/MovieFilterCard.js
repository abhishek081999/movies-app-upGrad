import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  FormControl,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GenreSelect from "./GenreSelect";
import ArtistSelect from "./ArtistSelect";


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
                      onChange={(event) => setFilterObject({ ...filterObject, title: event.target.value })}
                  />
              </CardActions>
              <CardActions>
                  <GenreSelect setFilterObject={setFilterObject} filterObject={filterObject} />
                  {/* Passing setFilterObject and filterObject as props to GenreSelect Component */}
              </CardActions>
              <CardActions>
                  <ArtistSelect setFilterObject={setFilterObject} filterObject={filterObject} />
                  {/* Passing setFilterObject and filterObject as props to ArtistSelect Component */}
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
                      onChange={(event) => {
                          if (isValidDate(event.target.value)) {
                              let d = new Date(event.target.value);
                              setFilterObject({ ...filterObject, startDate: d.toISOString() })
                              // Converting the Date Format to ISO String in order to match the Data being received from the Server
                          } else {
                              setFilterObject({ ...filterObject, startDate: undefined })
                          }
                      }}
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
                      onChange={(event) => {
                          if (isValidDate(event.target.value)) {
                              let d = new Date(event.target.value);
                              setFilterObject({ ...filterObject, endDate: d.toISOString() })
                              // Converting the Date Format to ISO String in order to match the Data being received from the Server
                          } else {
                              setFilterObject({ ...filterObject, endDate: undefined })
                          }
                      }}
                  />
              </CardActions>
          </FormControl>
          <CardActions sx={{
              marginTop: "10px"
          }}>
              <Button variant="contained" fullWidth onClick={() => {
                  let filteredMovies = moviesData.filter(movie => {
                      // setting a Flag to apply all the Filters on Movies Data 
                      let flag = true;
                      if (flag && filterObject.title !== undefined) {
                          if (!movie.title.toLowerCase().includes(filterObject.title.toLowerCase()))
                              flag = false;
                      }
                      if (flag && filterObject.genres !== undefined) {
                          if (!movie.genres.some(genreName => filterObject.genres.includes(genreName)))
                              flag = false;
                      }
                      if (flag && filterObject.artists !== undefined) {
                          if (!movie.artists.some(item => filterObject.artists.includes(`${item.first_name} ${item.last_name}`)))
                              flag = false;
                      }
                      if (flag && filterObject.startDate !== undefined) {
                          if (movie.release_date < filterObject.startDate)
                              flag = false;
                      }
                      if (flag && filterObject.endDate !== undefined) {
                          if (movie.release_date > filterObject.endDate)
                              flag = false;
                      }

                      if (flag) return movie;
                  }
                  );
                  setMoviesData(filteredMovies);
              }}>
                  APPLY
              </Button>
              <IconButton aria-label="delete" size="small" onClick={() =>
                  setMoviesData(defaultData)
              }>
                  <DeleteIcon />
              </IconButton>
          </CardActions>
      </CardContent>
  </React.Fragment >
);

const isValidDate = function (date) {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}


// Destructuring the data being received as props and exporting default function as a Wrapper for the Complete Filter Card Functionality.

export default function MovieFilterCard({ setMoviesData, moviesData, defaultData }) {

  const [filterObject, setFilterObject] = useState({
      
  });
  // Properties used for Filter Object
  //console.log(filterObject);

  return (
      <Box sx={{ minWidth: 275 }} >
          <Card variant="outlined">{card(setFilterObject, filterObject, setMoviesData, moviesData, defaultData)}</Card>
      </Box>
  );
}