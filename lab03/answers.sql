-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name from users ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id from posts WHERE user_id = 26;



-- Exercise 5
SELECT id, image_url, user_id from posts WHERE user_id = 26 OR user_id =12;



-- Exercise 6
SELECT COUNT(*) from posts;



-- Exercise 7
SELECT user_id, COUNT(*) from comments GROUP BY user_id ORDER BY count desc;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name FROM posts INNER JOIN
users ON users.id = posts.user_id WHERE posts.user_id = 12 OR posts.user_id = 26;


-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id 
FROM posts INNER JOIN following ON following.following_id = posts.user_id WHERE following.user_id = 26;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks(user_ud, post_id)
VALUES(SELECT id, user_id FROM posts WHERE post_id = 219);

INSERT INTO bookmarks(user_ud, post_id)
VALUES(SELECT id, user_id FROM posts WHERE post_id = 2220);

INSERT INTO bookmarks(user_ud, post_id)
VALUES(SELECT id, user_id FROM posts WHERE post_id = 221);




-- Exercise 12
DELETE FROM bookmarks WHERE post_id = 219 AND post_id = 220 AND post_id = 221;




-- Exercise 13
UPDATE users
SET email = knicks2022@gmail.com
WHERE id = 26;




-- Exercise 14
