const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

// Disable ETag (prevent 304)
app.disable("etag");

app.use(cors());
app.use(express.json());

// Disable cache
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

const API_KEY = process.env.API_KEY;


// Save result
app.post("/api/save", (req, res) => {

  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(403).send("Forbidden");
  }

  const tree = req.body.tree;
  const db = JSON.parse(fs.readFileSync("./db.json"));

  if (db[tree] === undefined) {
    return res.status(400).send("Bad request");
  }

  db[tree]++;

  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));

  res.send("Saved");
});


// Get stats
app.get("/api/stats", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  res.json(db);
});


app.listen(3000, () => {
  console.log("Backend running on 3000");
});

