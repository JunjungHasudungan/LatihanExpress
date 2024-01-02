const express = require('express')
const router = express.Router() // membuat router 
const PostController = require('../controller/postController');

// GET
router.get('/', PostController.getAllPost);

module.exports = router;