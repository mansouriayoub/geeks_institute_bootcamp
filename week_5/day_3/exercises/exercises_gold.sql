--exercises gold
--exercise 1

--1
select * from rental where return_date is null

--2
select c.customer_id, c.first_name, c.last_name, count(*) from customer c 
join rental r on c.customer_id = r.customer_id
where r.return_date is null
group by c.customer_id, c.first_name, c.last_name

--3
select title, category, actors from film_list 
where category = 'Action' and actors ilike '%Joe Swank%'