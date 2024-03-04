const rateLimit = require('express-rate-limit');

exports.blogsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1hr
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    code: 429,
    message: 'Too many requests. Please try again later.',
  },
});
