const cloudinary = require('cloudinary').v2

async function uploadSingleHandler(req, res) {
    const { body } = req;
    const options = {};
    if (body?.folder) {
      options.folder = body.folder;
      options.context = {alt : body.alt};
    }
    const image = body.image;
  
    try {
      const result = await cloudinary.uploader.upload(image, options);
      res.status(201).json(result);
    } catch (error) {
      console.log('error', error);
    }
  }

module.exports = {
    uploadSingleHandler,
}; 