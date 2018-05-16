const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af9f4205f01e43c066ee744')
  }, {
    $set: {
      name: 'E Money'
    },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});
