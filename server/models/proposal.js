/**
 * proposal model.
 */
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var ProposalSchema = new Schema({
    forProspect: String,
    datePrepared: String,
    dateExpires: Number,
    programType: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports.ProposalSchema = mongoose.model('Proposal', ProposalSchema);


/*

fields for proposal









*/
