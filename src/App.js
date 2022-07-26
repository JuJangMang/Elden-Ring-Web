import React from 'react';

import { Awards, EldenRing, KeyFeatures, Footer, Gallery, Header, Intro, Shop, Requirements } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <EldenRing />
    <Header />
    <Awards />
    <KeyFeatures />   
    <Intro />
    <Gallery />  
    <Shop /> 
    <Requirements />
    <Footer />
  </div>
);

export default App;
