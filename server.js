require('dotenv').config();

//import dependencies
const express = require("express");
const cors = require("cors");
const controller = require("./controller.js");
const port = process.env.PORT || 4001;

// console.log(port)


//let app = a new express instance, and use CORS and JSON
const app = express();
app.use(cors());
app.use(express.json());

//add a movie
app.post("/", controller.addMovie);

//get the movie
app.get("/", controller.getMovies);

//edit the movie name
app.put("/", controller.editMovie);

//delete a movie
app.delete("/", controller.deleteMovie);

//listening on port
app.listen(4001, () => {
  console.log(`Serving on port ${port}`);
});
