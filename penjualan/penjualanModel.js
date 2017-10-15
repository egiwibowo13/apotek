let mong = require('mongoose');

let penjualan = mong.Schema({
	kdPenjualan: String,
	TanggalPenjualan: String,
	kdPetugas: String,
	kdToko: String,
	TotalHargaPenjualan: String,
	DetailPembelian:{
		kdObat: String,
		JmlObat: String,
		TotalHarga: String
	},
	NamaTipePembayaran: String,
	NamaStatusPembayaran: {
		JumlahPembayaran: String,
		SisaPembayaran: String
	}
});

let Penjualan = module.exports = mong.model("Penjualan", penjualan, "Penjualan");