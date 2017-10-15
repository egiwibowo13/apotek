Toko = require('./tokoModel.js');

module.exports.getToko = function(callback,limit){
    Toko.find(callback).limit(limit);
}

module.exports.getTokoById = function(_id,callback){
    Toko.findById(_id,callback);
}

module.exports.createToko = function(toko,callback){
    Toko.create(toko,callback);
}

module.exports.deleteToko = function(id,callback){
    Toko.findByIdAndRemove(id,callback);
}

module.exports.updateToko = function(id,toko,callback){
    Toko.findByIdAndUpdate(id,toko,callback);
}