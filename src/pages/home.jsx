// src/pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import Jumbotron from '../components/Jumbotron';
import Resources from '../components/Resources';
import PromoSection from '../components/HeroOne';
import PortfolioSection from '../components/PortfolioSection';
const Home = () => {
  return (
    <>
        <div className="relative">
  
  <Carousel />
  <Jumbotron />
  
</div>
<PortfolioSection />
<Resources />
<PromoSection />

    </>
    );
};

export default Home;
