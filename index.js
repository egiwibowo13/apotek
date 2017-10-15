let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();

global.config = require('./config/config');

let jwt    = require('jsonwebtoken');
let jwt_secret = "shhh";
let verifyToken = require('./middleware/verifyToken');
//route
app.use(bodyParser.json());
// app.use(function(req,res,next){
// 	res.header("Access-Contol-Allow-Origin","*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

app.use('/',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    next();
});

let login = require('./Login/loginRoute.js');
app.use('/api',login);

let kodeAksesRoute = require('./kodeAkses/kodeAksesRoute.js');
app.use('/api',kodeAksesRoute);

let obatRoute = require('./obat/obatRoute.js');
app.use('/api',obatRoute);

let pelangganRoute = require('./pelanggan/pelangganRoute.js');
app.use('/api',pelangganRoute);

let pembayaranRoute = require('./pembayaran/pembayaranRoute.js');
app.use('/api',pembayaranRoute);

let penjualanRoute = require('./penjualan/penjualanRoute.js');
app.use('/api',penjualanRoute);

let petugasRoute = require('./petugas/petugasRoute.js');
app.use('/api',petugasRoute);

let provinsiRoute = require('./provinsi/provinsiRoute.js');
app.use('/api',verifyToken,provinsiRoute);

let statusPembayaranRoute = require('./statusPembayaran/statusPembayaranRoute.js');
app.use('/api',statusPembayaranRoute);

let statusPenjualanRoute = require('./statusPenjualan/statusPenjualanRoute.js');
app.use('/api',statusPenjualanRoute);

let tipePembayaranRoute = require('./tipePembayaran/tipePembayaranRoute.js');
app.use('/api',tipePembayaranRoute);

let tokoRoute = require('./toko/tokoRoute.js');
app.use('/api',tokoRoute);

//mong.connect('mongodb://localhost:27017/DBapotek');
mong.connect('mongodb://egi:egi1213@ds121225.mlab.com:21225/dbapotek');
app.listen(8889);