import React from 'react';
import Navbar from './Navbar';
import MainCard from './MainCard';
import Main from './Main';
import Footer from './Footer';

const PageComplete = () => {
  return (
      <div>
          <Navbar />
            <MainCard />
                <Main />
                <Footer />
      </div>
  )
};

export default PageComplete;
