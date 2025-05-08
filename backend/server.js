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


const PORT = 6664;

// ########################################
// ########## ROUTE HANDLERS

// READ ROUTES

app.get('/users', async (req, res) => {
  try {
      const query = `
          SELECT userID, userName, email, firstName, lastName, location, joinDate
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
            SELECT brewMethodID, name, description
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
        CoffeeReviews.coffeeReviewID,
        CoffeeReviews.reviewDate,
        CoffeeReviews.aroma,
        CoffeeReviews.flavor,
        CoffeeReviews.afterTaste,
        CoffeeReviews.body,
        CoffeeReviews.acidity,
        CoffeeReviews.reviewNotes,
        Users.userID,
        Users.userName,
        CoffeeBeans.coffeeBeanID,
        CoffeeBeans.roastName,
        BrewMethods.brewMethodID,
        BrewMethods.name
      FROM CoffeeReviews 
      JOIN Users ON CoffeeReviews.userID = Users.userID
      JOIN  CoffeeBeans ON CoffeeReviews.coffeeBeanID = CoffeeBeans.coffeeBeanID
      JOIN BrewMethods ON CoffeeReviews.brewMethodID = BrewMethods.brewMethodID;
    `;
    
    const [rows] = await db.query(query);
    res.json({ coffeeReviews: rows });
  } catch (err) {
    console.error('Error fetching coffee reviews:', err);
    res.status(500).json({ error: 'Failed to fetch coffee reviews' });
  }
});


app.post('/coffee-reviews', async (req, res) => {
  try {
    const {
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
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO CoffeeReviews 
        (reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID]
    );

    res.status(201).json({ coffeeReviewID: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create coffee review' });
  }
});

app.put('/coffee-reviews/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const {
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
    } = req.body;

    await db.query(
      `UPDATE CoffeeReviews SET 
        reviewDate = ?, aroma = ?, flavor = ?, afterTaste = ?, 
        body = ?, acidity = ?, reviewNotes = ?, coffeeBeanID = ?, 
        brewMethodID = ?, userID = ?
       WHERE coffeeReviewID = ?`,
      [reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID, id]
    );

    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update coffee review' });
  }
});

app.delete('/coffee-reviews/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.query('DELETE FROM CoffeeReviews WHERE coffeeReviewID = ?', [id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete coffee review' });
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
            SELECT *
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
            SELECT *
            FROM CoffeeBeansVarietals;
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
