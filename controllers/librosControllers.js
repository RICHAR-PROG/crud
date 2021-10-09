var conexion=require("../config/conexion");
var libro =require("../model/libro");


module.exports={
    index:function (reg, res) {
       
        libro.obtener(conexion,function (err,datos) {
            console.log(datos);

            res.render('libros/index', { title: 'Aplicacion',libros:datos});
        });

       
    },
    crear:function (req,res) {
        res.render("libros/crear");
    },
    guardar:function (req,res ){
        //res.send(req.body);
        console.log(req.body);
        console.log(req.file.filename);

        libro.insertar(conexion,req.body,req.file,function (err) {
             res.redirect('/libros');
        });
        
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);
        libro.retornarDatosID(conexion,req.params.id,function (err,registros) {
            var nombreImagen="public/images/"+(registros[0].imagen);
            res.send(nombreImagen);
        });

    }
}