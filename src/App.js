import './App.css';

import {Header,Footer,Possibility,WhatGPT,Features,Blog } from './container'
import {Brand,  CTA,Navbar}from'./Component'
function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
      
      
 
    </div>
  );
}

export default App;
