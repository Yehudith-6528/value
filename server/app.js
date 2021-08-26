const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3002;
const moviesRoute = require("./routes/movies.route");

app.listen(port, () => {
  console.log(`listening at port:${port}`);
});

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/*', (req, res, next) => {
  console.log("in route ", req.baseUrl)
  next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", moviesRoute);
