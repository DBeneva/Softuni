const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.put('/:postId', auth(), postController.like);
router.put('/:postId/unlike', auth(), postController.unlike);

module.exports = router
