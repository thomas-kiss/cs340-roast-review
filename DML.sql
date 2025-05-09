/* Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

/*
The colon : character is being used throughout to denote the variables that will have data from the backend programming language
*/

-------------------------------------
-- Users
-------------------------------------


-------------------------------------
-- BrewMethods
-------------------------------------

-------------------------------------
-- CoffeeReviews
-------------------------------------

-------------------------------------
-- CoffeeBeans
-------------------------------------

--CREATE

--add a new coffee bean
INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes) VALUES (:brandNameInput, :roastNameInput, :singleOriginCountryInput, :roastLevelInput, :providedTastingNotesInput)

--READ
  
--get all coffee beans for the Coffee Bean page
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans

--UPDATE

--get the list of coffeeBeanIDs to populate the list of choices
SELECT coffeeBeanID from CoffeeBeans

--get a single coffee bean record based on selection of coffeeBeanID
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans WHERE coffeeBeanID = :coffeeBeanID_selected_from_updateCoffeeBeanForm

--update data based on submission of Update Coffee Bean form
UPDATE CoffeeBeans SET brandName = :brandNameInput, roastName = :roastNameInput, singleOriginCountry = :singleOriginCountryInput, roastLevel = :roastLevelInput, providedTastingNotes = :providedTastingNotesInput WHERE coffeeBeanID = :coffeeBeanID_selected_from_updateCoffeeBeanForm

-- DELETE 
  
-- delete coffee bean data upon submission of Delete action on Coffee Bean form
DELETE FROM CoffeeBeans WHERE coffeeBeanID = :coffeeBeanID_selected_from_CoffeeBean_page


-------------------------------------
-- Varietals
-------------------------------------

--CREATE

--add a new varietal
INSERT INTO Varietals (name) VALUES (:nameInput)

--READ

--get all varietals for the Varietals page 
SELECT * from Varietals

--UPDATE

--get a list of varietals for the drop down choice of varietals to update
SELECT varietalID FROM Varietals

--get data for the varietal that was chosen from the drop down, to then update
SELECT varietalName from Varietals WHERE varietalID = :varietalID_selected_from_updateVarietalsForm

--update the values based on submission of the Update Varietals Form
UPDATE Varietals SET name = :nameInput WHERE varietalID = :varietalID_selected_from_updateVarietalsForm

--DELETE

-- delete the varietal data upon submission of delete action on Varietals form
DELETE FROM Varietals WHERE varietalID = :varietalID_selected_from_Varietals_Page

-------------------------------------
-- CoffeeBeansVarietals
-------------------------------------

--CREATE

--add a new coffeeBeanVarietal relationship
INSERT INTO CoffeeBeansVarietals (cofffeeBeanID, varietalID) VALUES (:coffeeBeanIDInput, :varietalIDInput)

--READ

--get all varietals for the Varietals page 
SELECT * from CoffeeBeansVarietals

--UPDATE

--get a list of varietals for the drop down choice of coffeebeanvarietals to update
SELECT coffeeBeanVarietalID FROM CoffeeBeansVarietals

--get data for the coffeebeanvarietal that was chosen from the drop down, to then update
SELECT coffeeBeanID, varietalID from CoffeeBeanVarietals WHERE coffeeBeanVarietalID = :coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm

--update the values based on submission of the Update Varietals Form
UPDATE coffeeBeanID, varietalID SET coffeeBeanID = :coffeeBeanIDInput, varietalID = :varietalInput WHERE coffeeBeanVarietalID = :coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm

--DELETE

-- delete the coffeebeanvarietal data upon submission of delete action on CoffeeBeansVarietals form
DELETE FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = :coffeeBeanVarietalID_selected_from_UpdateCoffeeBeanVarietalForm
