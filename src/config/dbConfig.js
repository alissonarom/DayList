const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://teste:teste@clusterdevtests.ov3um.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;