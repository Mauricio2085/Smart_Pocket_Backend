const cloudinary = require('cloudinary').v2;
const { config } = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

const cloudinaryController = (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folderName = 'smart_pocket';

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      folder: folderName,
    },
    config.cloudinaryApiSecret
  );

  res.json({
    timestamp,
    signature,
    api_key: config.cloudinaryApiKey,
  });
};

module.exports = { cloudinaryController };
