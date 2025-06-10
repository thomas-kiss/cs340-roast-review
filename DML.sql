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
-- get a single user's data for Update User form based on click of Update button on record's row
SELECT userID, userName, email, firstName, lastName, location, joinDate  
FROM Users  
WHERE userID = @userID_selected_from_User_page;
 
-- update user data based on submission of Update User form
UPDATE Users  
SET userName = @userNameInput, email = @emailInput, firstName = @firstNameInput, lastName = @lastNameInput, location = @locationInput, joinDate = @joinDateInput  
WHERE userID = @userID_selected_from_User_page;
 
-- DELETE --
-- delete a user data upon submission of Delete action on User form based on click of Delete button on record's row
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
-- get a single brew method data for Update Brew Method form based on click of Update on the record's row
SELECT brewMethodID, name, description  
FROM BrewMethods  
WHERE brewMethodID = @brewMethodID_selected_from_page;
 
-- update a brew method data based on submission of Update Brew Method form
UPDATE BrewMethods  
SET name = @nameInput, description = @descriptionInput  
WHERE brewMethodID = @brewMethodIDInput;
 
-- DELETE --
-- delete a brew method data upon submission of Delete action on Brew Method form based on click of Delete on the record's row
DELETE FROM BrewMethods WHERE brewMethodID = @brewMethodID_selected_from_page;
 
 
 
--** Coffee Reviews **--
 
-- Create --
-- get UserNames from Users table to populate UserName dropdown
SELECT userName FROM Users;
 
-- get names from BrewMethods table to populate Brew Method dropdown
SELECT name FROM BrewMethods;
 
 
-- get roastName from CoffeeBeans table to populate Coffee Bean dropdown
SELECT roastName FROM CoffeeBeans;
 
-- add a new coffee review 
INSERT INTO CoffeeReviews 
 (reviewDate, 
 aroma, 
 flavor, 
 afterTaste, 
 body, 
 acidity, 
 reviewNotes, 
 coffeeBeanID, 
 brewMethodID, 
 userID)  

 VALUES 
 (@reviewDateInput, 
 @aromaInput, 
 @flavorInput, 
 @afterTasteInput, 
 @bodyInput, 
 @acidityInput, 
 @reviewNotesInput, 
 (SELECT coffeeBeanID from CoffeeBeans WHERE roastName = @roastName_selected_from_UpdateFormDropDown), 
 (SELECT brewMethodID from BrewMethods WHERE name = @brewmethod_name_selected_from_UpdateFormDropDown), 
 (SELECT userID from Users WHERE userName = @userName_selected_from_UpdateFormDropDown)
 );
 
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
JOIN CoffeeBeans ON CoffeeReviews.coffeeBeanID = CoffeeBeans.coffeeBeanID
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
    coffeeBeanID = (SELECT coffeeBeanID from CoffeeBeans WHERE roastName = @roastName_selected_from_UpdateFormDropDown),
    brewMethodID = (SELECT brewMethodID from BrewMethods WHERE name = @brewmethod_name_selected_from_UpdateFormDropDown),
    userID = (SELECT userID from Users WHERE userName = @userName_selected_from_UpdateFormDropDown)
WHERE coffeeReviewID = @coffeereviewID_selected_from_CoffeeReviews_page;
 
-- DELETE --
-- delete a coffee review data upon submission of Delete action on Coffee Review form
DELETE FROM CoffeeReviews
WHERE coffeeReviewID = @coffeeReviewID_selected_from_CoffeeReviews_page;



--** CoffeeBeans **--

-- Create --
--add a new coffee bean
INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes) VALUES (@brandNameInput, @roastNameInput, @singleOriginCountryInput, @roastLevelInput, @providedTastingNotesInput);

-- Read --
  
--get all coffee beans for the Coffee Bean page
SELECT coffeeBeanID, brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes FROM CoffeeBeans;

-- Update --

--get a single coffee bean record based on the click of Update button on record's row
SELECT 
 coffeeBeanID, 
 brandName, 
 roastName, 
 singleOriginCountry, 
 roastLevel, 
 providedTastingNotes 
