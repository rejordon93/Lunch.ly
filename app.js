import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";

const app = express();

// Parse body for urlencoded (non-JSON) data
app.use(bodyParser.urlencoded({ extended: false }));
nunjucks.configure("templates", {
  autoescape: true,
  express: app,
});

app.use(routes);

/** 404 handler */
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/** General error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error.html", { err });
});

export default app;
