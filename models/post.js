const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,

    // content character limit will be decided later on
    // min:
    // max:
  },
  imageSource: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

// content character limit will be decided later on

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
