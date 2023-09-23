\c carevillage_dev;

INSERT INTO profiles (username, password, zipcode, email)
VALUES
  ('john_doe', 'password1', '11105', 'john@example.com'),
  ('jane_smith', 'password2', '11103', 'jane@example.com'),
      ('user3', 'password3', '11234', 'user3@example.com');


INSERT INTO forums (user_id, title, content, date, category)
VALUES
  (1, 'Forum 1', 'This is the content of Forum 1.', '2023-09-16', 'General'),
    (2, 'Forum 2', 'This is the content of Forum 2.', '2023-09-17', 'Tech'),
    (3, 'Forum 3', 'This is the content of Forum 3.', '2023-09-18', 'Science');
  

INSERT INTO comments (post_id, user_id, content, date)
VALUES
  (1, 1, 'Comment 1 on Forum 1', '2023-09-16'),
    (2, 2, 'Comment 1 on Forum 2', '2023-09-17'),
    (3, 3, 'Comment 1 on Forum 3', '2023-09-18');

  INSERT INTO categories (name)
VALUES
    ('Newborn'),
    ('Expecting'),
    ('Only Parent');

INSERT INTO donations (user_id, category, title, description, date)
VALUES
  (1, 'Charity', 'Supporting Local Food Drive', 'Donating non-perishable food items for the community food drive.', '2023-08-10'),
  (1, 'Education', 'Donating Books for Local School', 'Contributing books for the school library to encourage reading among students.', '2023-08-15');




