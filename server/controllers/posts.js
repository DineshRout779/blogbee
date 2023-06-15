const Post = require('../models/Post');

// get post by id middleware
exports.getPostById = async (req, res, next, id) => {
  try {
    const post = await Post.findById(id).populate(
      'userId',
      'username _id profilePic'
    );

    if (!post) {
      return res.status(404).json({
        status: false,
        error: 'Post not found',
      });
    }
    // console.log(post);
    req.post = post;
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// get post
exports.getPost = (req, res) => res.json(req.post);

// create post
exports.createPost = async (req, res) => {
  try {
    const data = {
      ...req.body,
      userId: req.user._id,
    };

    const newPost = new Post(data);
    const savedPost = await (
      await newPost.save()
    ).populate('userId', 'username _id profilePic');

    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// get all posts
exports.getAllPosts = async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }).populate(
        'userId',
        'username _id profilePic'
      );
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      }).populate('userId', 'username _id profilePic');
    } else {
      posts = await Post.find().populate('userId', 'username _id profilePic');
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
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
    ).populate('userId', 'username _id profilePic');
    return res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// delete post
exports.deletePostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json('No such post found!');
  try {
    await post.delete();
    res.status(200).json('Post has been deleted!');
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};
