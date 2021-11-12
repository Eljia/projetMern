const express = require("express");
const productrouter = express.Router();
const { ajoutProduct } = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", ajoutProduct);
module.exports = productrouter;
