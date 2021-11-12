const User = require("../models/User");
const Product = require("../models/Product");
const ajoutProduct = async (req, res) => {
  const {
    name,
    numero,
    address,
    tarifJ,
    tarifS,
    tarifM,
    caution,
    message,
    ville,
    category,
    // user,
  } = req.body;
  // nouvel Annonce

  try {
    const product = new Product({
      name,
      numero,
      address,
      tarifJ,
      tarifS,
      tarifM,
      caution,
      message,
      ville,
      category,
      // user,
    });
    await product.save();
    res.send({
      product: {
        name,
        numero,
        address,
        tarifJ,
        tarifS,
        tarifM,
        caution,
        message,
        ville,
        category,
        // user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  ajoutProduct,
};
