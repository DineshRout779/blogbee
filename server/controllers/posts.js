const Post = require('../models/Post');

// get post by id middleware
exports.getPostById = async (req, res, next, id) => {
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }

    req.post = post;
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

// get post
exports.getPost = (req, res) => {
  return res.json(req.post);
};

// create post
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all posts
exports.getAllPosts = async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update post
exports.updatePostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json('No such post found!');
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// delete post
exports.deletePostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json('No such post found!');
  try {
    await post.delete();
    res.status(200).json('Post has been deleted!');
  } catch (err) {
    res.status(500).json(err);
  }
};
