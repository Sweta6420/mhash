const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    checked: {
      type: Number,
      default: 0,
    },
    transport:{
        type: Number,
        default: 0,
    },
    streaks: {
        type: Number,
        default: 1,
    }
  },
  {
    timestamps: true,
    collection: 'scores',
  },
)

module.exports = mongoose.model('Score', scoreSchema)
