Penjualan = require('./penjualanModel.js');

module.exports.getPenjualan = function(callback,limit){
    Penjualan.find(callback).limit(limit);
}

module.exports.getPenjualanById = function(_id,callback){
    Penjualan.findById(_id,callback);
}

module.exports.createPenjualan = function(penjualan,callback){
    Penjualan.create(penjualan,callback);
}

module.exports.deletePenjualan = function(id,callback){
    Penjualan.findByIdAndRemove(id,callback);
}

module.exports.updatePenjualan = function(id,penjualan,callback){
    Penjualan.findByIdAndUpdate(id,penjualan,callback);
}