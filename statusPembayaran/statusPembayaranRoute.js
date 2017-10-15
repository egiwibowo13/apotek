let ex = require('express');
let route = ex.Router();
let statusPembayaranController = require('./statusPembayaranController.js')

route.get('/statusPembayaran', function (req, res) {
    statusPembayaranController.getStatusPembayaran(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/statusPembayaran/:_id', function (req, res) {
    let id = req.params._id;
    statusPembayaranController.getStatusPembayaranById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/statusPembayaran', function (req, res) {
    let statusPembayaran = req.body;
    statusPembayaranController.createStatusPembayaran(statusPembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/statusPembayaran/:_id', function (req, res) {

    statusPembayaranController.deleteStatusPembayaran(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/statusPembayaran/:_id', function (req, res) {
    let statusPembayaran = req.body;
    statusPembayaranController.updateStatusPembayaran(req.params._id,statusPembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;