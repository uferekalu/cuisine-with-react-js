import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import ControlledCarousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import CarbsComponent from './components/Carbs/Carbs';
import NewArrivals from './components/NewArrivals/NewArrivals';
import BestSellers from './components/BestSellers/BestSellers';
import Popular from './components/Popular/Popular';
import Delivery from './components/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ControlledCarousel />
      <Categories />
      <CarbsComponent />
      <NewArrivals />
      <BestSellers />
      <Popular />
      <Delivery />
      
    </div>
  );
}

export default App;
