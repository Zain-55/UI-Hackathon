import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shopherosection from '../components/Shopherosection';
import Ourservices from '../components/Ourservices';
import Product from '../products/page';
export default function FeaturesBanner() {

  return (
    <div>
      
      <Header/>
      <Shopherosection/>
      <Product/>
      
      <Ourservices />
      <Footer/>

    </div>
  );
}
