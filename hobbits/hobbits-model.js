const db = require('../data/dbConfig');

module.exports = {
  insert,
  remove,
  find,
  findById
};

async function insert(hobbit) {
  return db('hobbits')
    .insert(hobbit)
    .returning('id');
}

function find() {
  return db('hobbits');
}

function remove(id) {
  return db('hobbits')
    .where({ id })
    .del();
}

function findById(id) {
  return db('hobbits')
    .where({ id })
    .first();
}