DROP TABLE IF EXISTS overviewInfo;
DROP DATABASE IF EXISTS overview;
CREATE DATABASE overview;

CREATE TABLE overviewInfo (
    restaurant_id INT,
    street_address TEXT,
    cross_street TEXT,
    neighborhood TEXT,
    brunch_hrs TEXT,
    lunch_hrs TEXT,
    dinner_hrs TEXT,
    food_type TEXT,
    dining_style TEXT,
    dress_code TEXT,
    payment_options TEXT,
    chef TEXT,
    website TEXT,
    phone_number TEXT,
    longitude FLOAT,
    latitude FLOAT
);
