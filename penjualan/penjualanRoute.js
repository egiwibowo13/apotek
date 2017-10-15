let ex = require('express');
let route = ex.Router();
let penjualanController = require('./penjualanController.js')

route.get('/penjualan', function (req, res) {
    penjualanController.getPenjualan(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penjualan/:_id', function (req, res) {
    let id = req.params._id;
    penjualanController.getPenjualanById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penjualan', function (req, res) {
    let penjualan = req.body;
    penjualanController.createPenjualan(penjualan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penjualan/:_id', function (req, res) {

    penjualanController.deletePenjualan(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penjualan/:_id', function (req, res) {
    let penjualan = req.body;
    penjualanController.updatePenjualan(req.params._id,penjualan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;