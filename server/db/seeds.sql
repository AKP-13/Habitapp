DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;
-- DROP TABLE IF EXISTS running;
-- DROP TABLE IF EXISTS water;

CREATE TABLE users (
    userID serial PRIMARY KEY,
    username varchar(30) NOT NULL,
    userPassword varchar(30) NOT NULL,
    userEmail varchar(60) NOT NULL
);
CREATE TABLE habits (
    userID INT NOT NULL,
    habitType varchar(20) NOT NULL,
    habitGoal INT NOT NULL,
    habitProgress INT NOT NULL,
    habitStart DATE DEFAULT CURRENT_DATE NOT NULL,
    habitDuration INT NOT NULL
);
-- CREATE TABLE running (
--     userID INT,
--     userTarget INT NOT NULL,
--     userProgress INT NOT NULL,
--     startDate DATE DEFAULT CURRENT_DATE NOT NULL,
--     daysForGoal INT NOT NULL
-- );
-- CREATE TABLE water (
--     userID INT,
--     userTarget INT NOT NULL,
--     userProgress INT NOT NULL,
--     startDate DATE DEFAULT CURRENT_DATE NOT NULL,
--     daysForGoal INT NOT NULL
-- );
INSERT INTO users (username, userPassword, userEmail) VALUES
(
    'admin',
    'admin',
    'email@email.com'
),
(
    'test',
    'password',
    'address@address.co.uk'
);

INSERT INTO habits (userID, habitType, habitGoal, habitProgress, habitDuration) VALUES
(
    1,
    'Running',
    10,
    3,
    14
),
(
    2,
    'Water',
    5,
    1,
    7
)
-- INSERT INTO running (userID, userTarget, userProgress, daysForGoal) VALUES
-- (
--     1,
--     10,
--     3,
--     14
-- ),
-- (
--     2,
--     5,
--     1,
--     7
-- );
-- INSERT INTO water (userID, userTarget, userProgress, daysForGoal) VALUES
-- (
--     1,
--     5,
--     0,
--     7
-- ),
-- (
--     2,
--     15,
--     12,
--     7
-- );