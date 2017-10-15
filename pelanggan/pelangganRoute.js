let ex = require('express');
let route = ex.Router();
let pelangganController = require('./pelangganController.js')

route.get('/pelanggan', function (req, res) {
    pelangganController.getPelanggan(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/pelanggan/:_id', function (req, res) {
    let id = req.params._id;
    pelangganController.getPelangganById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pelanggan', function (req, res) {
    let pelanggan = req.body;
    pelangganController.createPelanggan(pelanggan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pelanggan/:_id', function (req, res) {

    pelangganController.deletePelanggan(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pelanggan/:_id', function (req, res) {
    let pelanggan = req.body;
    pelangganController.updatePelanggan(req.params._id,pelanggan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;