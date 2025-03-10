var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    category: { type: String },
    title: { type: String, required: true },
    content: { type: String }
  },
  { timestamps: true }
);
module.exports = mongoose.model('Post', PostSchema);
