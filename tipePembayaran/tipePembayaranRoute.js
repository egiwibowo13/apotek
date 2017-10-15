let ex = require('express');
let route = ex.Router();
let tipePembayaranController = require('./tipePembayaranController.js')

route.get('/tipePembayaran', function (req, res) {
    tipePembayaranController.getTipePembayaran(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/tipePembayaran/:_id', function (req, res) {
    let id = req.params._id;
    tipePembayaranController.getTipePembayaranById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/tipePembayaran', function (req, res) {
    let tipePembayaran = req.body;
    tipePembayaranController.createTipePembayaran(tipePembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/tipePembayaran/:_id', function (req, res) {

    tipePembayaranController.deleteTipePembayaran(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/tipePembayaran/:_id', function (req, res) {
    let tipePembayaran = req.body;
    tipePembayaranController.updateTipePembayaran(req.params._id,tipePembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;