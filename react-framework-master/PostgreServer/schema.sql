DROP DATABASE IF EXISTS Restaurant;

CREATE DATABASE Restaurant;
USE Restaurant;

CREATE TABLE restaurant (
    restaurant_id SERIAL PRIMARY KEY,
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
    longitude NUMERIC,
    latitude NUMERIC

);

INSERT INTO restaurant (street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude)
  VALUES ('street address', 'the cross street', ' neg1 neg2 neg3', '8:00 am to 0:00 pm', '1:00 am to 4:00 pm', '5:00 pm to 10:00 pm', 'non','quo','dress cooode', 'expedita, veniam, repellendus', 'Brenden', 'http://janis.com', '(640) 257-7396', 158.2089, -73.3205);
