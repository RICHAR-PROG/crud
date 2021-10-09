var express = require('express');
var router = express.Router();
const libosContollers=require("../controllers/librosControllers")

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send("Bienvenido a la biblioteca");
});

module.exports = router;
