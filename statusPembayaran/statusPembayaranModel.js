let mong = require('mongoose');

let statusPembayaran = mong.Schema({
	kdStatusPembayaran: String,
	NamaStatusPembayaran: String
});

let StatusPembayaran = module.exports = mong.model("StatusPembayaran", statusPembayaran, "StatusPembayaran");