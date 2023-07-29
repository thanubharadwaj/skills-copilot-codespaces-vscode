// Create web server with express
const express = require('express');
// Create router
const router = express.Router();
// Create comments controller
const commentsCtrl = require('../controllers/comments');
// Create auth middleware
const auth = require('../middleware/auth');
// Create multer middleware
const multer = require('../middleware/multer-config');

// Create the routes
router.post('/', auth, multer, commentsCtrl.createComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.get('/', auth, commentsCtrl.getAllComments);

// Export router
module.exports = router;