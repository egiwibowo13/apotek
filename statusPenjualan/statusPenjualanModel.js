let mong = require('mongoose');

let statusPenjualan = mong.Schema({
	kdStatusPenjualan: String,
	NamaStatusPenjualan: String
});

let StatusPenjualan = module.exports = mong.model("StatusPenjualan", statusPenjualan, "StatusPenjualan");