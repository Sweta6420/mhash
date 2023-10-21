const express = require('express')
const router = express.Router()
const {
    getScores,
    postCLScore,
    postTScore,
} = require('../controllers/scoreController')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getScores)
router.route('/profile').post(protect,postCLScore)
router.route('/impact').post(protect,postTScore)

module.exports = router
