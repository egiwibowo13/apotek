TipePembayaran = require('./tipePembayaranModel.js');

module.exports.getTipePembayaran = function(callback,limit){
    TipePembayaran.find(callback).limit(limit);
}

module.exports.getTipePembayaranById = function(_id,callback){
    TipePembayaran.findById(_id,callback);
}

module.exports.createTipePembayaran = function(tipePembayaran,callback){
    TipePembayaran.create(tipePembayaran,callback);
}

module.exports.deleteTipePembayaran = function(id,callback){
    TipePembayaran.findByIdAndRemove(id,callback);
}

module.exports.updateTipePembayaran = function(id,tipePembayaran,callback){
    TipePembayaran.findByIdAndUpdate(id,tipePembayaran,callback);
}