var mysql=require("mysql");
var con =mysql.createConnection({
    host: "localhost" ,
    user:"richar",
    password:"1234",
    database:"biblioteca"
});
con.connect(
    (err)=>{
        if(!err){
            console.log("conexion establecida");
        }
        else{
            console.log("error de conexion ");
        }
    }

);
module.exports=con;