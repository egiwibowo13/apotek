KodeAkses = require('./kodeAksesModel.js');

module.exports.getKodeAkses = function(callback,limit){
    KodeAkses.find(callback).limit(limit);
}

module.exports.getKodeAksesById = function(_id,callback){
    KodeAkses.findById(_id,callback);
}

module.exports.createKodeAkses = function(akses,callback){
    KodeAkses.create(akses,callback);
}

module.exports.deleteKodeAkses = function(id,callback){
    KodeAkses.findByIdAndRemove(id,callback);
}

module.exports.updateKodeAkses = function(id,akses,callback){
    KodeAkses.findByIdAndUpdate(id,akses,callback);
}