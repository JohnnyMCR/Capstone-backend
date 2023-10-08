INSERT INTO users (username, password, zipcode, email)
VALUES
  ('John Doe', 'password123', '12345', 'john@example.com'),
  ('Jane Smith', 'secret321', '54321', 'jane@example.com'),
  ('Katy Ann', 'babylove', '11111', 'parent@example.com'),
  ('Susan Summers', 'donate123', '22222', 'donor1@example.com');

INSERT INTO forums (user_id, title, content, date, category)
VALUES
  (1, 'New Parent Here!!', 'Hello, I am a new parent!', '2023-09-16', 'Newborn'),
  (2, 'Expecting Parents Chat', 'Excited to become parents soon!', '2023-09-17', 'Expecting'),
  (3, 'Parenting Tips and Tricks', 'Share your parenting wisdom!', '2023-09-18', 'Newborn'),
  (4, 'Donor Discussion', 'Let me talk about donations and charity.', '2023-09-19', 'Charity');

INSERT INTO comments (forum_id, user_id, content, date)
VALUES
  (1, 2, 'Welcome to the world of parenting!', '2023-09-16'),
  (2, 1, 'Congratulations on your pregnancy!', '2023-09-17'),
  (3, 3, 'I wanted to share a helpful parenting tip: Establish a consistent daily routine for your child. Children thrive on predictability and knowing what to expect. Having a regular schedule for meals, naps, playtime, and bedtime can help reduce tantrums, improve sleep patterns, and create a sense of security for your little one.', '2023-09-18'),
  (4, 4, 'I have some items to donate. How can I help?', '2023-09-19');

INSERT INTO categories (name)
VALUES
  ('Newborn'),
  ('Expecting'),
  ('Charity'),
  ('Parenting');

INSERT INTO donations (user_id, category, title, description, date, img)
VALUES
  (4, 'Charity', 'Supporting Local Baby Supplies Drive', 'Donating baby supplies for newborns in need.', '2023-08-10', 'baby-supplies.jpg'),
  (3, 'Charity', 'Donating Parenting Books', 'Contributing parenting books for expecting parents.', '2023-08-15', 'parenting-books.jpg');

INSERT INTO donations_comments (donations_id, user_id, content, date)
VALUES
  (1, 1, 'Great initiative! I will join you in donating.', '2023-09-16'),
  (2, 2, 'Thank you for your generosity!', '2023-09-17');
