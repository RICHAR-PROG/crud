var express = require('express');
var router = express.Router();
const libosContollers=require("../controllers/librosControllers")

var multer = require("multer");
var fecha = Date.now();
var rutaAlmacen=multer.diskStorage(
    {
        destination:function (request,file,callback) {
            
            callback(null,"./public/images");

        },
        filename:function (request,file,callback) {
            console.log(file);
            callback(null,fecha+"_"+file.originalname);
        }
    }


);

var cargar =new multer({storage:rutaAlmacen});


/* GET home page. */
router.get('/', libosContollers.index);
router.get('/crear', libosContollers.crear);
router.post('/',cargar.single("archivo"),libosContollers.guardar);
router.post('/eliminar/:id',libosContollers.eliminar);

module.exports = router;
