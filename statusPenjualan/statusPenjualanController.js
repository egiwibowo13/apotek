StatusPenjualan = require('./statusPenjualanModel.js');

module.exports.getStatusPenjualan = function(callback,limit){
    StatusPenjualan.find(callback).limit(limit);
}

module.exports.getStatusPenjualanById = function(_id,callback){
    StatusPenjualan.findById(_id,callback);
}

module.exports.createStatusPenjualan = function(statusPenjualan,callback){
    StatusPenjualan.create(statusPenjualan,callback);
}

module.exports.deleteStatusPenjualan = function(id,callback){
    StatusPenjualan.findByIdAndRemove(id,callback);
}

module.exports.updateStatusPenjualan = function(id,statusPenjualan,callback){
    StatusPenjualan.findByIdAndUpdate(id,statusPenjualan,callback);
}