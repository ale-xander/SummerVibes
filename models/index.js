const mongoose = require('mongoose');
//const DB_URL = 'mongodb+srv://joseph:fEV5nmsWx1TPd3A2@cluster0-s2bob.mongodb.net/summer-vibes?retryWrites=true&w=majority';

const MONGO_URL = process.env.MONGODB_URI || 'mongodb+srv://joseph:fEV5nmsWx1TPd3A2@cluster0-s2bob.mongodb.net/summer-vibes?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

module.exports = {
  User: require('./User'),
  Item: require('./Item'),
  Cart: require('./Cart')
};
