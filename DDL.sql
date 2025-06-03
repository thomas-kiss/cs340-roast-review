/* 
Course: OSU CS340 Intro to Databases
Group: Group 2
Team Name: Team 2
Project Title: Roast Review
Group Members: Thomas Kiss, Katlin Hopkins
*/


/*
Citation for PL/SQL wrapper
Date: 05/20/2025
Adapted from provided canvas code
Source URL:https://canvas.oregonstate.edu/courses/1999601/assignments/10006390?module_item_id=25352972
*/

/* 
Citation for SET statement
Date: 05/01/2025
Copied from provided canvas code
Source URL: https://canvas.oregonstate.edu/courses/1999601/assignments/10006385?module_item_id=25352941
*/

DROP PROCEDURE IF EXISTS sp_load_coffeedb; 
DELIMITER // 

-- Proc will be called to load the coffee database and when the user presses the RESET button in the UI, 
-- which will reset the schema back to its original state.
CREATE PROCEDURE sp_load_coffeedb()
BEGIN
    
SET FOREIGN_KEY_CHECKS = 0; 

DROP TABLE IF EXISTS Users; 

CREATE TABLE Users (
    userID INT auto_increment not Null, 
    userName varchar(45) not Null,  
    email varchar(225) not Null, 
    firstName varchar(45),
    lastName varchar(45),
    location varchar(225),
    joinDate timestamp not Null,
    PRIMARY KEY (userID), 
    UNIQUE KEY userName_UNIQUE (userName), 
    UNIQUE KEY email_UNIQUE (email),
    UNIQUE KEY userID_UNIQUE (userID)
); 

DROP TABLE IF EXISTS BrewMethods; 

CREATE TABLE BrewMethods ( 
    brewMethodID int auto_increment not Null, 
    name varchar(100) not Null, 
    description TEXT,
    PRIMARY KEY (brewMethodID), 
    UNIQUE KEY name_UNIQUE (name), 
    UNIQUE KEY brewMethodID_UNIQUE (brewMethodID)
); 


DROP TABLE IF EXISTS CoffeeBeans; 

CREATE TABLE CoffeeBeans (
    coffeeBeanID int auto_increment not Null,
    brandName varchar(45) not Null,
    roastName varchar(45) not Null,
    singleOriginCountry varchar(225), 
    roastLevel varchar(45),
    providedTastingNotes TEXT,
    PRIMARY KEY (coffeeBeanID),
    UNIQUE KEY uniqueCoffee (brandName, roastName), 
    UNIQUE KEY coffeeBeanID_UNIQUE (coffeeBeanID)
); 

DROP TABLE IF EXISTS Varietals; 

CREATE TABLE Varietals (
    varietalID int auto_increment not Null, 
    name varchar(45) not Null, 
    PRIMARY KEY (varietalID),
    UNIQUE KEY varietalID_UNIQUE (varietalID), 
    UNIQUE KEY name_UNIQUE (name)
);

DROP TABLE IF EXISTS CoffeeBeansVarietals; 

CREATE TABLE CoffeeBeansVarietals (
    coffeeBeanVarietalID int auto_increment not Null, 
    coffeeBeanID int,
    varietalID int,
    PRIMARY KEY (coffeeBeanVarietalID),
    FOREIGN KEY (coffeeBeanID) REFERENCES CoffeeBeans (coffeeBeanID) 
    ON DELETE CASCADE,
    FOREIGN KEY (varietalID) REFERENCES Varietals (varietalID)
    ON DELETE CASCADE, 
    UNIQUE KEY coffeeBeanVarietalID (coffeeBeanVarietalID) 
); 

DROP TABLE IF EXISTS CoffeeReviews; 

CREATE TABLE CoffeeReviews (
    coffeeReviewID int auto_increment not Null, 
    reviewDate timestamp not Null, 
    aroma decimal(4,2) not Null, 
    flavor decimal(4,2) not Null, 
    afterTaste decimal(4,2) not Null, 
    body decimal(4,2) not Null, 
    acidity decimal(4,2) not Null, 
    reviewNotes text not Null, 
    coffeeBeanID int Null, 
    brewMethodID int Null, 
    userID int Null, 
    PRIMARY KEY (coffeeReviewID), 
    FOREIGN KEY (coffeeBeanID) REFERENCES CoffeeBeans (coffeeBeanID) ON DELETE SET NULL, 
    FOREIGN KEY (brewMethodID) REFERENCES BrewMethods (brewMethodID) ON DELETE SET NULL, 
    FOREIGN KEY (userID) REFERENCES Users (userID) ON DELETE SET NULL, 
    UNIQUE KEY coffeeReviewID_UNIQUE (coffeeReviewID)
); 

DELIMITER ;

INSERT INTO Users(
    userName,
    email, 
    firstName,
    lastName, 
    location, 
    joinDate
) 
VALUES (
    'cat909', 
    'coffee4lyfe@fake.com', 
    'Catherine', 
    'Smith', 
    'Kansas City, MO', 
    '2025-04-29 00:03:30'
), 
( 
    'testUser1234', 
    'ilovecoffee@fake.com', 
    'John', 
    'Doe', 
    'Corvallis, OR', 
    '2024-01-04 15:45:35'
), 
(
    'Brew_tiful', 
    'moreaboutcoffee@fake.com', 
    'Joe', 
    'Williams', 
    'New York, NY', 
    '2020-08-25 05:23:56'
); 

