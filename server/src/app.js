const express = require("express");
const bodyParser = require("body-parser"); //used to process json data sent in an HTTP request body
const cors = require("cors"); //middleware that takes care of security of our application
const morgan = require("morgan"); //log HTTP requests and errors, and simplifies the process

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.send({
    message: "hello",
  });
});
const port = 8081;
app.listen(process.env.PORT || port);

console.log("running on port 8081");
