// ########################################
// ########## SETUP

// Database
const db = require('./database/db-connector');

// Express
const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests


const PORT = 45583;

// ########################################
// ########## ROUTE HANDLERS

// READ ROUTES

// Users
app.get('/users', async (req, res) => {
    try {
        const query = `
            SELECT 
                userID AS "User ID", 
                userName AS "User Name", 
                email AS "Email", 
                firstName AS "First Name", 
                lastName AS "Last Name", 
                location AS "Location", 
                joinDate AS "Join Date"
            FROM Users;
        `;
        const [users] = await db.query(query);
        res.status(200).json({ users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("An error occurred while fetching users.");
    }
});

// Brew methods
app.get('/brew-methods', async (req, res) => {
    try {
        const query = `
            SELECT 
                brewMethodID AS "Brew Method ID",
                name AS "Brew Method Name",
                description AS "Description"
            FROM BrewMethods;
    `;
        const [brewMethods] = await db.query(query);
        res.status(200).json({ brewMethods });
    } catch (error) {
        console.error("Error fetching brew methods:", error);
        res.status(500).send("An error occurred while fetching brew methods.");
    }
});

// testing
// ------------------ COFFEE REVIEWS ROUTES ------------------

app.get('/coffee-reviews', async (req, res) => {
  try {
    const query = `
        SELECT 
            CoffeeReviews.coffeeReviewID AS "Review ID",
            CoffeeReviews.reviewDate AS "Review Date",
            CoffeeReviews.aroma AS "Aroma",
            CoffeeReviews.flavor AS "Flavor",
            CoffeeReviews.afterTaste AS "Aftertaste",
            CoffeeReviews.body AS "Body",
            CoffeeReviews.acidity AS "Acidity",
            CoffeeReviews.reviewNotes AS "Notes",
            Users.userID AS "User ID",
            Users.userName AS "User Name",
            CoffeeBeans.coffeeBeanID AS "Bean ID",
            CoffeeBeans.roastName AS "Roast Name",
            BrewMethods.brewMethodID AS "Brew Method ID",
            BrewMethods.name AS "Brew Method"
        FROM CoffeeReviews 
        JOIN Users ON CoffeeReviews.userID = Users.userID
        JOIN CoffeeBeans ON CoffeeReviews.coffeeBeanID = CoffeeBeans.coffeeBeanID
        JOIN BrewMethods ON CoffeeReviews.brewMethodID = BrewMethods.brewMethodID;
    `;
    
    const [rows] = await db.query(query);
    res.json({ coffeeReviews: rows });
  } catch (err) {
    console.error('Error fetching coffee reviews:', err);
    res.status(500).json({ error: 'Failed to fetch coffee reviews' });
  }
});


// New route to fetch coffeebeans
app.get('/coffeebeans', async (req, res) => {
    try {
        const query = `
            SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes"
            FROM CoffeeBeans;
        `;
        const [coffeeBeans] = await db.query(query);
        res.status(200).json({ coffeeBeans });
    } catch (error) {
        console.error("Error fetching coffeebeans:", error);
        res.status(500).send("An error occurred while fetching coffeebeans.");
    }
});

// New route to fetch varietals
app.get('/varietals', async (req, res) => {
    try {
        const query = `
            SELECT name as "Name"
            FROM Varietals;
        `;
        const [varietals] = await db.query(query);
        res.status(200).json({ varietals });
    } catch (error) {
        console.error("Error fetching varietals:", error);
        res.status(500).send("An error occurred while fetching varietals.");
    }
});

// New route to fetch coffee bean varietals intersection data 
app.get('/coffeebeansvarietals', async (req, res) => {
    try {
        const query = `
            SELECT CoffeeBeans.brandName as "Brand Name", CoffeeBeans.roastName as "Roast Name", Varietals.name as "Varietal Name" 
            FROM CoffeeBeans
            JOIN CoffeeBeansVarietals on CoffeeBeans.coffeeBeanID = CoffeeBeansVarietals.coffeeBeanID
            JOIN Varietals on Varietals.varietalID = CoffeeBeansVarietals.varietalID 
        `;
        const [coffeebeansvarietals] = await db.query(query);
        res.status(200).json({ coffeebeansvarietals });
    } catch (error) {
        console.error("Error fetching coffee beans by varietals:", error);
        res.status(500).send("An error occurred while fetching coffee beans by varietals.");
    }
});



// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});
