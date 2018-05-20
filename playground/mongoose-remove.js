const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findOneAndRemove({_id: '5b00b0da5c771b062fc593ec'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b00b0da5c771b062fc593ec').then((todo) => {
  console.log(todo);
});
