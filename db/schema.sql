DROP DATABASE IF EXISTS carevillage_dev;

CREATE DATABASE carevillage_dev;

\c carevillage_dev


CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password
    address VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);

DROP TABLE IF EXISTS forums;

CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERNCES user (id),
    title VARCHAR NOT NULL,
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    category VARCHAR NOT NULL
);

DROP TABLE IF EXISTS comment;

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERNCES forums (id),
    user_id INTEGER REFERNCES user (id),
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL
);

DROP TABLE IF EXISTS donations;

CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERNCES user (id),
    category VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    img VARCHAR
);

DROP TABLE IF EXISTS donations_comment;

CREATE TABLE donations_comment (
    id PRIMARY SERIAL KEY,
    donation_post_id INTEGER REFERNCES donations (id),
    user_id INTEGER REFERNCES user (id),
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
    post_id INTEGER REFERNCES forums (id),
    user_id INTEGER REFERNCES user (id)
);




