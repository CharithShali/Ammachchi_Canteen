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
        reject(new Error("from  todaymenu"));
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
      let { seller_id,name,image } =
        details;
        console.log(name);
  let sql = `INSERT INTO food_item(seller_id,name,image)
      VALUES('${seller_id}','${name}','${image}')`;
                
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

  function addcompliant(details) {
    return new Promise(async (resolve, reject) => {
      let { C_date,subject,description,customer_id } =
        details;
        console.log(C_date);
  let sql = `INSERT INTO complaint( C_date,subject,description,customer_id)
      VALUES('${C_date}','${subject}','${description}','${customer_id}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from complaint"));
      });
    });
  }



  function customer() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM customer`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });
  }


  function addCustomer(details) {
    return new Promise(async (resolve, reject) => {
      let { name,email,password} =
        details;
        console.log(name);
  
  let sql = `INSERT INTO customer(name,email,password)
      VALUES('${name}','${email}','${password}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addcustomer"));
      });

    });
  }
  
  module.exports = {
    getMenuInfo: getMenuInfo,
    addSeller: addSeller,
    seller:seller,
    addtodaymenu:addtodaymenu,
    addfooditem:addfooditem,
    customer: customer,
    addCustomer:addCustomer,

  };
  