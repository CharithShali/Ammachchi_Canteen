const mysql = require("mysql");
var config = require("../config/config");
const bcrypt=require("bcrypt");
const { join } = require("path");
const Joi = require("joi");


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
      sql = `SELECT * FROM today_menu `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from  todaymenu"));
      });
    });
  }
 

  function addSeller(details) {
    return new Promise(async (resolve, reject) => {
      let { name,phone_number,password } =
        details;
        console.log(name);
  let sql = `INSERT INTO seller(name,phone_number,password)
      VALUES('${name}','${phone_number}','${password}')`;
                
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


  function addcustomer(details) {
    return new Promise(async (resolve, reject) => {
      let { name,email,password,cpassword } =
        details;
        //console.log(password);
      //   const salt=await bcrypt.genSalt(10);
      //   hashpassword =await bcrypt.hash(password,salt);
      //  console.log(
      //   password,   hashpassword
      //  );

      // bcrypt.hash(password, 10, function(err, hash) {
      //   if (err) { throw (err); }
      
  let sql = `INSERT INTO customer(name,email,password)
      VALUES('${name}','${email}','${password}')`;
      
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
      
        reject(new Error("from customer"));
      });
            
    //});
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

  function complaint() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM complaint`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }


  function customer(email) {
    return new Promise((resolve, reject) => {
      console.log(email);
      sql = `SELECT * FROM customer where email = '${email}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });
  }

  function myorders(id) {
    return new Promise((resolve, reject) => {
      console.log(id);
      sql = 
      `SELECT food_item.name, orders.quantity, orders.total,orders.status
      FROM orders
      INNER JOIN food_item
      ON orders.food_id=food_item.id where orders.id = '${id}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       resolve(result);
        reject(new Error("from ordersInfo"));
      });
    });
  }
  
  function getseller(name) {
    return new Promise((resolve, reject) => {
      console.log(name);
      sql = `SELECT * FROM seller where name = '${name}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });

    
  }
  function admin(name) {
    return new Promise((resolve, reject) => {
      console.log(name);
      sql = `SELECT * FROM admin where name = '${name}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });

    
  }
  


  // function getcustomer(email) {
  //   return new Promise((resolve, reject) => {
  //     console.log("getAdmin called" , email);
  //     let sql = `SELECT * FROM customer 
  //                         WHERE email = '${email}'
  //                         LIMIT 1`;
  //     db.query(sql, (error, results) => {
  //       if (error) console.log(error.message);
  //       resolve(results);
  //       console.log(results.name)
  //       reject(new Error("from get admin"));
  //     });
  //   });
  // }
  
  module.exports = {
    getMenuInfo: getMenuInfo,
    addSeller: addSeller,
    seller:seller,
    addtodaymenu:addtodaymenu,
    addfooditem:addfooditem,
    customer: customer,
   // addCustomer:addCustomer,
    addcompliant:addcompliant,
    complaint:complaint,
    addcustomer: addcustomer,
    getseller:getseller,
    admin:admin,
    myorders:myorders
    //getcustomer:getcustomer

  };
  