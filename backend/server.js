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

// Users
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
    const [rows] = await db.query('SELECT * FROM CoffeeReviews');
    res.json({ coffeeReviews: rows });
  } catch (err) {
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

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});