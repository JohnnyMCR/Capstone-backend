


INSERT INTO profiles (username, password, zipcode, email)
VALUES
  ('new_parent1', 'password1', '11105', 'parent1@example.com'),
  ('new_parent2', 'password2', '11103', 'parent2@example.com'),
  ('expecting_parent1', 'password3', '11234', 'expecting1@example.com');

INSERT INTO forums (user_id, title, content, date, category)
VALUES
  (1, 'New Parent Forum 1', 'This is the content of New Parent Forum 1.', '2023-09-16', 'Newborn'),
  (2, 'New Parent Forum 2', 'This is the content of New Parent Forum 2.', '2023-09-17', 'Expecting'),
  (3, 'New Parent Forum 3', 'This is the content of New Parent Forum 3.', '2023-09-18', 'Newborn');

INSERT INTO comments (post_id, user_id, content, date)
VALUES
  (1, 1, 'Comment 1 on New Parent Forum 1', '2023-09-16'),
  (2, 2, 'Comment 1 on New Parent Forum 2', '2023-09-17'),
  (3, 3, 'Comment 1 on New Parent Forum 3', '2023-09-18');

INSERT INTO categories (name)
VALUES
  ('Newborn'),
  ('Expecting');

INSERT INTO donations (user_id, category, title, description, date)
VALUES
  (1, 'Charity', 'Supporting Local Baby Supplies Drive', 'Donating baby supplies for newborns in need.', '2023-08-10'),
  (2, 'Education', 'Donating Parenting Books', 'Contributing parenting books for expecting parents.', '2023-08-15');




