import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Layout from './components/Main/Layout';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Layout />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
