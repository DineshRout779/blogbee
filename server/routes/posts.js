const router = require('express').Router();
const {
  getPostById,
  getAllPosts,
  createPost,
  updatePostById,
  deletePostById,
} = require('../controllers/posts');
const { getUserById } = require('../controllers/users');
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require('../middlewares/verifyToken');

router.param('postId', getPostById);
router.param('userId', getUserById);

// get a post
router.get('/:postId', getPostById);

// get all post
router.get('/', getAllPosts);

// create post
router.post('/:userId', verifyToken, createPost);

// update post
router.put(
  '/:postId/:userId',
  verifyToken,
  verifyTokenAndAuthorization,
  updatePostById
);

// delete post
router.delete(
  '/:postId/:userId',
  verifyToken,
  verifyTokenAndAuthorization,
  deletePostById
);

module.exports = router;
