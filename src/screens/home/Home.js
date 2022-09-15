import React from 'react'
import moviesData from '../../assets/moviesData'
import './Home.css'
import Header from '../../common/header/Header'
import GridList from '../../common/GridList'
import ReleasedMovieContent from '../../common/ReleasedMovieContent'
import MovieFilterCard from "../../common/MovieFilterCard"

export const Home = () => {
    return (
        <div>
            <Header heading={'Upcoming Movies'} />
            <GridList data={moviesData} />
            <div className="flex-container">
                <div className='left'>
                    {/* Released Movies Left Side Container */}
                    <ReleasedMovieContent data={moviesData} />
                </div>
                <div className='right'>
                    {/* Filter Container */}
                    <MovieFilterCard />
                </div>
            </div>
        </div>
    )
}

export default Home;