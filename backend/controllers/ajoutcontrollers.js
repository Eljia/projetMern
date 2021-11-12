// const User = require("../models/User");
// const Annonce = require("../models/Annonce");
// const ajoutAnnonce = async (req, res) => {
//   const { category, country, price, cautionnement, description, image, user } =
//     req.body;
//   // nouvel Annonce

//   try {
//     const annonce = new Annonce({
//       category,
//       country,
//       price,
//       cautionnement,
//       description,
//       image,
//       user,
//     });
//     await annonce.save();
//     res.send({
//       annonce: {
//         category,
//         country,
//         price,
//         cautionnement,
//         description,
//         image,
//         user,
//       },
//     });
//   } catch (error) {
//     res.status(409).json({ msg: error.msg });
//   }
// };
// module.exports = {
//   ajoutAnnonce,
// };
