const mysql = require("mysql");
const express = require("express");

var config = require("../config/config");
const app = express();
const cors = require("cors");


// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});


app.use(cors());
app.use(express.json());


app.post("/create", (req, res) => {
  const name = req.body.name;
  const phone_number  = req.p.number;


  db.query(
    "INSERT INTO seller (name,phone_number) VALUES (?,?)",
    [name, age,phone_number],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/seller", (req, res) => {
  db.query("SELECT * FROM seller", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const phone_number = req.body.phone_number;
  db.query(
    "UPDATE seller SET name=?,phone_number=? WHERE id = ?",
    [name,phone_number, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM seller WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
