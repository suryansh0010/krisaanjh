import React from 'react'
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Slider from '../ImageSlider/Slider';
import MidPage from '../midpage/MidPage';
import SecondPage from '../secondPage/Secondpage';
import FirstPage from '../firstPage/FirstPage';
import Footer from '../footer/Footer';

const FrontPage=()=>{
    return (
        <>
        <div>
            <Header/>
            <Navbar/>
            <Slider/>
            <MidPage/>
            <SecondPage/>
            <FirstPage/>
            <Footer/>
        </div>
        </>
    )
}
export default FrontPage;