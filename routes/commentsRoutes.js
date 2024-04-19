 
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// defining the routes for cart 

//GET for all comment items
router.get('/', commentsController.getAllComments);

//GET for comment by id
router.get('/:id', commentsController.getCommentById);

//POST for creating Comment
router.post('/', commentsController.createComment);

//PUT for updating comment
router.put('/:id', commentsController.updateComment);

//DELETE for deleting comment
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
