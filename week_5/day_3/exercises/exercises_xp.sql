--🌟 Exercise 1: DVD Rental

--1-Get a list of all the languages, from the language table.
select * from language

/*
2-Get a list of all films joined with their languages – select the following details : 
film title, description, and language name.
*/
select film.title, film.description, language.name as language_name from film
join language on film.language_id = language.language_id

/*
3-Get all languages, even if there are no films in those languages 
– select the following details : film title, description, and language name.
*/
select film.title, film.description, language.name as language_name from film
left join language on film.language_id = language.language_id

/*
4-Create a new table called new_film with the following columns : 
id, name. Add some new films to the table.
*/
create table new_film (
	id serial primary key,
	name varchar(100)
)

insert into new_film (name) 
values ('Inception'),
('The Matrix'),
('Interstellar'),
('Avatar'),
('Titanic');

/*
5-Create a new table called customer_review, 
which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, 
its review should be automatically deleted.
It should have the following columns:
*/
/*
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.
*/
create table customer_review (
	review_id serial primary key,
	film_id int not null,
	language_id int not null,
	title varchar(255),
	score int check (score between 1 and 10),
	review_text text,
	last_update timestamp default current_timestamp,

	constraint fk_film
		foreign key (film_id)
		references new_film(id)
		on delete cascade,

	constraint fk_language
		foreign key (language_id)
		references language(language_id)
)

/*Add 2 movie reviews. Make sure you link them to valid objects in the other tables.*/
insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values (1, 1, 'Great Movie', 9, 'Very interesting story and great acting.', CURRENT_TIMESTAMP),
(2, 1, 'Good Sci-Fi', 8, 'Exciting and visually impressive film.', CURRENT_TIMESTAMP);

/*Delete a film that has a review from the new_film table, 
what happens to the customer_review table?*/
delete from new_film where id = 1



--🌟 Exercise 2 : DVD Rental

--1-Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT language_id, name
FROM language;

UPDATE film SET language_id = 4 WHERE title = 'ACADEMY DINOSAUR';

SELECT title, language_id FROM film WHERE title IN ('ACADEMY DINOSAUR', 'ACE GOLDFINGER', 'ADAPTATION HOLES');

/*
2-Which foreign keys (references) are defined for the customer table? 
How does this affect the way in which we INSERT into the customer table?
*/
--The `customer` table has foreign keys: `store_id` referencing `store(store_id)` and `address_id` referencing `address(address_id)`.
--This means you must insert valid `store_id` and `address_id` values that already exist before adding a customer.



/*
3-We created a new table called customer_review. Drop this table. 
Is this an easy step, or does it need extra checking?
*/

drop table customer_review
--This is usually easy, but you should check if any other tables have foreign keys referencing it—dropping it would fail or require CASCADE

/*
4-Find out how many rentals are still outstanding 
(ie. have not been returned to the store yet).
*/
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT rental_id, customer_id, rental_date
FROM rental
WHERE return_date IS NULL;

select * from rental

/*
5-Find the 30 most expensive movies which are outstanding 
(ie. have not been returned to the store yet)
*/
SELECT f.title, f.rental_rate, r.rental_date, r.rental_id
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

/*
6-Your friend is at the store, and decides to rent a movie. 
He knows he wants to see 4 movies, but he can’t remember their names. 
Can you help him find which movies he wants to rent?
*/

--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
	--and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

--The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
