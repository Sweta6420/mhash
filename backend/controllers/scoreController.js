const asyncHandler = require('express-async-handler')

const Score = require('../models/scoreModel')
const User = require('../models/userModel')

const getScores = asyncHandler(async (req, res) => {
  const scores = await Score.find({ user: req.user.id })
  res.status(200).json(scores)
})

const postCLScore = asyncHandler(async (req, res) => {
    // console.log(req.body)
    // console.log(req.file)
    if (!req.body.checked) {
        res.status(400)
        throw new Error('Please have a checked field')
    }
//   console.log(req.body.image); 
    let user = await User.findOne({ user: req.user.id });

    if (!user) {
        // If the user doesn't exist, create a new user with the provided ID
        user = await User.create({ user: req.user.id });
    }
    // Update the user's score
    user.checked = req.body.checked;
    await user.save();

  console.log(score); // Log the created post object
  res.status(200).json(score)
})

const postTScore = asyncHandler(async (req, res) => {
    
  if (!req.body.transport) {
    res.status(400)
    throw new Error('Please hace a transport field')
  }
  let user = await User.findOne({ user: req.user.id });
    if (!user) {
        // If the user doesn't exist, create a new user with the provided ID
        user = await User.create({ user: req.user.id });
    }
    // Update the user's score
    user.transport = req.body.transport;
    await user.save();

  console.log(score); // Log the created post object
  res.status(200).json(score)
})


module.exports = {
    getScores,
    postCLScore,
    postTScore,
}
