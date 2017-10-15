let mong = require('mongoose');

let kodeAkses = mong.Schema({
    kdAkses: String,
	NamaAkses: String,
	Keterangan: String
});

let KodeAkses = module.exports = mong.model("KodeAkses", kodeAkses, "KodeAkses");