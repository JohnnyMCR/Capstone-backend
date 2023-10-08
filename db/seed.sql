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
  ('Clothing'),
  ('Toys'),
  ('Food'),
  ('Educational'),
  ('Other');

INSERT INTO donations (user_id, category, title, description, date, img)
VALUES
  (4, 'Other', 'Donating Baby Swing for Infants With Bluetooth Music Speaker', 'I am Donating Dream on me Zazu Motorized Baby Swing for Infants - Bluetooth Music Speaker, Still like new condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_9bb73436-6c64-4885-95ea-2d7731ddb937?wid=600&hei=600&qlt=80&fmt=webp'),
   (1, 'Educational', 'Donating Parenting Book', 'I am Donating Peaceful Parent, Happy Kids - by Laura Markham, It is a good read, in good condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_474a1a64-5f33-4593-9990-bd5fba7ef38b?wid=1200&hei=1200&qlt=80&fmt=webp'),
 (4, 'Clothing', 'Donating Baby Clothes 0-3Months', 'I am Donating Baby 5pk Sesame Street Elmo/CookieMonster/Oscar the Grouch/Big Bird Bodysuit - Red/Yellow/Blue, They are new.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_dfd1aff9-cc88-42e1-ac80-27457760152d?wid=1200&hei=1200&qlt=80&fmt=webp'),

   (2, 'Other', 'Donating Rocker Chair', 'I am Donating a Delta Children Kenwood Slim Nursery Glider Swivel Rocker Chair - Sea Breeze, Still like new condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_673c767c-ba80-47d1-8c3e-d2fbe912466e?wid=1200&hei=1200&qlt=80&fmt=webp'),
    (3, 'Other', 'Donating 5-in1 Humidifier/Sound Machine', 'I am Donating Baby Dream Machine 5-in-1 Childrens Sleep Device
, Still like new condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_3a8ad9a9-9667-4a12-88d3-19d03791a9da?wid=1200&hei=1200&qlt=80&fmt=webp'),
     (1, 'Toys', 'Donating Baby Activity Center', 'I am Donating Ingenuity Spring & Sprout 2-in-1 Baby Activity Center - First Forest, Still like new condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_ac494bda-7795-48c7-aac8-16f6d074256c?wid=1200&hei=1200&qlt=80&fmt=webp'),

     (2, 'Other', 'Donating Stroller Wagon', 'I am Donating Jeep Wrangler Stroller Wagon with Included Car Seat Adapter by Delta Children - Gray, Still like new condition.', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_32692769-b2a9-453c-9637-ead46ff76249?wid=1200&hei=1200&qlt=80&fmt=webp'),
     (1, 'Other', 'Donating Baby Carrier', 'I am Donating LILLEbaby Baby Carrier SeatMe All Seasons, Still like new condition. ', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_6dbec8f8-ab34-4bdc-a885-b325af0d403d?wid=1200&hei=1200&qlt=80&fmt=webp'),
     (4, 'Other', 'Donating Twin Nursery', 'I am Donating Baby Trend Retreat Twins Nursery Center - Quarry, Still like new condition. ', '2023-08-10', 'https://target.scene7.com/is/image/Target/GUEST_ca4db6c1-bfe0-440f-9167-8bf03e9d851e?wid=1200&hei=1200&qlt=80&fmt=webp'),

  (3, 'Other', 'Donating Baby Monitor w/2 Cameras', 'Contributing Motorola 5" WiFi HD Video Baby Monitor w/2 Cameras & PTZ - VM65-2CONNECT, It is working and the condition is like new.', '2023-08-15', 'https://target.scene7.com/is/image/Target/GUEST_8ee71c9f-98c3-40cf-8ad2-eae8c350b39c?wid=1200&hei=1200&qlt=80&fmt=webp');

INSERT INTO donations_comments (donations_id, user_id, content, date)
VALUES
  (1, 1, 'Great initiative! I will join you in donating.', '2023-09-16'),
  (2, 2, 'Thank you for your generosity!', '2023-09-17');
