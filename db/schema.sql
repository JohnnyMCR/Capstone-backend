DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS forums;
DROP TABLE IF EXISTS donations_comments;
DROP TABLE IF EXISTS donations;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    zipcode INTEGER NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);



CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    title VARCHAR ,
    content TEXT ,
    date DATE, 
    category VARCHAR
);



CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    forum_id INTEGER REFERENCES forums (id),
    user_id INTEGER REFERENCES users (id),
    content TEXT ,
    date DATE 
);



CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    category VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    date DATE NOT NULL,
    img VARCHAR
);



CREATE TABLE donations_comments (
    id SERIAL PRIMARY KEY,
    donation_post_id INTEGER REFERENCES donations (id),
    user_id INTEGER REFERENCES users (id),
    content VARCHAR NOT NULL,
    date DATE NOT NULL
);



CREATE TABLE likes (
    forum_id INTEGER REFERENCES forums (id),
    user_id INTEGER REFERENCES users (id),
    PRIMARY KEY (forum_id, user_id) 
);

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);



