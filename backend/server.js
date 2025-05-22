/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/


/*
Citation for CREATE BrewMethod and RESET Database
Date: 05/21/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

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


// GET Users

app.get('/users', async (req, res) => {
    try {
        const query = `
            SELECT
                userID AS "User ID",
                userName AS "Username",
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


// GET Brew methods

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


// GET CoffeeReviews

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


// GET CoffeeBeans

app.get('/coffeebeans', async (req, res) => {
    try {
        const query = `
            SELECT 
            coffeebeanID as "Coffee Bean ID",
            brandName as "Brand Name", 
            roastName as "Roast Name", 
            singleOriginCountry as "Origin", 
            roastLevel as "Roast Level", 
            providedTastingNotes as 
            "Provided Tasting Notes"
            FROM CoffeeBeans;
        `;
        const [coffeeBeans] = await db.query(query);
        res.status(200).json({ coffeeBeans });
    } catch (error) {
        console.error("Error fetching coffeebeans:", error);
        res.status(500).send("An error occurred while fetching coffeebeans.");
    }
});


// GET Varietals

app.get('/varietals', async (req, res) => {
    try {
        const query = `
            SELECT 
            varietalID as "Varietal ID", 
            name as "Name"
            FROM Varietals;
        `;
        const [varietals] = await db.query(query);
        res.status(200).json({ varietals });
    } catch (error) {
        console.error("Error fetching varietals:", error);
        res.status(500).send("An error occurred while fetching varietals.");
    }
});


// GET CoffeeBeansVarietals

app.get('/coffeebeansvarietals', async (req, res) => {
    try {
        const query = `
            SELECT 
            CoffeeBeansVarietals.coffeebeanvarietalID as "Coffee Bean by Varietal Relationship ID",
            CoffeeBeans.coffeeBeanID as "Coffee Bean ID", 
            CoffeeBeans.brandName as "Brand Name", 
            CoffeeBeans.roastName as "Roast Name", 
            Varietals.varietalID as "Varietal ID",
            Varietals.name as "Varietal Name" 
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


// CREATE Brew Method

app.post('/brew-methods/create', async (req, res) => {
    try {
        const data = req.body;

        if (!data.name || !data.description) {
            return res.status(400).json({ error: 'Name and description are required' });
        }

        const query = `CALL sp_CreateBrewMethod(?, ?, @new_id);`;
        const [[[result]]] = await db.query(query, [data.name, data.description]);

        console.log(`Created new brew method ID: ${result.new_id}`);

        res.status(200).json({
            message: 'Brew method created successfully',
            brewMethodID: result.new_id
        });
    } catch (error) {
        console.error("Error creating brew method:", error);
        res.status(500).send("An error occurred while creating the brew method.");
    }
});

// RESET Database

app.post('/reset', async (req, res) => {
    try {
        await db.query('CALL sp_load_coffeedb();');
        res.status(200).send('Database reset successfully using sp_load_coffeedb.');
    } catch (error) {
        console.error('Error resetting database:', error);
        res.status(500).send('Error resetting database.');
    }
});



// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});