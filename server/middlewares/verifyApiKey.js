const User = require('../models/User');

const verifyApiKey = async (req, res, next) => {
  const apiKey = req.headers['api-key'];

  console.log('key: ', apiKey);

  if (!apiKey) {
    return res.status(401).json({ error: 'API key is required' });
  }

  try {
    // user with the provided API key in the apiKeys array
    const user = await User.findOne({ apiKeys: { $in: [apiKey] } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Attach the user to the request for further processing
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = verifyApiKey;
