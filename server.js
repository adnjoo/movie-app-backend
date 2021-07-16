
//import dependencies
const express = require("express");
const cors = require("cors");
const controller = require("./controller.js");
const port = process.env.PORT;

const timeout = require('connect-timeout')


//let app = a new express instance, and use CORS and JSON
const app = express();
app.use(cors());
app.use(express.json());

app.use(timeout('5s'))

//add a movie
app.post("/", controller.addMovie);

//get the movie
app.get("/", controller.getMovies);

//edit the movie name
app.put("/", controller.editMovie);

//delete a movie
app.delete("/", controller.deleteMovie);

//listening on port
app.listen(port || 4001 , () => {
  console.log(`Serving on port ${port}`);
});
