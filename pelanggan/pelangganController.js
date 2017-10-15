Pelanggan = require('./pelangganModel.js');

module.exports.getPelanggan = function(callback,limit){
    Pelanggan.find(callback).limit(limit);
}

module.exports.getPelangganById = function(_id,callback){
    Pelanggan.findById(_id,callback);
}

module.exports.createPelanggan = function(pelanggan,callback){
    Pelanggan.create(pelanggan,callback);
}

module.exports.deletePelanggan = function(id,callback){
    Pelanggan.findByIdAndRemove(id,callback);
}

module.exports.updatePelanggan = function(id,pelanggan,callback){
    Pelanggan.findByIdAndUpdate(id,pelanggan,callback);
}