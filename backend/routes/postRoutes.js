const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    getPosts,
    setPost,
    updatePost,
    deletePost,
} = require('../controllers/postController')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getPosts).post(protect, setPost)
router.route('/share').get(protect,getAllPosts)
router.route('/profile').get(protect,getPosts).post(protect,setPost)
router.route('/:id').delete(protect, deletePost).put(protect, updatePost)

module.exports = router
