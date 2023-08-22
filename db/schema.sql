DROP DATABASE IF EXISTS carevillage_dev;

CREATE DATABASE carevillage_dev;

\c carevillage_d


CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password
    address VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);