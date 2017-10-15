let ex = require('express');
let route = ex.Router();
let tokoController = require('./tokoController.js')

route.get('/toko', function (req, res) {
    tokoController.getToko(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/toko/:_id', function (req, res) {
    let id = req.params._id;
    tokoController.getTokoById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/toko', function (req, res) {
    let toko = req.body;
    tokoController.createToko(toko, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/toko/:_id', function (req, res) {

    tokoController.deleteToko(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/toko/:_id', function (req, res) {
    let toko = req.body;
    tokoController.updateToko(req.params._id,toko, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;