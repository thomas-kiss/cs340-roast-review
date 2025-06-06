/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

/*
Citation for DELETE BrewMethod and DELETE User Procedures 
Date: 06/02/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

/*
Citation for CREATE BrewMethod Procedure 
Date: 05/21/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/



DROP PROCEDURE IF EXISTS sp_CreateBrewMethod;
DROP PROCEDURE IF EXISTS sp_DeleteUser;
DROP PROCEDURE IF EXISTS sp_DeleteBrewMethod;
DROP PROCEDURE IF EXISTS sp_CreateCoffeeBeans;
DROP PROCEDURE IF EXISTS sp_CreateVarietal;
DROP PROCEDURE IF EXISTS sp_UpdateCoffeeBean;
DROP PROCEDURE IF EXISTS sp_UpdateVarietal;
DROP PROCEDURE IF EXISTS sp_DeleteCoffeeBean;
DROP PROCEDURE IF EXISTS sp_DeleteVarietal;
DROP PROCEDURE IF EXISTS sp_CreateCoffeeBeanVarietal; 
DROP PROCEDURE IF EXISTS sp_UpdateCoffeeBeanVarietal;
DROP PROCEDURE IF EXISTS sp_DeleteCoffeeBeanVarietal;


DELIMITER //

-- CREATE BrewMethod Procedure
CREATE PROCEDURE sp_CreateBrewMethod(
    IN p_name VARCHAR(100), 
    IN p_description TEXT,
    OUT p_brewMethodID INT
)
BEGIN
    INSERT INTO BrewMethods (name, description)
    VALUES (p_name, p_description);

    -- Get the ID of the newly inserted brew method
    SELECT LAST_INSERT_ID() INTO p_brewMethodID;

    -- Also return the ID directly
    SELECT LAST_INSERT_ID() AS 'new_brew_method_id';
END //


-- CREATE Varietals Procedure
CREATE PROCEDURE sp_CreateVarietal(
    IN p_name VARCHAR(100), 
    OUT p_varietalID INT
)
BEGIN
    INSERT INTO Varietals (name)
    VALUES (p_name);

    -- Get the ID of the newly inserted brew method
    SELECT LAST_INSERT_ID() INTO p_varietalID;

    -- Also return the ID directly
    SELECT LAST_INSERT_ID() AS 'new_varietal_id';
END //


-- UPDATE Varietals Procedure
CREATE PROCEDURE sp_UpdateVarietal(IN p_id int, p_name varchar(45))

BEGIN
    UPDATE Varietals SET name = p_name WHERE varietalID= p_id; 
END //



-- DELETE Varietals Procedure
CREATE PROCEDURE sp_DeleteVarietal(IN p_id INT)
BEGIN
    DECLARE error_message VARCHAR(255);

    -- error handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        DELETE FROM Varietals WHERE varietalID = p_id;

        IF ROW_COUNT() = 0 THEN
            SET error_message = CONCAT('No matching record found in Varietals for id: ', p_id);
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    COMMIT;
END //


-- CREATE CoffeeBeans Procedure
CREATE PROCEDURE sp_CreateCoffeeBean(
    IN p_brandName VARCHAR(100), 
    IN p_roastName VARCHAR(100),
    IN p_origin VARCHAR(100),
    IN p_roastLevel varchar(100),
    IN p_providedTastingNotes TEXT,
    OUT p_coffeeBeanID INT
)
BEGIN
    INSERT INTO CoffeeBeans (brandName, roastName, singleOriginCountry, roastLevel, providedTastingNotes)
    VALUES (p_brandName, p_roastName, p_origin, p_roastLevel, p_providedTastingNotes);

    -- Get the ID of the newly inserted brew method
    SELECT LAST_INSERT_ID() INTO p_coffeeBeanID;

    -- Also return the ID directly
    SELECT LAST_INSERT_ID() AS 'new_coffee_bean_id';
END //


-- UPDATE CoffeeBeans Procedure
CREATE PROCEDURE sp_UpdateCoffeeBean(IN p_id int,    
    IN p_brandName VARCHAR(100), 
    IN p_roastName VARCHAR(100),
    IN p_origin VARCHAR(100),
    IN p_roastLevel varchar(100),
    IN p_providedTastingNotes TEXT)

BEGIN
    UPDATE CoffeeBeans 
    SET 
        brandName = p_brandName,
        roastName = p_roastName,
        singleOriginCountry = p_origin, 
        roastLevel = p_roastLevel, 
        providedTastingNotes = p_providedTastingNotes
    WHERE coffeeBeanID= p_id; 
END //



-- DELETE CoffeeBeans Procedure
CREATE PROCEDURE sp_DeleteCoffeeBean(IN p_id INT)
BEGIN
    DECLARE error_message VARCHAR(255);

    -- error handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        DELETE FROM CoffeeBeans WHERE coffeeBeanID = p_id;

        IF ROW_COUNT() = 0 THEN
            SET error_message = CONCAT('No matching record found in Coffee Beans for id: ', p_id);
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    COMMIT;
END //




-- CREATE CoffeeBeanVarietals Procedure
CREATE PROCEDURE sp_CreateCoffeeBeanVarietal(
    IN p_coffeeBeanID int,
    IN p_varietalID int,
    OUT p_coffeeBeanVarietalID INT
)
BEGIN
    INSERT INTO CoffeeBeansVarietals (coffeeBeanID, varietalID)
    VALUES (p_coffeeBeanID, p_varietalID);

    -- Get the ID of the newly inserted brew method
    SELECT LAST_INSERT_ID() INTO p_coffeeBeanVarietalID;

    -- Also return the ID directly
    SELECT LAST_INSERT_ID() AS 'new_coffee_bean_varietal_id';
END //


-- UPDATE CoffeeBeanVarietal Procedure
CREATE PROCEDURE sp_UpdateCoffeeBeanVarietal(IN p_id int,    
    IN p_coffeeBeanID int, 
    IN p_varietalID int
    )

BEGIN
    UPDATE CoffeeBeansVarietals 
    SET 
        coffeeBeanID = p_coffeeBeanID,
        varietalID = p_varietalID
    WHERE coffeeBeanVarietalID= p_id; 
END //



-- DELETE CoffeeBeanVarietal Procedure
CREATE PROCEDURE sp_DeleteCoffeeBeanVarietal(IN p_id INT)
BEGIN
    DECLARE error_message VARCHAR(255);

    -- error handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        DELETE FROM CoffeeBeansVarietals WHERE coffeeBeanVarietalID = p_id;

        IF ROW_COUNT() = 0 THEN
            SET error_message = CONCAT('No matching record found in Coffee Beans by Varietals for id: ', p_id);
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    COMMIT;
END //


-- DELETE Users Procedure
CREATE PROCEDURE sp_DeleteUser(IN p_id INT)
BEGIN
    DECLARE error_message VARCHAR(255);

    -- error handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        DELETE FROM Users WHERE userID = p_id;

        IF ROW_COUNT() = 0 THEN
            SET error_message = CONCAT('No matching record found in Users for id: ', p_id);
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    COMMIT;
END //


-- DELETE BrewMethod Procedure
CREATE PROCEDURE sp_DeleteBrewMethod(IN p_id INT)
BEGIN
    DECLARE error_message VARCHAR(255);

    -- error handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        DELETE FROM BrewMethods WHERE brewMethodID = p_id;

        IF ROW_COUNT() = 0 THEN
            SET error_message = CONCAT('No matching record found in BrewMethods for ID: ', p_id);
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    COMMIT;
END //
DELIMITER ;