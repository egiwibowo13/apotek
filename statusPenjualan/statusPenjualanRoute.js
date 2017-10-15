let ex = require('express');
let route = ex.Router();
let statusPenjualanController = require('./statusPenjualanController.js')

route.get('/statusPenjualan', function (req, res) {
    statusPenjualanController.getStatusPenjualan(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/statusPenjualan/:_id', function (req, res) {
    let id = req.params._id;
    statusPenjualanController.getStatusPenjualanById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/statusPenjualan', function (req, res) {
    let statusPenjualan = req.body;
    statusPenjualanController.createStatusPenjualan(statusPenjualan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/statusPenjualan/:_id', function (req, res) {

    statusPenjualanController.deleteStatusPenjualan(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/statusPenjualan/:_id', function (req, res) {
    let statusPenjualan = req.body;
    statusPenjualanController.updateStatusPenjualan(req.params._id,statusPenjualan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;