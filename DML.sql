-------------------------------------
-- CoffeeBeans
-------------------------------------

--CREATE--
--add a new coffee bean
INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes) VALUES (:brandNameInput, :roastNameInput, :singleOriginCountryInput, :roastLevelInput, :providedTastingNotesINput)

--READ--
--get all coffee beans for the Coffee Bean page
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans

--UPDATE--
--get a single coffee bean data for Update Coffee Bean form 
SELECT brandName as Brand, roastName as "Roast Name", singleOriginCountry as "Origin", roastLevel as Roast, providedTastingNotes as "Tasting Notes" FROM CoffeeBeans WHERE brandName = :brandName_selected_from_CoffeBean_page AND roastName = :roastName_selected_from_CoffeeBean_page

--update data based on submission of Update Coffee Bean form
UPDATE CoffeeBeans SET brandName = :brandNameInput, roastName = :roastNameInput, singleOriginCountry = :singleOriginCountryInput, roastLevel = :roastLevelInput, providedTastingNotes = :providedTastingNotesInput

-- delete coffee bean data upon submission of Delete action on Coffee Bean form. Also deletes coffeebeanIDs from CoffeeBeanVarietals table due to cascade.
DELETE FROM CoffeeBeans WHERE brandName = :brandName_selected_from_CoffeBean_page AND roastName = :roastName_selected_from_CoffeeBean_page


-------------------------------------
-- CoffeeReviews
-------------------------------------
