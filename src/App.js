import React, { useState } from 'react';
//import Home from './screens/home/Home'
 import Details from './screens/details/Details';
import defaultData from './assets/moviesData'



export default function App() {
   // const [moviesData, setMoviesData] = useState(defaultData);
    const [movieInfo, setMovieInfo] = useState(defaultData[2]);
    return (
        <>
            {/* <Home moviesData={moviesData} setMoviesData={setMoviesData} defaultData={defaultData}/> */}
            {/* <Details /> */}
            <Details movieInfo={movieInfo}/>
        </>
    )
}