INSERT INTO BrewMethods (
    name, 
    description
) 
VALUES (
    'Pour Over', 
    'hot water is slowly poured over coffee grounds held in a filter. The coffee slowly drips from the filter into a cup'
), 
( 
    'French Press', 
    'coffee grounds are steeped in hot water, then the grounds are separated from the coffee'
), 
(
    'Cold Brew', 
    'coffee grounds are steeped in cold water for multiple hours, then the grounds are separated from the coffee'
);

INSERT INTO CoffeeBeans (
    brandName, 
    roastName, 
    singleOriginCountry, 
    roastLevel,
    providedTastingNotes
) 
VALUES (
/*Citation for Data for Messenger Coffee Co coffee Beans
Date: 05/01/2025
Data extracted from Source URL and used in insert statement
Source URL: https://messengercoffee.co/products
*/
    'Messenger Coffee Co', 
    'Maria Reyes Washed', 
    'Honduras', 
    'Light', 
    'pineapple, star anise, sugar cookie'
), 
(
/*Citation for Data for Messenger Coffee Co coffee Beans
Date: 05/01/2025
Data extracted from Source URL and used in insert statement
Source URL: https://messengercoffee.co/products
*/
    'Messenger Coffee Co', 
    'Elkin Guzman Hydro-Honey Natural', 
    'Colombia', 
    'Light', 
    'finely aged burgundy wine, 78% dark chocolate, starfruit'
), 
(
/*
Citation for data for Cafe Britt coffee beans
Date: 05/01/2025
Data extracted from Source URL and used in insert statement
Source URL: https://www.cafebritt.com/collections/gourmet-coffee/products/costa-rican-tres-rios-valdivia-coffee
*/
    'Café Britt', 
    'Costa Rican Tres Rios Valdivia Coffee', 
    'Costa Rica', 
    'Medium', 
    'Allspice, Orange Citrus, Plum'
); 

INSERT INTO Varietals ( 
    name
)
VALUES (
    'Arabica'
), 
(
    'Pacas'
), 
(
    'Catuai'
), 
(
    'Orange Bourbon'
); 

INSERT INTO CoffeeBeansVarietals ( 
    coffeeBeanID, 
    varietalID
)
VALUES (
    (SELECT coffeeBeanID from CoffeeBeans WHERE roastName = 'Maria Reyes Washed'), 
    (SELECT varietalID from Varietals WHERE name = 'Pacas')
), 
(
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Maria Reyes Washed'), 
    (SELECT varietalID from Varietals where name = 'Catuai')

),
(
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Costa Rican Tres Rios Valdivia Coffee'), 
    (SELECT varietalID from Varietals where name = 'Arabica')
), 
(
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Elkin Guzman Hydro-Honey Natural'), 
    (SELECT varietalID from Varietals where name = 'Orange Bourbon')
);

INSERT INTO CoffeeReviews (
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
)
VALUES (
    '2025-01-01', 
    10,
    10, 
    10,
    10,
    10, 
    'great way to kick off the new year. Amazing!',
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Maria Reyes Washed'),
    (SELECT brewMethodID from BrewMethods where name = 'Pour Over'), 
    (SELECT userID from Users where userName = 'Brew_tiful')
), 
(
    '2025-02-15', 
    3,
    4, 
    4,
    6,
    8, 
    "tried this as a cold brew and I don't particularly like it this way.. The flavors fell flat, the aroma dulled, and the afterTaste very odd",
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Maria Reyes Washed'),
    (SELECT brewMethodID from BrewMethods where name = 'Cold Brew'), 
    (SELECT userID from Users where userName = 'Brew_tiful')
), 
(
    '2025-03-31', 
    7,
    6, 
    8,
    6,
    10, 
    "such a unique flavor, I wonder if that's due to the hyrdo honey processing of the beans?",
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Elkin Guzman Hydro-Honey Natural'),
    (SELECT brewMethodID from BrewMethods where name = 'French Press'), 
    (SELECT userID from Users where userName = 'testUser1234')
),
(
    '2025-03-31', 
    7,
    6, 
    8,
    6,
    10, 
    "the aroma was so promising but the flavor fell flat. Overall acidity was balanced",
    (SELECT coffeeBeanID from CoffeeBeans where roastName = 'Costa Rican Tres Rios Valdivia Coffee'),
    (SELECT brewMethodID from BrewMethods where name = 'Pour Over'),
    (SELECT userID from Users where userName = 'cat909')
); 

/* Citation for Set
Date: 05/01/2025
Copied from provided canvas code
Source URL: https://canvas.oregonstate.edu/courses/1999601/assignments/10006385?module_item_id=25352941
*/ 

SET FOREIGN_KEY_CHECKS = 1; 

END //

DELIMITER ;
