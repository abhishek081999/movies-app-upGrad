import React, { useState } from 'react'
import defaultData from '../../assets/moviesData'
import './Home.css'
import Header from '../../common/header/Header'
import GridList from '../../common/GridList'
import ReleasedMovieContent from '../../common/ReleasedMovieContent'
import MovieFilterCard from "../../common/MovieFilterCard"

export const Home = () => {
    const [moviesData, setMoviesData] = useState(defaultData);

    return (
        <div>
            <Header heading={'Upcoming Movies'} />
            <GridList data={defaultData} />
            <div className="flex-container">
                <div className='left'>
                    {/* Released Movies Left Side Container */}
                    <ReleasedMovieContent data={moviesData} />
                </div>
                <div className='right'>
                    {/* Filter Container */}
                    <MovieFilterCard setMoviesData={setMoviesData} />
                </div>
            </div>
        </div>
    )
}

export default Home;