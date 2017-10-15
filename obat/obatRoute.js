let ex = require('express');
let route = ex.Router();
let obatController = require('./obatController.js')

route.get('/obat', function (req, res) {
    obatController.getObat(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/obat/:_id', function (req, res) {
    let id = req.params._id;
    obatController.getObatById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/obat', function (req, res) {
    let obat = req.body;
    obatController.createObat(obat, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/obat/:_id', function (req, res) {

    obatController.deleteObat(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/obat/:_id', function (req, res) {
    let obat = req.body;
    obatController.updateObat(req.params._id,obat, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;