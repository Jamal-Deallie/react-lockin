import React from 'react';
import JumboVid from './Components/JumboVid';
import PriceCarousel from './Components/PriceCarousel';
import FacilityCarousel from './Components/FacilityCarousel';
import Benefits from './Components/Benefits';


const Home = () => (
    <div>
        <JumboVid />
        <FacilityCarousel />
        <Benefits />
        <PriceCarousel/>
    </div>
);

export default Home;