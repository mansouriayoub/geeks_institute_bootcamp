-- Exercise 1 : Items and customers

select * from items order by price asc;

select * from items where price >= 80 order by price desc;

select * from customers order by first_name asc limit 3;

select last_name from customers order by last_name desc;


-- Exercise 2 : dvdrental database

--1
select * from customer

--2
select first_name || ' ' || last_name as full_name from customer

--3
select distinct create_date from customer

--4
select * from customer order by first_name desc

--5
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc

--6
select address, phone from address where district = 'Texas'

--7
select * from film where film_id in (15,150)

--8
select film_id,title, description, length,  rental_rate from film where title like '%Spiderman'

--9
select film_id,title, description, length,  rental_rate from film where title like 'Sp%'

--10
select title, rental_rate from film order by rental_rate asc limit 10

--11
select title, rental_rate from film order by rental_rate asc offset 10 fetch first 10 rows only

--12
select 
	customer.customer_id,
	customer.first_name, 
	customer.last_name,
	payment.amount,
	payment.payment_date
	from customer inner join payment
	on customer.customer_id = payment.customer_id
	order by customer.customer_id asc

select * from inventory

--13
--select film.film_id, inventory.inventory_id from film where not exists(select 1 from inventory where inventory.film_id = film.film_id)

select film.film_id, inventory.inventory_id from film 
left join inventory on film.film_id = inventory.film_id where inventory.film_id is null

--14
select city.city as city_name, country.country as country_name from city 
join country on city.country_id = country.country_id

--15
select customer.customer_id, customer.first_name, customer.last_name,
payment.amount, payment.payment_date
from customer join payment on payment.customer_id = customer.customer_id order by payment.staff_id





















