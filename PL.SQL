/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/

DELIMITER //

CREATE PROCEDURE sp_reset_database()
BEGIN
    -- Drop all existing tables (reverse order)
    DROP TABLE IF EXISTS CoffeeReviews;
    DROP TABLE IF EXISTS CoffeeBeansVarietals;
    DROP TABLE IF EXISTS CoffeeBeans;
    DROP TABLE IF EXISTS Varietals;
    DROP TABLE IF EXISTS BrewMethods;
    DROP TABLE IF EXISTS Users;

    -- --- Begin DDL.SQL content ---

    CREATE TABLE Users (
        userID INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL
    );

    CREATE TABLE BrewMethods (
        methodID INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        description TEXT
    );

    CREATE TABLE CoffeeBeans (
        beanID INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        origin VARCHAR(100),
        roaster VARCHAR(100),
        roastLevel VARCHAR(50),
        brewMethodID INT,
        FOREIGN KEY (brewMethodID) REFERENCES BrewMethods(methodID)
    );

    CREATE TABLE Varietals (
        varietalID INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT
    );

    CREATE TABLE CoffeeBeansVarietals (
        beanID INT,
        varietalID INT,
        PRIMARY KEY (beanID, varietalID),
        FOREIGN KEY (beanID) REFERENCES CoffeeBeans(beanID),
        FOREIGN KEY (varietalID) REFERENCES Varietals(varietalID)
    );

    CREATE TABLE CoffeeReviews (
        reviewID INT AUTO_INCREMENT PRIMARY KEY,
        beanID INT,
        userID INT,
        rating INT CHECK (rating BETWEEN 1 AND 5),
        reviewText TEXT,
        reviewDate DATE,
        FOREIGN KEY (beanID) REFERENCES CoffeeBeans(beanID),
        FOREIGN KEY (userID) REFERENCES Users(userID)
    );

    -- --- End of DDL.SQL content ---
    
    -- --- Begin DML.SQL content ---

    INSERT INTO Users (username, email, password) VALUES 
    ('alice', 'alice@example.com', 'password123'),
    ('bob', 'bob@example.com', 'securepass'),
    ('carol', 'carol@example.com', 'coffeeisgreat');

    INSERT INTO BrewMethods (name, description) VALUES 
    ('French Press', 'Immersion method using a metal filter'),
    ('Pour Over', 'Manual brewing with a paper filter'),
    ('Espresso', 'Pressure-based brewing method');

    INSERT INTO Varietals (name, description) VALUES 
    ('Typica', 'One of the oldest coffee varietals'),
    ('Bourbon', 'Sweet and balanced varietal'),
    ('Geisha', 'Known for floral and tea-like qualities');

    INSERT INTO CoffeeBeans (name, origin, roaster, roastLevel, brewMethodID) VALUES 
    ('Ethiopia Yirgacheffe', 'Ethiopia', 'Blue Bottle', 'Light', 1),
    ('Colombia Supremo', 'Colombia', 'Stumptown', 'Medium', 2),
    ('Panama Geisha', 'Panama', 'Verve Coffee', 'Light', 3);

    INSERT INTO CoffeeBeansVarietals (beanID, varietalID) VALUES 
    (1, 1),
    (2, 2),
    (3, 3);

    INSERT INTO CoffeeReviews (beanID, userID, rating, reviewText, reviewDate) VALUES 
    (1, 1, 5, 'Floral and citrusy. Amazing clarity!', '2024-01-10'),
    (2, 2, 4, 'Balanced and sweet, great mouthfeel.', '2024-02-15'),
    (3, 3, 5, 'Elegant and complex. A must-try.', '2024-03-20');

    -- --- End of DML.SQL content ---
END //

DELIMITER ;



-- #############################
-- CREATE Brew Method
-- #############################

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

DELIMITER ;
