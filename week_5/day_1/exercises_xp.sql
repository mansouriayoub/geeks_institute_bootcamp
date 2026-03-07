-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


create table items (
	item_id serial primary key,
	item_name varchar(50) not null,
	price numeric
)
/*
1 - Small Desk – 100 (ie. price)
2 - Large desk – 300
3 - Fan – 80
*/
insert into items (item_name,price)values
('Small Desk',100),('Large desk',300),('Fan',80)


create table customers (
	customer_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(100) not null
)

/*1 - Greg - Jones
2 - Sandra - Jones
3 - Scott - Scott
4 - Trevor - Green
5 - Melanie - Johnson*/
insert into customers (first_name, last_name)
	values('Greg','Jones'),('Sandra','Jones'),
	('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson')

select * from items;

select * from items where price > 80;

select * from items where price <= 300;

select * from customers where last_name = 'Smith';

select * from customers where last_name = 'Jones';

select * from customers where first_name != 'Scott';












