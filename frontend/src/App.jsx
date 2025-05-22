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

// Define the backend port and URL for API requests
const backendPort = 45583;  // Use the port you assigned to the backend server, this would normally go in a .env file
const backendURL = `http://classwork.engr.oregonstate.edu:${backendPort}`;

function App() {

    return (
        <>
            <Navigation />
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