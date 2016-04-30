var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fullname: String,
  email: String,
  account: String,
  company: String,
  profession: String,
  phone: String,

  contact_ids: [mongoose.Types.ObjectId]
});

exports.User = mongoose.model('User', userSchema);