## getting started

[install psql](https://www.postgresql.org/download/)

terminal:

```
psql -d postgres
```

inside psql:

```
create role movie_user with login password 'root';

alter role my_user createdb;

create database movie_database;

quit
```
log back in psql as my_user
```
psql -d movie_database -U movie_user;
```

see schema.sql for more psql commands

## run server

```
node server.js
```