// use dot env
// require('dotenv').config()

// const db = (process.env.DATABASE_URL || 'postgres://esgmoucoufbmbt:7581b425617244b40da0ea61b92e765fa615561d9e3ed653aefc42b96ac9ee5c@ec2-23-20-124-77.compute-1.amazonaws.com:5432/d6rlju8g18l7s1')

//import postgres
const { Pool, Client } = require("pg")

const pool = new Pool({
  connectionString: 'postgres://esgmoucoufbmbt:7581b425617244b40da0ea61b92e765fa615561d9e3ed653aefc42b96ac9ee5c@ec2-23-20-124-77.compute-1.amazonaws.com:5432/d6rlju8g18l7s1',
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

pool.query('SELECT * from movies;', (err, res) => {
  console.log(res.rows)
});

//local db
const pool1 = new Pool({
  user: "movie_user",
  host: "localhost",
  database: "movie_database",
  password: "root",
  port: 5432,
});

//get movies
function getMovies(req, res) {
  let movies;
  pool.connect()
  pool.query("select * from movies;", (error, results) => {
    movies = results.rows;
    res.status(200).send(movies);
  });
}

//add a movie
function addMovie(req, res) {
  let movies;
  console.log(req.body);
  pool.query(
    "insert into movies (name) values ($1);",
    [req.body.movie],
    (err, results) => {
      movies = results;
      res.status(200).send(movies);
    }
  );
}

//delete a movie
function deleteMovie(req, res) {
  let movie;
  console.log(req.body);
  pool.query(
    "delete from movies where id = $1;",
    [req.body.id],
    (err, results) => {
      movie = results;
      res.status(200).send(movie);
    }
  );
}

//edit movie name
function editMovie(req, res) {
  let movie;
  console.log(req.body)
  pool.query(
    'update movies set name = $1 where id = $2;',
    [req.body.name, req.body.id],
    (err,results)=>{
      movie = results;
      res.status(200).send(movie)
    }
  )
}

module.exports = {
  addMovie,
  getMovies,
  editMovie,
  deleteMovie,
};
