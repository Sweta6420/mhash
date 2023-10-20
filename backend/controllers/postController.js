const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
  })

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id })
  res.status(200).json(posts)
})

const setPost = asyncHandler(async (req, res) => {
    // console.log(req.body)
    // console.log(req.file)
  if (!req.body.caption) {
    res.status(400)
    throw new Error('Please add a caption field')
  }
//   console.log(req.body.image); 

  const post = await Post.create({
    // image: req.body.image,
    caption: req.body.caption,
    user: req.user.id,
  })
  console.log(post); // Log the created post object
  res.status(200).json(post)
})

const updatePost= asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }
  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedPost)
})
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }
  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  await post.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAllPosts,
    getPosts,
    setPost,
    updatePost,
    deletePost,
}
