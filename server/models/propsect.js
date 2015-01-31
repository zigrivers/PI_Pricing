/**
 * Created by Ken on 1/28/2015.
 */
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var ProspectSchema = new Schema({

});

module.exports.ProspectSchema = mongoose.model('Prospect', ProspectSchema);
