-- PART I

-- 1. Create 2 tables: Customer and Customer profile
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER REFERENCES Customer(id) UNIQUE
);

-- 2. Insert customers
INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- 3. Insert customer profiles using subqueries
-- John is loggedIn
INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT true, id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe';

-- Jerome is not logged in
INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT false, id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu';

-- 4. Use Joins to display data

-- The first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even those without a profile
SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn
-- This includes those with isLoggedIn = false AND those without a profile (since they aren't logged in)
SELECT COUNT(*)
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;

-- PART II

-- 1. Create table named Book
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- 2. Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- 3. Create table named Student
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

-- 4. Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- 5. Create table named Library (Junction Table)
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- 6. Add records in the junction table using subqueries
INSERT INTO Library (student_fk_id, book_fk_id, borrowed_date) VALUES
((SELECT student_id FROM Student WHERE name = 'John'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), '2022-02-15'),
((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), '2021-03-03'),
((SELECT student_id FROM Student WHERE name = 'Lera'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), '2021-05-23'),
((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'Harry Potter'), '2021-08-12');

-- 7. Display the data

-- Select all the columns from the junction table
SELECT * FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT ROUND(AVG(s.age), 2) AS average_age
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table, what happened in the junction table?
-- Answer: Because of "ON DELETE CASCADE", the corresponding records in the Library table will be automatically deleted.
DELETE FROM Student WHERE name = 'Patrick';
-- Patrick didn't borrow any books in our sample data, let's delete John to see the effect if we were running this.
DELETE FROM Student WHERE name = 'John';
-- After deleting John, his record in Library (borrowing Alice in Wonderland) would be removed.
