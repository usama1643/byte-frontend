import React, { Suspense, Component } from 'react';
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import HomePage from './components/Homepage'
import Navigation from './components/Navigation'

export const RouteStrings = {
    homepage: '/',
}


function Routing() {
    return (
        <>
          <Navigation/>  
            <Suspense fallback={<div className="tc mt40">
                <CircularProgress color="primary" />
            </div>}>
                <Routes>
                    <Route path={RouteStrings.homepage} element={<HomePage />} />
                </Routes>

            </Suspense>
        </>
    );
}

export default Routing;