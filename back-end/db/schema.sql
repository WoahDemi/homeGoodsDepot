DROP TABLE IF EXISTS homes;

CREATE TABLE homes (
    id SERIAL PRIMARY KEY, 
    address TEXT,
    state VARCHAR(2),
    number_of_bathrooms INTEGER,
    number_of_bedrooms INTEGER,
    price INTEGER,
    parking BOOLEAN,
    property_type TEXT,
    image TEXT,
    saved BOOLEAN NOT NULL DEFAULT FALSE
);