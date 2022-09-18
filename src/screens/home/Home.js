import React from 'react'
import './Home.css'
import Header from '../../common/header/Header'
import GridList from '../../common/GridList'
import ReleasedMovieContent from '../../common/ReleasedMovieContent'
import MovieFilterCard from "../../common/MovieFilterCard"

export const Home = ({ moviesData, setMoviesData, defaultData, setMovieInfo, movieInfo }) => {

    return (
        <div>
            <Header heading={'Upcoming Movies'} />
            <GridList data={defaultData} />
            <div className="flex-container">
                <div className='leftHome'>
                    {/* Released Movies Left Side Container */}
                    <ReleasedMovieContent data={moviesData} setMovieInfo={setMovieInfo} movieInfo={movieInfo} />
                </div>
                <div className='rightHome'>
                    {/* Filter Container */}
                    <MovieFilterCard setMoviesData={setMoviesData} moviesData={moviesData} defaultData={defaultData} />
                </div>
            </div>
        </div>
    )
}

export default Home;