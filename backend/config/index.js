const config = {
    URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 8080,
    secrets: {
    }
  };
  
  module.exports = {
    config,
  };