let mong = require('mongoose');

let tipePembayaran = mong.Schema({
	kdTipePembayaran: String,
	NamaTipePembayaran: String
});

let TipePembayaran = module.exports = mong.model("TipePembayaran", tipePembayaran, "TipePembayaran");