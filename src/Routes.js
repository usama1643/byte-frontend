import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import HomePage from './components/Homepage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export const RouteStrings = {
    homepage: '/',
}


function Routing() {
    const theme = useTheme();
    const is_desktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Navigation />
            <Suspense fallback={<div className="tc mt40">
                <CircularProgress color="primary" />
            </div>}>
                <Routes>
                    <Route path={RouteStrings.homepage} element={<HomePage is_desktop={is_desktop}/>} />
                </Routes>

            </Suspense>
            <Footer />
        </>
    );
}

export default Routing;