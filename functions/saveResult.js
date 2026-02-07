const fs = require("fs");
const path = require("path");

// path ไปยัง db.json (เผื่อรันบน cloud)
const DB_PATH = path.join(__dirname, "db.json");

// API KEY (จาก env)
const API_KEY = process.env.API_KEY || "123456";


exports.saveResult = (req, res) => {

  // Allow CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type,x-api-key");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  // Check API KEY
  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(403).send("Forbidden");
  }

  const tree = req.body.tree;

  if (!tree) {
    return res.status(400).send("Missing tree");
  }


  // Load DB
  let db = {
    sunflower:0,
    cactus:0,
    bamboo:0,
    reed:0,
    white:0
  };

  if (fs.existsSync(DB_PATH)) {
    db = JSON.parse(fs.readFileSync(DB_PATH));
  }


  // Validate
  if (db[tree] === undefined) {
    return res.status(400).send("Bad tree type");
  }


  // Update
  db[tree]++;

  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));


  res.json({
    status: "success",
    tree: tree,
    count: db[tree]
  });
};
