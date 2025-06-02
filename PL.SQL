/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/


/*
Citation for CREATE BrewMethod Procedure 
Date: 05/21/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

DELIMITER //

-- CREATE BrewMethod Procedure

DROP PROCEDURE IF EXISTS sp_CreateBrewMethod;

DELIMITER //

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


/*
Citation for UPDATE Users Procedure 
Date: 05/28/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

DROP PROCEDURE IF EXISTS sp_UpdateUsers;
DELIMITER //

-- UPDATE Users Procedure
CREATE PROCEDURE sp_UpdateUsers(IN p_id INT, IN p_homeworld INT, IN p_age INT)

BEGIN
    UPDATE bsg_people SET homeworld = p_homeworld, age = p_age WHERE id = p_id; 
END //
DELIMITER ;


DELIMITER ;
