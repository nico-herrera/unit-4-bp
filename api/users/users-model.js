const db = require('../../data/dbConfig');

const findAll = () => {
    return db('users');
}

const findById = id => {
    return db('users').where({id}).first()
}

function insert(user) {
    return db('users').insert(user);
  }

const update = (id, changes) => {
    return db('users').where({id}).update(changes, "*");
}

const remove = id => {
    return db('users').where({id}).del();
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}