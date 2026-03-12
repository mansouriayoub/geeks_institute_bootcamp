-- Database: restaurant_db

-- DROP DATABASE IF EXISTS restaurant_db;

CREATE DATABASE restaurant_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

create table menu_items (
	item_id serial primary key,
	item_name varchar(30),
	item_price smallint default 0
)

select * from menu_items