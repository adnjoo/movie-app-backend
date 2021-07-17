
//import dependencies
const express = require("express");
const cors = require("cors");
const controller = require("./controller.js");
const port = process.env.PORT;

const timeout = require('connect-timeout')

const haltOnTimedout = (req, res, next) => {
  if (!req.timedout) {
    next();
  }
}

//let app = a new express instance, and use CORS and JSON
const app = express();
app.use(timeout('5s'))

app.use(cors());
app.use(express.json());
//proceed beyond cors and json only if request hasn't timed out
app.use(haltOnTimedout)


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






//help
//https://medium.com/dataseries/add-timeout-capability-to-express-apps-with-connect-timeout-fce06d76e07a