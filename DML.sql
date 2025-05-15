/* Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

-- ** Users ** --

-- CREATE --
-- Add a new user
INSERT INTO Users (userName, email, firstName, lastName, location, joinDate)  
VALUES (@userNameInput, @emailInput, @firstNameInput, @lastNameInput, @locationInput, @joinDateInput);

-- READ --
-- Get all users for the User page
SELECT userID, userName, email, firstName, lastName, location, joinDate  
FROM Users;

-- UPDATE --
-- Get a list of userIDs for the drop-down choice
SELECT userID FROM Users;

-- Get a single user's data for Update User form
SELECT userID, userName, email, firstName, lastName, location, joinDate  
FROM Users  
WHERE userID = @userID_selected_from_User_page;

-- Update user data based on submission of Update User form
UPDATE Users  
SET userName = @userNameInput, 
    email = @emailInput, 
    firstName = @firstNameInput, 
    lastName = @lastNameInput, 
    location = @locationInput, 
    joinDate = @joinDateInput  
WHERE userID = @userID_selected_from_User_page;

-- DELETE --
-- Delete user data upon submission of Delete action on User form
DELETE FROM Users WHERE userID = @userID_selected_from_User_page;


-- ** Brew Methods ** --

-- CREATE --
-- Add a new brew method
INSERT INTO BrewMethods (name, description)  
VALUES (@nameInput, @descriptionInput);

-- READ --
-- Get all brew methods for the Brew Methods page
SELECT brewMethodID, name, description  
FROM BrewMethods;

-- UPDATE --
-- Get a list of brewMethodIDs for the drop-down choice
SELECT brewMethodID FROM BrewMethods;

-- Get a single brew method data for Update Brew Method form
SELECT brewMethodID, name, description  
FROM BrewMethods  
WHERE brewMethodID = @brewMethodID_selected_from_page;

-- Update brew method data based on submission of Update Brew Method form
UPDATE BrewMethods  
SET name = @nameInput, 
    description = @descriptionInput  
WHERE brewMethodID = @brewMethodID_selected_from_page;

-- DELETE --
-- Delete brew method data upon submission of Delete action on Brew Method form
DELETE FROM BrewMethods WHERE brewMethodID = @brewMethodID_selected_from_page;


-- ** Coffee Reviews ** --

-- CREATE --
-- Get UserNames from Users table to populate UserName dropdown
SELECT userName FROM Users;

-- Get names from BrewMethods table to populate Brew Method dropdown
SELECT name FROM BrewMethods;

-- Get roastName from CoffeeBeans table to populate Coffee Bean dropdown
SELECT roastName FROM CoffeeBeans;

-- Add a new coffee review 
INSERT INTO CoffeeReviews (
    reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID
)  
VALUES (
    @reviewDateInput,
    @aromaInput,
    @flavorInput,
    @afterTasteInput,
    @bodyInput,
    @acidityInput,
    @reviewNotesInput,
    (SELECT coffeeBeanID FROM CoffeeBeans WHERE roastName = @roastName_selected_from_coffeeReviewsForm),
    (SELECT brewMethodID FROM BrewMethods WHERE name = @name_selected_from_coffeeReviewsForm),
    (SELECT userID FROM Users WHERE userName = @userName_selected_from_coffeeReviewsForm)
);

-- READ --
-- Get all coffee reviews for Coffee Reviews page
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
JOIN CoffeeBeans ON CoffeeReviews.coffeeBeanID = CoffeeBeans.coffeeBeanID
JOIN BrewMethods ON CoffeeReviews.brewMethodID = BrewMethods.brewMethodID;

-- UPDATE --
-- Get a list of coffeeReviewIDs for the drop-down choice
SELECT coffeeReviewID FROM CoffeeReviews;

-- Get a single coffee review's data for Update Coffee Review form
SELECT coffeeReviewID, reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID
FROM CoffeeReviews
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;

-- Update coffee review data based on submission of Update Coffee Review form
UPDATE CoffeeReviews
SET reviewDate = @reviewDateInput,
    aroma = @aromaInput,
    flavor = @flavorInput,
    afterTaste = @afterTasteInput,
    body = @bodyInput,
    acidity = @acidityInput,
    reviewNotes = @reviewNotesInput,
    coffeeBeanID = (SELECT coffeeBeanID FROM CoffeeBeans WHERE roastName = @roastNameInput AND brandName = @brandNameInput),
    brewMethodID = (SELECT brewMethodID FROM BrewMethods WHERE name = @nameInput),
    userID = (SELECT userID FROM Users WHERE userName = @userNameInput)
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;

-- DELETE --
-- Delete coffee review data upon submission of Delete action on Coffee Review form
DELETE FROM CoffeeReviews
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;


-- ** CoffeeBeans ** --

-- CREATE --
-- Add a new coffee bean
INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes) 
VALUES (@brandNameInput, @roastNameInput, @singleOriginCountryInput, @roastLevelInput, @providedTastingNotesInput);

-- READ --
-- Get all coffee beans for the Coffee Bean page
SELECT brandName AS Brand, roastName AS "Roast Name", singleOriginCountry AS "Origin", roastLevel AS Roast, providedTastingNotes AS "Tasting Notes" 
FROM CoffeeBeans;

-- UPDATE --
-- Get a list of coffeeBeanIDs for the drop-down choice
SELECT coffeeBeanID FROM CoffeeBeans;

-- Get a single coffee bean record based on selection of coffeeBeanID
SELECT brandName AS Brand, roastName AS "Roast Name", singleOriginCountry AS "Origin", roastLevel AS Roast, providedTastingNotes AS "Tasting Notes" 
FROM CoffeeBeans 
WHERE coffeeBeanID = @coffeeBeanID_selected_from_updateCoffeeBeanForm;

-- Update data based on submission of Update Coffee Bean form
UPDATE CoffeeBeans 
SET brandName = @brandNameInput, 
    roastName = @roastNameInput, 
    singleOriginCountry = @singleOriginCountryInput, 
    roastLevel = @roastLevelInput, 
    providedTastingNotes = @providedTastingNotesInput 
WHERE coffeeBeanID = @coffeeBeanID_selected_from_updateCoffeeBeanForm;

-- DELETE --
-- Delete coffee bean data upon submission of Delete action on Coffee Bean form
DELETE FROM CoffeeBeans WHERE coffeeBeanID = @coffeeBeanID_selected_from_CoffeeBean_page;


-- ** Varietals ** --

-- CREATE --
-- Add a new varietal
INSERT INTO Varietals (name) VALUES (@nameInput);

-- READ --
-- Get all varietals for the Varietals page 
SELECT * FROM Varietals;

-- UPDATE --
-- Get a list of varietalIDs for the drop-down choice
SELECT varietalID FROM Varietals;

-- Get data for the varietal chosen from the drop-down to update
SELECT name FROM Varietals WHERE varietalID = @varietalID_selected_from_updateVarietalsForm;

-- Update values based on submission of Update Varietals form
UPDATE Varietals 
SET name = @nameInput 
WHERE varietalID = @varietalID_selected_from_updateVarietalsForm;

-- DELETE --
-- Delete varietal data upon submission of Delete action on Varietals form
DELETE FROM Varietals WHERE varietalID = @varietalID_selected_from_Varietals_Page;


-- ** CoffeeBeansVarietals ** --

-- CREATE --
-- Add a new CoffeeBeansVarietals relationship
INSERT INTO CoffeeBeansVarietals (coffeeBeanID, varietalID) 
VALUES (
    (SELECT coffeeBeanID FROM CoffeeBeans WHERE roastName = @roastNameInput AND brandName = @brandNameInput),
    (SELECT varietalID FROM Varietals WHERE name = @varietalNameInput)
);

-- READ --
-- Get all CoffeeBeansVarietals relationships
SELECT CoffeeBeansVarietals.coffeeBeanVarietalID,
       CoffeeBeans.roastName,
       Varietals.name AS varietalName
FROM CoffeeBeansVarietals
JOIN CoffeeBeans ON CoffeeBeansVarietals.coffeeBeanID = CoffeeBeans.coffeeBeanID
JOIN Varietals ON CoffeeBeansVarietals.varietalID = Varietals.varietalID;

-- UPDATE --
-- Get a list of coffeeBeanVarietalIDs for the drop-down choice
SELECT coffeeBeanVarietalID FROM CoffeeBeansVarietals;

-- Get data for the coffeeBeanVarietal chosen from the drop-down to update
SELECT CoffeeBeans.roastName, Varietals.name AS varietalName
FROM CoffeeBeansVarietals
JOIN CoffeeBeans ON CoffeeBeansVarietals.coffeeBeanID = CoffeeBeans.coffeeBeanID
JOIN Varietals ON CoffeeBeansVarietals.varietalID = Varietals.varietalID
WHERE CoffeeBeansVarietals.coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalsForm;

-- Update values based on submission of Update Coffee Beans Varietals form
UPDATE CoffeeBeansVarietals
SET coffeeBeanID = (SELECT coffeeBeanID FROM CoffeeBeans WHERE roastName = @roastNameInput AND brandName = @brandNameInput),
    varietalID = (SELECT varietalID FROM Varietals WHERE name = @varietalNameInput)
WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalsForm;

-- DELETE --
-- Delete coffee bean varietal relationship upon submission of Delete action on Coffee Beans Varietals form
DELETE FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_CoffeeBeansVarietals_Page;
