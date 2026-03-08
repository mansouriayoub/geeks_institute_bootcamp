-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

--create

--1
CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

--2
create table students (
	student_id serial primary key,
	first_name varchar(100) not null,
	last_name varchar(100) not null,
	birth_date date not null
);

--this line for birth_date format
SET datestyle = dmy;

--insert

--1
insert into students (first_name,last_name,birth_date)
values('Marc','Benichou','02/11/1998'),
('Yoan','Cofen','03/12/2010'),
('Lea','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Omer','Simpson','03/10/1980')

--2
insert into students (first_name,last_name,birth_date)
values('Eyup', 'Adam', '01/01/1999');

--select

--1
select * from students;

--2
select first_name, last_name from students;

--3-1
select first_name, last_name from students where student_id = 2;

--3-2
select first_name, last_name from students where (first_name ='Marc' and last_name='Benichou');

--3-3
select first_name, last_name from students where (first_name ='Marc' or last_name='Benichou');

--3-4
select first_name, last_name from students where first_name like '%a%';

--3-5
select first_name, last_name from students where first_name ilike 'a%';

--3-6
select first_name, last_name from students where first_name like '%a';

--3-7
select first_name, last_name from students where first_name like '%a_';

--3-8
select * from students where student_id in (1,3);

--4
select * from students where birth_date >= '1/01/2000';



















