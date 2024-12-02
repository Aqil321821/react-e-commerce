import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResponsiveAppBar from '../components/Navbar';
import SingleProduct from '../components/SingleProduct';

const Routerconfig = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='' element={<Home />} />
          <Route path='product/:id'   element={<SingleProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routerconfig;
