const mongoose = require('mongoose');

/* mongodb://localhost:27017/db */

const serverConnection = () => {
  mongoose.connect('mongodb://root:12345@db:27017/db?authSource=admin', {
    useNewUrlParser: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = serverConnection;
