const mongoose = require('mongoose');

//schema for the comment Model

const commentsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  images: [String],
  text: String
});

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = Comment;
