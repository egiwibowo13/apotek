let mong = require('mongoose');

let pembayaran = mong.Schema({
	kdPelanggan: String,
	kdPembelian: String,
	TanggalPembelian: String,
	StatusPembayaran: String,
	HargaBayar: String,
	TanggalPembayaran: String,
	NamaStatusPenjualan: String,
	Histori: {
		TglBeli: String,
		TglKonfirmasi: String,
		TglBayar: String
	}
});

let Pembayaran = module.exports = mong.model("Pembayaran", pembayaran, "Pembayaran");