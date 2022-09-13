import React from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import '../../common/GridList';
import GridList from '../../common/GridList';
import moviesData from '../../common/moviesData';
import ReleasedMovieContent from '../../common/ReleasedMovieContent';
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
                    Filters
                </div>
            </div>
        </div>

    )
}

export default Home;