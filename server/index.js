const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "f0180026@gmail.com",
    pass: "bere vzoi eqcx tggu",
  },
});


//fechas
const fechaHoraActual = new Date();

const fecha = fechaHoraActual.toLocaleDateString(); // Obtiene la fecha
const hora = fechaHoraActual.toLocaleTimeString();   // Obtiene la hora

// nodemailer
const mailOptions = {
  from: "tu_correo_electronico@gmail.com",
  to: ["papibrandsp@gmail.com","f0180026@gmail.com"],
  subject: "Prueba de correo electrónico con Node.js",
  html: `
  <table style="width:100%;">
  <tr style="border:1px solid black">
    <th style="border:1px solid black">Usuario</th>
    <th style="border:1px solid black">Fecha y hora</th>
    
  </tr>
  <tr>
    <td style="border:1px solid black">Alfreds Futterkiste</td>
    <td style="border:1px solid black;text-align:center">${fecha}, ${hora}</td>
   
  </tr>

</table>`,
};
// fin de nodemailer


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empleados",
});

// insertar datos
app.post("/createUsers", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;

    db.query(
      "INSERT INTO tb_empleados(name,age,country,position) values (?,?,?,?)",
      [name, age, country, position],
      (error,respuesta)=>{
        if(error){
          console.log('error')
        }
        else{
          res.send("empleado registrado")
        }
      }
    );
});

// obtener datos
app.get("/getUsers", (req, res) => {

  db.query(
    "SELECT * FROM tb_empleados",
    (error,respuesta)=>{
      if(error){
        console.log('error')
      }
      else{
        res.send(respuesta)
      }
    }
  );
});

// obtener datos login
app.get("/getLogin", (req, res) => {

  db.query(
    "SELECT * FROM user",
    (error,respuesta)=>{
      if(error){
        console.log('error')
      }
      else{
        res.send(respuesta)
      }
    }
  );
});


// actualizar
app.put("/updateUsers", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;

  db.query(
    "UPDATE tb_empleados SET name=?,age=?,country=?,position=? where id=?",
    [name, age, country, position,id],
    (error,respuesta)=>{
      if(error){
        console.log('error')
      }
      else{
        res.send("empleado actualizado")
      }
    }
  );
});

// eliminar
app.delete("/deleteUsers/:id", (req, res) => {
  const id = req.params.id;
    db.query(
    "DELETE FROM tb_empleados where id=?",id,
    (error,respuesta)=>{
      if(error){
        console.log('error')
      }
      else{
        res.send("ELIMINADO CON EXITO")
        // transport.sendMail(mailOptions, function (error, info) {
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log("Correo electrónico enviado: " + info.response);
        //   }
        // });
        
      }
    }
  );
});


app.listen(3001, () => {
  console.log("servidor corriendo en puerto 3001");
});
