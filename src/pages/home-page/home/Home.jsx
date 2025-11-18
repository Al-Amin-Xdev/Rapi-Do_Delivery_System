import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks ';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands.jsx/Brands';
import ServiceCards from '../service-card/ServiceCards';
import ReviewCard from '../review-card/ReviewCard';
import Faqs from '../faqs/Faqs';


const reviewPromise = fetch("/reviews.json").then(res=> res.json())



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <ServiceCards></ServiceCards>
      <ReviewCard reviewPromise= {reviewPromise}></ReviewCard>
      <Faqs></Faqs>
    
     
     
    </div>
  );
};

export default Home;