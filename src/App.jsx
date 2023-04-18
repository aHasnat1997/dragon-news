import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Layout from './components/Main/Layout';
import Footer from './components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

export const AllNewsData = createContext([]);

const App = () => {

  const newsData = useLoaderData();
  // console.log(newsData);

  return (
    <AllNewsData.Provider value={newsData}>
      <Header />
      <Layout />
      <hr />
      <Footer />
    </AllNewsData.Provider>
  );
};

export default App;
