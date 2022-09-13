import React from 'react'
import './Home.css'
import Header from '../../common/header/Header'
import '../../common/GridList'
import GridList from '../../common/GridList'
import moviesData from '../../common/moviesData'
export const Home = () => {
    return (
        <div>
        <Header heading={'Upcoming Movies'}/>
        <GridList data={moviesData}/>
    </div>
    )
}

export default Home;