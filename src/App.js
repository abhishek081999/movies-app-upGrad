import React, { useState } from 'react';
import Home from './screens/home/Home'
// import Details from './screens/details/Details';
import defaultData from './assets/moviesData'



export default function App() {
    const [moviesData, setMoviesData] = useState(defaultData);

    return (
        <>
            <Home moviesData={moviesData} setMoviesData={setMoviesData} defaultData={defaultData}/>
            {/* <Details /> */}
        </>
    )
}