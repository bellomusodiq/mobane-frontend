import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div id="Home">
      <Header />
      <Carousel />
      <Home />
      <Footer />
    </div >
  );
}

export default App;
