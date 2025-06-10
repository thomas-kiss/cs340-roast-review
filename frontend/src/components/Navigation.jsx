/*
Citation for RESET BUTTON
Date: 05/21/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/


/*
Citation for RESET BUTTON
Date: 05/21/2025
Adapted React Native code:
Source URL: https://reactnative.dev/docs/button
*/


import React from 'react';

const backendURL = 'http://classwork.engr.oregonstate.edu:45581';

function Navigation() {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/users">Users</a>
            <a href="/brew-methods">Brew Methods</a>
            <a href="/coffee-reviews">Coffee Reviews</a>
            <a href="/coffeebeans">Coffee Beans</a>
            <a href="/varietals">Varietals</a>
            <a href="/coffeebeansvarietals">Coffee Beans Varietals</a>
            <span style={{ display: 'inline-block', width: '20px' }}></span>
            <button onClick={async () => {
                try {
                    const response = await fetch(`${backendURL}/reset`, { method: 'POST' });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const message = await response.text();
                    alert(message || "Reset successful");
                    window.location.reload();
                } catch (err) {
                    console.error("Error resetting:", err);
                    alert("Reset failed.");
                }
            }}>
                RESET
            </button>
        </nav>
    );
}

export default Navigation;
