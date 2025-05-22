import React from 'react';

const backendURL = 'http://classwork.engr.oregonstate.edu:45583';

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
                    const response = await fetch(`${backendURL}/api/reset`, { method: 'POST' });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    alert(data.message || "Reset successful");
                    window.location.reload(); // Reload to reflect fresh data
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
