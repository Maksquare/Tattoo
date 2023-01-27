import React from 'react';
// import components

import Header from './components/Header';

import Footer from './components/Footer';
import Copyright from './components/Copyright';
// import pages

// import react router dom
import { BrowserRouter as Router } from 'react-router-dom';
import AnimaRoutes from './components/AnimaRoutes';
const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white '>

      <Router>
        <Header />
        <AnimaRoutes />
        <Footer />
        <Copyright />
      </Router>
      

      {/* <div className='h-[4000px]'></div> */}

    </div>
  );
};

export default App;
