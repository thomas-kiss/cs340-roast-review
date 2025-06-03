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
DROP PROCEDURE IF EXISTS sp_UpdateVarietals;
DROP PROCEDURE IF EXISTS sp_DeleteUser;
DROP PROCEDURE IF EXISTS sp_DeleteBrewMethod;



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


-- UPDATE varietals Procedure
CREATE PROCEDURE sp_UpdateVarietals(IN p_id int, p_name varchar(45))

BEGIN
    UPDATE Varietals SET name = p_name WHERE varietalID= p_id; 
END //


-- DELETE Users Procedure
DELIMITER //
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
DELIMITER //
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