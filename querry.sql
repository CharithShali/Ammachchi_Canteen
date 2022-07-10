create database Ammachchi_Canteen_DB;
USE ammachchi_canteen_db;

CREATE TABLE `Seller` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `phone_number` INT(10) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `food_item` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `seller_id` INT(5) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY (`seller_id`) REFERENCES `Seller`(`id`)
);

CREATE TABLE `today_menu` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `food_item_id` INT(5) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY (`food_item_id`) REFERENCES `food_item`(`id`)
);
CREATE TABLE `customer` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `orders` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `total` INT(5) NOT NULL,
 `customer_id` INT(5) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customer`(`id`)
);

CREATE TABLE `order_food` (
  `order_id` INT(5) NOT NULL,
  `food_item_id` INT(10) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`),
  FOREIGN KEY (`food_item_id`) REFERENCES `food_item`(`id`)
);
CREATE TABLE `admin` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
 `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Complaint` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `C_date` DATE,
  `subject` VARCHAR(100) NOT NULL,
  `description` VARCHAR(200),
  `customer_id` INT(10) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customer`(`id`)
);

