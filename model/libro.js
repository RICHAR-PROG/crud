module.exports={
    obtener :function (conexion,funcion) {
        conexion.query("select*from libros",funcion);

    },
    insertar:function (conexion,datos,archivos,funcion) {

        conexion.query("INSERT INTO libros (nombre ,imagen) VALUES (?,?)",[datos.nombre,archivos.filename],funcion);

    },
    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("select*from libros where id=?",[id],funcion);
    }

}