const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs')


const path = __dirname + '/views/';
const port = 8080;

const productos = [

    {id: 1, nombre: "Mouse GP65", precio: "150", cantidad: "200"},
    {id: 2, nombre: "Procesador IntelCore i9", precio: "2500", cantidad: "50"},
    {id: 3, nombre: "TECLADO MECÁNICO REDRAGON K552W-KR KUMARA GAMER BLANCO", precio: "189", cantidad: "123"},
    {id: 4, nombre: "TECLADO GAMER MECÁNICO LOGITECH G915 TKL BLACK", precio: "929", cantidad: "10"},
    {id: 5, nombre: "TECLADO RAZER HUNTSMAN V2 ANALOG OPTICAL CHROMA", precio: "659", cantidad: "400"},
    {id: 6, nombre: "AUDIFONO GAMER CMICROF LOGITECH G733 LIGHTSPEED NEGRO", precio: "150", cantidad: "200"},
    {id: 7, nombre: "AUDIFONO LOGITECH G335", precio: "329", cantidad: "200"},

];

const usuarios = [

    {id: 1, nombre: "Zakaria Tomas", apellido: "Henson", edad: "18", email: "tomas@gmail.com"},
    {id: 2, nombre: "Angeles De-Diego", apellido: "Howell", edad: "15", email: "diego@gmail.com"},
    {id: 3, nombre: "Arancha Bastida", apellido: "Weber", edad: "20", email: "bastida@gmail.com"},
    {id: 4, nombre: "Khadija Vaca", apellido: "Matthews", edad: "40", email: "vaca@gmail.com"},
    {id: 5, nombre: "Rosendo Madrid", apellido: "Rios", edad: "25", email: "rosendo@gmail.com"},
    {id: 6, nombre: "Ferran Cervera", apellido: "Wright ", edad: "32", email: "ferran@gmail.com"},
    {id: 7, nombre: "Marcelo Perales", apellido: "Barber", edad: "31", email: "perales@gmail.com"},
    {id: 8, nombre: "Silvia Yuste", apellido: "Bishop", edad: "18", email: "yuste@gmail.com"},

];

router.use(function (req,res,next){
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  
    res.render('index')

});

router.get('/productos', (req,res) => {
  
    res.render('productos', {

        productos

    })

});

router.get('/usuarios', (req,res) => {
  
    res.render('usuarios', {

        usuarios

    });

});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('App listening on port 8080!')
})