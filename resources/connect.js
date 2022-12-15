var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "IE",
  });

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
});

const puerto = process.env.PUERTO || 3002;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/informacion", (req, res) => {
	let data = {
    	docinfo: req.body.DOCINFO,
    	apenominfo: req.body.APENOMINFO,
    	emainfo: req.body.EMAINFO,
    	celinfo: req.body.CELINFO,
    	asuinfo: req.body.ASUINFO,

	};
	let sql = "INSERT INTO informacion SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
});
