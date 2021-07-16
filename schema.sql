-- DB Schema

-- create table
create table movies (
  id serial primary key,
  name varchar(64)
);

--  insert example
insert into movies (name) values ('Star Wars Episode 1 Phantom Menace');
insert into movies (name) values ('Gladiator');
insert into movies (name) values ('The Matrix');
insert into movies (name) values ('Shawshank Redemption');
insert into movies (name) values ('Soul');
insert into movies (name) values ('Finding Nemo');
insert into movies (name) values ('Inside Out');

--select from table
select * from movies;

--  delete example
delete from movies where id = '3';

-- delete table *care advised*
drop table movies;

-- display tables
\dt
-- display users
\du