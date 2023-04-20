import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Layout from './components/Main/Layout';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import StayTop from './utilites/StayTop';

const App = () => {

  return (
    // <AllNewsData.Provider value={newsData}>
    <>
      <StayTop />
      <Header />
      <Outlet />
      <hr />
      <Footer />
    </>
    // </AllNewsData.Provider>
  );
};

export default App;
