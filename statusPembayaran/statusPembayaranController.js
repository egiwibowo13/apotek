StatusPembayaran = require('./statusPembayaranModel.js');

module.exports.getStatusPembayaran = function(callback,limit){
    StatusPembayaran.find(callback).limit(limit);
}

module.exports.getStatusPembayaranById = function(_id,callback){
    StatusPembayaran.findById(_id,callback);
}

module.exports.createStatusPembayaran = function(statusPembayaran,callback){
    StatusPembayaran.create(statusPembayaran,callback);
}

module.exports.deleteStatusPembayaran = function(id,callback){
    StatusPembayaran.findByIdAndRemove(id,callback);
}

module.exports.updateStatusPembayaran = function(id,statusPembayaran,callback){
    StatusPembayaran.findByIdAndUpdate(id,statusPembayaran,callback);
}