FROM CoffeeBeans
WHERE coffeeBeanID = @coffeeBeanID_selected_from_CoffeeBean_Page;

--update data based on submission of Update Coffee Bean form
UPDATE CoffeeBeans SET brandName = @brandNameInput, roastName = @roastNameInput, singleOriginCountry = @singleOriginCountryInput, roastLevel = @roastLevelInput, providedTastingNotes = @providedTastingNotesInput WHERE coffeeBeanID = @coffeeBeanID_selected_from_CoffeeBean_Page;

-- Delete --
  
-- delete coffee bean data upon submission of Delete action on Coffee Bean form
DELETE FROM CoffeeBeans WHERE coffeeBeanID = @coffeeBeanID_selected_from_CoffeeBean_page;

 
  
--** Varietals **--

-- Create --

--add a new varietal
INSERT INTO Varietals (name) VALUES (@nameInput);

-- Read --

--get all varietals for the Varietals page 
SELECT varietalID, name from Varietals;

-- Update --

--get data for the varietal that was chosen via click of Update button on record row
SELECT name from Varietals WHERE varietalID = @varietalID_selected_from_Varietals_Page;

--update the values based on submission of the Update Varietals Form
UPDATE Varietals SET name = @nameInput WHERE varietalID = @varietalID_selected_from_Varietals_Page;

-- Delete --

-- delete the varietal data upon submission of delete action on Varietals form
DELETE FROM Varietals WHERE varietalID = @varietalID_selected_from_Varietals_Page;
  


--** CoffeeBeansVarietals **--

-- Create --

--add a new coffeeBeanVarietal relationship
INSERT INTO CoffeeBeansVarietals (coffeeBeanID, varietalID) VALUES (@coffeeBeanIDInput, @varietalIDInput);

-- Read --

--get all varietals for the Varietals page 
SELECT
 CoffeeBeansVarietals.coffeeBeanVarietalID, 
 CoffeeBeansVarietals.coffeeBeanID, 
 CoffeeBeans.brandName, 
 CoffeeBeans.roastName, 
 CoffeeBeansVarietals.varietalID,
 Varietals.name
 FROM CoffeeBeansVarietals
 JOIN CoffeeBeans on CoffeeBeansVarietals.coffeeBeanID = CoffeeBeans.coffeeBeanID
 JOIN Varietals on CoffeeBeansVarietals.varietalID = Varietals.varietalID;

-- Update --

--get a list of coffee bean brand names for the drop down choices when updating the coffeebeanvarietal relationship
SELECT brandName FROM CoffeeBeans;

--get a list of coffee bean roast names for the drop down choices when updating the coffeebeanvarietal relationship
SELECT roastName FROM CoffeeBeans;

--get a list of varietal names for the drop down choices when updating the coffeebeanvarietal relationship
SELECT name FROM Varietals;

 
--get data for the coffeebeanvarietal that was chosen from the Update button on the record's row
SELECT coffeeBeanVarietalID, CoffeeBeans.brandName, CoffeeBeans.roastName, Varietals.name
 FROM CoffeeBeansVarietals
 JOIN CoffeeBeans on CoffeeBeansVarietals.coffeeBeanID = CoffeeBeans.coffeeBeanID
 JOIN Varietals on CoffeeBeansVarietals.varietalID = Varietals.varietalID
 WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_CoffeeBeansVarietals_Page;

--update the values based on submission of the Update Varietals Form
UPDATE CoffeeBeansVarietals
 SET 
 coffeeBeanID = (SELECT coffeeBeanID from CoffeeBeans WHERE brandName = @brandName_selected_from_UpdateFormDropDown AND roastName = @roastName_selected_from_UpdateFormDropDown),
 varietalID = (SELECT varietalID from Varietals WHERE name = @varietal_name_selected_from_UpdateFormDropDown)
 WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_CoffeeBeanVarietal_Page;

-- Delete --
-- delete the coffeebeanvarietal data upon submission of delete action on CoffeeBeansVarietals form
DELETE FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = @coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietal_Page;
