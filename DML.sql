/* Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

/*
The at symbol - @ - is being used throughout to denote the variables that will have data from the backend programming language
*/

--** Users **--
 
-- CREATE --  
-- add a new user
INSERT INTO Users (userName, email, firstName, lastName, location, joinDate)  
VALUES (@userNameInput, @emailInput, @firstNameInput, @lastNameInput, @locationInput, @joinDateInput);
 
-- READ --
-- get all users for the user page
SELECT userID, userName, email, firstName, lastName, location, joinDate  
FROM Users;
 
-- UPDATE --  
-- get a single user's data for Update User form
SELECT userID, userName, email, firstName, lastName, location, joinDate  
FROM Users  
WHERE userID = @userID_selected_from_User_page;
 
-- update user data based on submission of Update User form
UPDATE Users  
SET userName = @userNameInput, email = @emailInput, firstName = @firstNameInput, lastName = @lastNameInput, location = @locationInput, joinDate = @joinDateInput  
WHERE userID = @userID_selected_from_User_page;
 
-- DELETE --
-- delete a user data upon submission of Delete action on User form
DELETE FROM Users WHERE userID = @userID_selected_from_User_page;
 
 
 
--** Brew Methods **--
 
-- CREATE --  
-- add a new brew method
INSERT INTO BrewMethods (name, description)  
VALUES (@nameInput, @descriptionInput);
 
-- READ --  
-- get all brew methods for the Brew Methods page
SELECT brewMethodID, name, description  
FROM BrewMethods;
 
-- UPDATE --
-- get a single brew method data for Update Brew Method form
SELECT brewMethodID, name, description  
FROM BrewMethods  
WHERE brewMethodID = @brewMethodID_selected_from_page;
 
-- update a brew method data based on submission of Update Brew Method form
UPDATE BrewMethods  
SET name = @nameInput, description = @descriptionInput  
WHERE brewMethodID = @brewMethodIDInput;
 
-- DELETE --
-- delete a brew method data upon submission of Delete action on Brew Method form
DELETE FROM BrewMethods WHERE brewMethodID = @brewMethodID_selected_from_page;
 
 
 
--** Coffee Reviews **--
 
-- Create --
-- get UserNames from Users table to populate UserName dropdown
SELECT userName FROM Users;
 
-- get userID from Users table based on UserName selected, to be used in the Insert into CoffeeReviews query
SELECT userID FROM Users WHERE userName = @userName_selected_from_coffeeReviewsForm;
 
-- get names from BrewMethods table to populate Brew Method dropdown
SELECT name FROM BrewMethods;
 
-- get brewMethodID from BrewMethods table based on name selected, to be used in the Insert into CoffeeReviews query
SELECT brewMethodID FROM BrewMethods WHERE name = @name_selected_from_coffeeReviewsForm;
 
-- get roastName from CoffeeBeans table to populate Coffee Bean dropdown
SELECT roastName FROM CoffeeBeans;
 
-- get coffeeBeanID based on roastName selected, to be used in the Insert into CoffeeReviews query
SELECT coffeeBeanID FROM CoffeeBeans WHERE roastName = @roastName_selected_from_coffeeReviewsForm;
 
-- add a new coffee review 
INSERT INTO CoffeeReviews (reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID)  
VALUES (@reviewDateInput, @aromaInput, @flavorInput, @afterTasteInput, @bodyInput, @acidityInput, @reviewNotesInput, @coffeeBeanIDInput, @brewMethodIDInput, @userIDInput);
 
-- READ --
-- get all coffee reviews for Coffee Reviews page
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
 
-- UPDATE --
-- get a single coffee review's data for Update Coffee Review form
SELECT coffeeReviewID, reviewDate, aroma, flavor, afterTaste, body, acidity, reviewNotes, coffeeBeanID, brewMethodID, userID
FROM CoffeeReviews
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;
 
-- update a coffee review data based on submission of Update Coffee Review form
UPDATE CoffeeReviews
SET reviewDate = @reviewDateInput,
    aroma = @aromaInput,
    flavor = @flavorInput,
    afterTaste = @afterTasteInput,
    body = @bodyInput,
    acidity = @acidityInput,
    reviewNotes = @reviewNotesInput,
    coffeeBeanID = @coffeeBeanIDInput,
    brewMethodID = @brewMethodIDInput,
    userID = @userIDInput
WHERE coffeeReviewID = @coffeereviewID_selected_from_CoffeeReviews_page;
 
-- DELETE --
-- delete a coffee review data upon submission of Delete action on Coffee Review form
DELETE FROM CoffeeReviews
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;



--** CoffeeBeans **--

-- Create --
--add a new coffee bean
INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes) VALUES (@brandNameInput, @roastNameInput, @singleOriginCountryInput, @roastLevelInput, @providedTastingNotesInput)

-- Read --
  
--get all coffee beans for the Coffee Bean page
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans

-- Update --

--get the list of coffeeBeanIDs to populate the list of choices
SELECT coffeeBeanID from CoffeeBeans

--get a single coffee bean record based on selection of coffeeBeanID
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans WHERE coffeeBeanID = @coffeeBeanID_selected_from_updateCoffeeBeanForm

--update data based on submission of Update Coffee Bean form
UPDATE CoffeeBeans SET brandName = @brandNameInput, roastName = @roastNameInput, singleOriginCountry = @singleOriginCountryInput, roastLevel = @roastLevelInput, providedTastingNotes = @providedTastingNotesInput WHERE coffeeBeanID = @coffeeBeanID_selected_from_updateCoffeeBeanForm

-- Delete --
  
-- delete coffee bean data upon submission of Delete action on Coffee Bean form
DELETE FROM CoffeeBeans WHERE coffeeBeanID = @coffeeBeanID_selected_from_CoffeeBean_page


  
--** Varietals **--

-- Create --

--add a new varietal
INSERT INTO Varietals (name) VALUES (@nameInput)

-- Read --

--get all varietals for the Varietals page 
SELECT * from Varietals

-- Update --

--get a list of varietals for the drop down choice of varietals to update
SELECT varietalID FROM Varietals

--get data for the varietal that was chosen from the drop down, to then update
SELECT varietalName from Varietals WHERE varietalID = @varietalID_selected_from_updateVarietalsForm

--update the values based on submission of the Update Varietals Form
UPDATE Varietals SET name = @nameInput WHERE varietalID = @varietalID_selected_from_updateVarietalsForm

-- Delete --

-- delete the varietal data upon submission of delete action on Varietals form
DELETE FROM Varietals WHERE varietalID = @varietalID_selected_from_Varietals_Page
  


--** CoffeeBeansVarietals **--

-- Create --

--add a new coffeeBeanVarietal relationship
INSERT INTO CoffeeBeansVarietals (cofffeeBeanID, varietalID) VALUES (@coffeeBeanIDInput, @varietalIDInput)

-- Read --

--get all varietals for the Varietals page 
SELECT * from CoffeeBeansVarietals

-- Update --

--get a list of varietals for the drop down choice of coffeebeanvarietals to update
SELECT coffeeBeanVarietalID FROM CoffeeBeansVarietals

--get data for the coffeebeanvarietal that was chosen from the drop down, to then update
SELECT coffeeBeanID, varietalID from CoffeeBeanVarietals WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm

--update the values based on submission of the Update Varietals Form
UPDATE coffeeBeanID, varietalID SET coffeeBeanID = @coffeeBeanIDInput, varietalID = @varietalInput WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm

-- Delete --
-- delete the coffeebeanvarietal data upon submission of delete action on CoffeeBeansVarietals form
DELETE FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm
