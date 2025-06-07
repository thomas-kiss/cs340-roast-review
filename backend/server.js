/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

/*
Citation for DELETE User and DELETE BrewMethod
Date: 06/02/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

/*
Citation for CREATE BrewMethod, UPDATE Varietal, and RESET Database
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


const PORT = 45581;

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
            coffeeBeanID as "Coffee Bean ID",
            brandName as "Brand Name", 
            roastName as "Roast Name", 
            singleOriginCountry as "Origin", 
            roastLevel as "Roast Level", 
            providedTastingNotes as 
            "Provided Tasting Notes"
            FROM CoffeeBeans
            ORDER BY coffeeBeanID ASC;
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
            FROM Varietals
            ORDER BY varietalID ASC;
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
            ORDER BY CoffeeBeansVarietals.coffeebeanvarietalID ASC;
        `;
        const [coffeebeansvarietals] = await db.query(query);
        res.status(200).json({ coffeebeansvarietals });
    } catch (error) {
        console.error("Error fetching coffee beans by varietals:", error);
        res.status(500).send("An error occurred while fetching coffee beans by varietals.");
    }
});

// GET CoffeeBeansVarietals Brands

app.get('/coffeebeansvarietals/brandnames', async (req, res) => {
    try {
        const roastName = req.query.roastName;
        const params = [];
        let query = `
            SELECT DISTINCT 
            brandName as "Brand Name"
            FROM CoffeeBeans
        `;
       
        
        if (roastName) {
        query += ` WHERE roastName = ?`;
        params.push(roastName);
        }

    query += ` ORDER BY brandName ASC`;
        const [brands] = await db.query(query, params);
        res.status(200).json({ brands });
    } catch (error) {
        console.error("Error fetching brand names", error);
        res.status(500).send("An error occurred while fetching brandnames");
    }
});

// GET CoffeeBeansVarietals Roast Names

app.get('/coffeebeansvarietals/roastnames', async (req, res) => {
    try {
        const brandName = req.query.brandName;
        const params = [];
        
        let query = `
            SELECT DISTINCT
            roastName as "Roast Name"
            FROM CoffeeBeans
        `;


        if (brandName) {
        query += ` WHERE brandName = ?`;
        params.push(brandName);
        }

    query += ` ORDER BY roastName ASC`;
        const [roasts] = await db.query(query, params);
        res.status(200).json({ roasts });
    } catch (error) {
        console.error("Error fetching  roasts", error);
        res.status(500).send("An error occurred while fetching roasts.");
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

// CREATE Varietals

app.post('/varietals/create', async (req, res) => {
    try {
        const data = req.body;

        if (!data.name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const query = `CALL sp_CreateVarietal(?, @new_id);`;
        const [[[result]]] = await db.query(query, [data.name]);

        console.log(`Created new varietal ID: ${result.new_id}`);

        res.status(200).json({
            message: 'Varietal created successfully',
            varietalID: result.new_id
        });
    } catch (error) {
        console.error("Error creating varietal:", error);
        res.status(500).send("An error occurred while creating the varietal.");
    }
});

// CREATE CoffeeBeans

app.post('/coffeebeans/create', async (req, res) => {
    try {
        const data = req.body;

        if (!data.brandName || !data.roastName || !data.singleOriginCountry || !data.roastLevel || !data.providedTastingNotes) {
            return res.status(400).json({ error: 'Brand Name and Roast Name are required' });
        }

        const query = `CALL sp_CreateCoffeeBean(?, ?, ?, ?, ?, @new_id);`;
        const [[[result]]] = await db.query(query, [data.brandName, data.roastName, data.singleOriginCountry, data.roastLevel, data.providedTastingNotes]);

        console.log(`Created new coffee bean ID: ${result.new_id}`);

        res.status(200).json({
            message: 'Coffee bean created successfully',
            coffeeBeanID: result.new_id
        });
    } catch (error) {
        console.error("Error creating coffee bean:", error);
        res.status(500).send("An error occurred while creating the coffee bean.");
    }
});

// CREATE CoffeeBeansVarietals

app.post('/coffeebeansvarietals/create', async (req, res) => {
    try {
        
        const { brandName, roastName, varietalName } = req.body;

        if (!brandName || !roastName || !varietalName) {
            return res.status(400).json({ error: 'A Coffee Bean and a Varietal are required' });
        }
        const query = `CALL sp_CreateCoffeeBeanVarietal(?, ?, ?, @new_id);`;
        const [[[result]]] = await db.query(query, [brandName, roastName, varietalName]);

        console.log(`Created new coffee bean varietal ID: ${result.new_id}`);

        res.status(200).json({
            message: 'Coffee Bean by Varietal created successfully',
            coffeeBeanVarietalID: result.new_id
        });
    } catch (error) {
      console.error('Error in /coffeebeansvarietals/create:', error.stack || error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


// CREATE User
app.post('/users/create', async (req, res) => {
    try {
        const data = req.body;

        if (!data.userName || !data.email || !data.firstName || !data.lastName) {
            return res.status(400).json({ error: 'userName, email, firstName, and lastName are required' });
        }

        // Optional: location and joinDate can be provided or set defaults
        // Assuming joinDate is DATE and location is VARCHAR
        const location = data.location || null;
        const joinDate = data.joinDate || new Date().toISOString().split('T')[0]; // defaults to today in YYYY-MM-DD

        // Call stored procedure to create user - assume it returns new userID as out param
        const query = `CALL sp_CreateUser(?, ?, ?, ?, ?, ?, @new_id);`;
        // Note: Pass parameters in correct order depending on your stored procedure signature
        // Assuming sp_CreateUser(userName, email, firstName, lastName, location, joinDate, OUT new_id)
        const [[[result]]] = await db.query(query, [
            data.userName,
            data.email,
            data.firstName,
            data.lastName,
            location,
            joinDate
        ]);

        console.log(`Created new user ID: ${result.new_id}`);

        res.status(200).json({
            message: 'User created successfully',
            userID: result.new_id
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("An error occurred while creating the user.");
    }
});



// CREATE CoffeeReview

app.post('/coffee-reviews', async (req, res) => {
    try {
        const {
            userID,
            coffeeBeanID,
            brewMethodID,
            reviewDate,
            aroma,
            flavor,
            afterTaste,
            body,
            acidity,
            reviewNotes
        } = req.body;

        const query = `CALL sp_CreateCoffeeReview(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @new_id);`;
        
        // Order of params: reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID
        const [[[result]]] = await db.query(query, [
            reviewDate,
            aroma,
            flavor,
            afterTaste,
            body,
            acidity,
            reviewNotes,
            coffeeBeanID,
            brewMethodID,
            userID
        ]);

        const newID = result.new_coffeeReview_id;

        console.log(`Created new coffee review ID: ${newID}`);

        res.status(201).json({
            message: 'Coffee review created successfully',
            coffeeReviewID: newID
        });

    } catch (error) {
        console.error('Error creating coffee review:', error);
        res.status(500).json({ error: 'Failed to create coffee review' });
    }
});


// UPDATE Varietals
app.post('/varietals/update', async function (req, res) {
    try {
        // Parse frontend form information
        const data = req.body;

        // Create and execute our query
        // Using parameterized queries (Prevents SQL injection attacks)
        const query1 = 'CALL sp_UpdateVarietal(?, ?);';
        const query2 = 'SELECT name FROM Varietals WHERE varietalID = ?;';
        await db.query(query1, [
            data.update_varietal_id,
            data.update_varietal_name,
        ]);
        const [[rows]] = await db.query(query2, [data.update_varietal_id]);

        console.log(`UPDATE Varietals. ID: ${data.update_varietal_id} ` +
            `Varietal Name: ${rows.name}`
        );

        // Send success status to frontend
        res.status(200).json({ message: 'Varietal updated successfully' });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries: ${error.message}'
        );
    }
});

// UPDATE CoffeeBeans
app.post('/coffeebeans/update', async function (req, res) {
    try {
        // Parse frontend form information
        const data = req.body;

        // Create and execute our query
        // Using parameterized queries (Prevents SQL injection attacks)
        const query1 = 'CALL sp_UpdateCoffeeBean(?, ?, ?, ?, ?, ?);';
        const query2 = 'SELECT brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes FROM CoffeeBeans WHERE coffeeBeanID = ?;';
        await db.query(query1, [
            data.update_coffeeBeanID,
            data.update_brandName,
            data.update_roastName,
            data.update_singleOriginCountry,
            data.update_roastLevel,
            data.update_providedTastingNotes,
        ]);
        const [[rows]] = await db.query(query2, [data.update_coffeeBeanID]);

        console.log(`UPDATE CoffeeBeans. ID: ${data.update_coffeeBeanID} ` +
            `CoffeeBean Brand Name: ${rows.brandName}`
        );

        // Send success status to frontend
        res.status(200).json({ message: 'Coffee Bean updated successfully' });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries: ${error.message}'
        );
    }
});

// UPDATE Coffee Beans by Varietals
app.post('/coffeebeansvarietals/update', async function (req, res) {
    try {
        // Parse frontend form information
        const data = req.body;

        // Create and execute our query
        // Using parameterized queries (Prevents SQL injection attacks)
        const query1 = 'CALL sp_UpdateCoffeeBeanVarietal(?, ?, ?);';
        const query2 = 'SELECT coffeeBeanID, varietalID FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = ?;';
        await db.query(query1, [
            data.update_coffeebeanvarietal_id,
            data.update_coffeebean_id,
            data.update_varietal_id,
        ]);
        const [[rows]] = await db.query(query2, [data.update_coffeebeanvarietal_id]);

        console.log(`UPDATE Varietals. ID: ${data.update_coffeebeanvarietal_id} `
        );

        // Send success status to frontend
        res.status(200).json({ message: 'Coffee Bean by Varietal updated successfully' });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries: ${error.message}'
        );
    }
});


// DELETE Users 
app.post('/users/delete', async function (req, res) {
    try {
        const data = req.body;
        const query = `CALL sp_DeleteUser(?);`;
        await db.query(query, [data.delete_user_id]);

        console.log(`DELETE Users. ID: ${data.delete_user_id} ` +
            `Username: ${data.delete_user_name}`);

        res.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        console.error('Error executing delete user:', error);
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
});



// DELETE Coffee Reviews 
app.post('/coffee-reviews/delete', async function (req, res) {
    try {
        const data = req.body;
        const query = `CALL sp_DeleteCoffeeReview(?);`;
        await db.query(query, [data.delete_coffeeReviewID]);

        console.log(`DELETE Coffee Review. ID: ${data.delete_coffeeReviewID} `);

        res.status(200).json({ message: 'Coffee Review deleted successfully' });

    } catch (error) {
        console.error('Error executing delete coffee review:', error);
        res.status(500).json({ error: 'An error occurred while deleting the coffee review.' });
    }
});


// DELETE BrewMethods 
app.post('/brew-methods/delete', async function (req, res) {
    try {
        const data = req.body;
        const query = `CALL sp_DeleteBrewMethod(?);`;
        await db.query(query, [data.delete_brew_method_id]);

        console.log(`DELETE BrewMethod. ID: ${data.delete_brew_method_id}`);

        res.status(200).json({ message: 'Brew method deleted successfully' });

    } catch (error) {
        console.error('Error executing delete brew method:', error);
        res.status(500).json({ error: 'An error occurred while deleting the brew method.' });
    }
});


// DELETE CoffeeBeans 
app.post('/coffeebeans/delete', async function (req, res) {
    try {
        console.log('Received delete request body:', req.body);
        const data = req.body;
        const query = `CALL sp_DeleteCoffeeBean(?);`;
        await db.query(query, [data.delete_coffeeBeanID]);

        console.log(`DELETE Coffee Beans. ID: ${data.delete_coffeeBeanID} `)

        res.status(200).json({ message: 'Coffee Bean deleted successfully' });

    } catch (error) {
        console.error('Error executing delete coffee bean:', error);
        res.status(500).json({ error: error.message, stack: error.stack });
    }
});

// DELETE Varietals 
app.post('/varietals/delete', async function (req, res) {
    try {
        const data = req.body;
        const query = `CALL sp_DeleteVarietal(?);`;
        await db.query(query, [data.delete_varietalID]);

        console.log(`DELETE Varietal. ID: ${data.delete_varietalID} `)

        res.status(200).json({ message: 'Varietal deleted successfully' });

    } catch (error) {
        console.error('Error executing delete varietal:', error);
        res.status(500).json({ error: 'An error occurred while deleting the varietal.' });
    }
});

// DELETE CoffeeBeansVarietals
app.post('/coffeebeansvarietals/delete', async function (req, res) {
    try {
        const data = req.body;
        const query = `CALL sp_DeleteCoffeeBeanVarietal(?);`;
        await db.query(query, [data.delete_coffeeBeanVarietalID]);

        console.log(`DELETE Coffee Beans. ID: ${data.delete_coffeeBeanVarietalID} `)

        res.status(200).json({ message: 'Coffee Bean Varietal deleted successfully' });

    } catch (error) {
        console.error('Error executing delete coffee bean varietal:', error);
        res.status(500).json({ error: 'An error occurred while deleting the coffee bean varietal.' });
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