import React from 'react';
import Header from '../../components/Header/Header';
import PropertyList from '../../components/PropertyList/Propertylist';
import './Home.css'; 

const Home = () => {
  return (
    <div>
      <Header />
      <PropertyList/>
      {/* Konten lainnya */}
    </div>
  );
};

export default Home;
