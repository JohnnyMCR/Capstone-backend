DROP DATABASE IF EXISTS carevillage_dev;

CREATE DATABASE carevillage_dev;

\c carevillage_dev;

DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    zipcode INTEGER NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

DROP TABLE IF EXISTS forums;

CREATE TABLE forums (
    post_id SERIAL PRIMARY KEY,
    profile_id INTEGER REFERENCES profiles (id),
    title VARCHAR ,
    content TEXT ,
    date DATE, 
    category VARCHAR
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES forums (post_id),
    profile_id INTEGER REFERENCES profiles (id),
    content TEXT ,
    date DATE 
);

DROP TABLE IF EXISTS donations;

CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    profile_id INTEGER REFERENCES profiles (id),
    category VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    date DATE NOT NULL,
    img VARCHAR
);

DROP TABLE IF EXISTS donations_comments;

CREATE TABLE donations_comments (
    id SERIAL PRIMARY KEY,
    donation_post_id INTEGER REFERENCES donations (id),
    profile_id INTEGER REFERENCES profiles (id),
    content VARCHAR NOT NULL,
    date DATE NOT NULL
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
    post_id INTEGER REFERENCES forums (post_id),
    profile_id INTEGER REFERENCES profiles (id),
    PRIMARY KEY (post_id, profile_id) 
);

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);



