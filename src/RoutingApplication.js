import React from 'react';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import { Route, Routes } from 'react-router-dom';


function RoutingApplication() {
    return(
        <div>
            <h1>welcome to RoutingApplication</h1>
              <Routes>
                 <Route path="/" element={<HomePage />}> </Route>
                  <Route path="/about" element={<AboutUs />}></Route>
              </Routes>
        </div>
    );
}

export default RoutingApplication;