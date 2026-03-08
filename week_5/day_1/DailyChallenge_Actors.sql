-- 1. Count how many actors are in the table.

select count(*) from actors

-- 2. Try to add a new actor with some blank fields. What do you think that the outcome will be ?
insert into actors (first_name, last_name, birthday, number_oscars)
values('John', , '08/10/1990', 5)

-- produce an error because the column requires a value (NOT NULL)