Obat = require('./obatModel.js');

module.exports.getObat = function(callback,limit){
    Obat.find(callback).limit(limit);
}

module.exports.getObatById = function(_id,callback){
    Obat.findById(_id,callback);
}

module.exports.createObat = function(obat,callback){
    Obat.create(obat,callback);
}

module.exports.deleteObat = function(id,callback){
    Obat.findByIdAndRemove(id,callback);
}

module.exports.updateObat = function(id,obat,callback){
    Obat.findByIdAndUpdate(id,obat,callback);
}