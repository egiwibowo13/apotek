let mong = require('mongoose');

let toko = mong.Schema({
	kdToko: String,
	NamaToko: String,
	AlamatToko: String,
	NamaKota: String,
	NamaProvinsi: String,
	Gudang:{
		kdGudang: String,
		NamaGudang: String,
		AlamatGudang: String,
		LuasGudang: String,
		Stok:{
			kdObat: String,
			StokAwal: String,
			StokAkhir: String
		},
		LokasiToko: {
            "type": String,
            "coordinates":String
        }
	}
});

let Toko = module.exports = mong.model("Toko", toko, "Toko");