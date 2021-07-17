console.log(require('dotenv').config())
require("dotenv").config();

//import postgres
const { Pool, Client } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

//local db
// const pool1 = new Pool({
//   user: "movie_user",
//   host: "localhost",
//   database: "movie_database",
//   password: "root",
//   port: 5432,
// });

//get movies
function getMovies(req, res) {
  let movies;
  console.log(req.body);

  pool
    .query("select * from movies;")
    .then((results) => {
      movies = results.rows;
      res.status(200).send(movies);
    })
    .catch((err) => console.log(err));
}

//add a movie
function addMovie(req, res) {
  let movies;
  // console.log(req.body);
  pool
    .query("insert into movies (name) values ($1);",[req.body.movie])
    .then((results) => {
      movies = results;
      res.status(200).send(movies);
    })
    .catch((err) => console.log(err));
}

//delete a movie
function deleteMovie(req, res) {
  let movie;
  console.log(req.body);
  pool
    .query("delete from movies where id = $1;",[req.body.id])
    .then((results) => {
      movie = results;
      res.status(200).send(movie);
    })
    .catch((err) => console.log(err));
}

//edit movie name
function editMovie(req, res) {
  let movie;
  console.log(req.body);
  pool
    .query("update movies set name = $1 where id = $2;",[req.body.name, req.body.id])
    .then((results) => {
      movie = results;
      res.status(200).send(movie);
    })
    .catch((err) => console.log(err));
}

module.exports = {
  addMovie,
  getMovies,
  editMovie,
  deleteMovie,
};
