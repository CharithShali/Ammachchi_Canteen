const mysql = require("mysql");
var config = require("../config/config");

// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});

function getMenuInfo() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM today_menu`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from  getSellers Info"));
      });
    });
  }
 

  function addSeller(details) {
    return new Promise(async (resolve, reject) => {
      let { name,phone_number } =
        details;
        console.log(name);
  
  let sql = `INSERT INTO seller(name,phone_number)
      VALUES('${name}','${phone_number}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
        reject(new Error("from addSeller"));
});
    });
  }

  function addtodaymenu(details) {
    return new Promise(async (resolve, reject) => {
      let { food_item_id,name } =
        details;
        console.log(name);
  let sql = `INSERT INTO today_menu(food_item_id,name)
      VALUES('${food_item_id}','${name}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addtodaymenu"));
      });
    });
  }


  function seller() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM seller`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from getSellersInfo"));
      });
    });
  }

  function addfooditem(details) {
    return new Promise(async (resolve, reject) => {
      let { seller_id,name } =
        details;
        console.log(name);
  let sql = `INSERT INTO food_item(seller_id,name)
      VALUES('${seller_id}','${name}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addfooditem p"));
      });
    });
  }
  
  module.exports = {
    getMenuInfo: getMenuInfo,
    addSeller: addSeller,
    seller:seller,
    addtodaymenu:addtodaymenu,
    addfooditem:addfooditem,

  };
  
  //