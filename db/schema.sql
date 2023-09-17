

DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);

DROP TABLE IF EXISTS forums;

CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES profiles (id),
    title VARCHAR NOT NULL,
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    category VARCHAR NOT NULL
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES forums (id),
    user_id INTEGER REFERENCES profiles (id),
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL
);

DROP TABLE IF EXISTS donations;

CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES profiles (id),
    category VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    img VARCHAR
);

DROP TABLE IF EXISTS donations_comments;

CREATE TABLE donations_comments (
    id SERIAL PRIMARY KEY,
    donation_post_id INTEGER REFERENCES donations (id),
    user_id INTEGER REFERENCES profiles (id),
    content VARCHAR NOT NULL,
    date VARCHAR NOT NULL
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
    post_id INTEGER REFERENCES forums (id),
    user_id INTEGER REFERENCES profiles (id)
);




