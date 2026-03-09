/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import BrewMethodPage from './pages/BrewMethodPage';
import CoffeeReviewPage from './pages/CoffeeReviewPage'; 
import CoffeeBeanPage from './pages/CoffeeBeanPage';
import VarietalPage from './pages/VarietalPage';  
import CoffeeBeanVarietalPage from './pages/CoffeeBeanVarietalPage'



// Components
import Navigation from './components/Navigation';


// Backend URL is set via a Vite environment variable (VITE_BACKEND_URL) so the
// frontend can point to different servers in development vs. production without
// changing source code. Set this in a .env file locally or in Vercel's environment
// variable settings for the deployed app.
const backendURL = import.meta.env.VITE_BACKEND_URL;

function App() {

    return (
        <>
            <Navigation backendURL={backendURL}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserPage backendURL={backendURL} />} />
                <Route path="/brew-methods" element={<BrewMethodPage backendURL={backendURL} />} />
                <Route path="/coffee-reviews" element={<CoffeeReviewPage backendURL={backendURL} />} /> 
                <Route path="/coffeebeans" element={<CoffeeBeanPage backendURL={backendURL} />} />
                <Route path="/varietals" element={<VarietalPage backendURL={backendURL} />} />  
                <Route path="/coffeebeansvarietals" element={<CoffeeBeanVarietalPage backendURL={backendURL} />} />
                
            </Routes>
        </>
    );

} export default App;