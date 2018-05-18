const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let todoId = '5afe1e01df2b12e003a020d2';
let userId = '5afca57f3babbd0846cd79a0';

if (!ObjectID.isValid(todoId, userId)) {
  console.log('the id provided was invalid');
};

// //find will give you an array containing document(s)
// Todo.find({
//   _id: id
// }).then((todo) => {
//   console.log('find: ', todo);
// });
//
//
// //findOne will give back the actual document
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('findOne: ', todo);
// });

//if only looking for one doc, use findById
Todo.findById(todoId).then((todo) => {
  if (!todo) {
    return console.log('Todo not in db');
  }
  console.log('todo data: ', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not in db');
  }
  console.log('user data:', user);
}).catch((e) => console.log(e));
