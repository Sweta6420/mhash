const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // image: {
    //     type: String, 
    //     required: true,
    //   },
    caption: {
      type: String,
      required: [true, 'Please add a caption value'],
    },
  },
  {
    timestamps: true,
    collection: 'posts',
  },
)

module.exports = mongoose.model('Post', postSchema)
