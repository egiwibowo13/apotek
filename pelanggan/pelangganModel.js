let mong = require('mongoose');

let pelanggan = mong.Schema({
	kdPelanggan: String,
	NamaPelanggan: String,
	AlamatPelanggan: String,
	Kontak: {
		NoTelp: String,
		Deskripsi: String,
	},
	PermintaanTeman: {
		kdPelanggan: String,
		Deskripsi: String,
	}
});

let Pelanggan = module.exports = mong.model("Pelanggan", pelanggan, "Pelanggan");