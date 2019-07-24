const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://joseph:fEV5nmsWx1TPd3A2@cluster0-s2bob.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

module.exports = {
  Customer: require('./Customer'),
  Item: require('./Item'),
  Cart: require('./Cart')
};
