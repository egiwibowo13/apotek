let ex = require('express');
let route = ex.Router();
let kodeAksesController = require('./kodeAksesController.js')

route.get('/kodeakses', function (req, res) {
    kodeAksesController.getKodeAkses(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/kodeakses/:_id', function (req, res) {
    let id = req.params._id;
    kodeAksesController.getKodeAksesById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/kodeakses', function (req, res) {
    let akses = req.body;
    kodeAksesController.createKodeAkses(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/kodeakses/:_id', function (req, res) {

    kodeAksesController.deleteKodeAkses(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/kodeakses/:_id', function (req, res) {
    let akses = req.body;
    kodeAksesController.updateKodeAkses(req.params._id,akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;