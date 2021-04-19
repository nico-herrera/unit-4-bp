const db = require('../../data/dbConfig');

const findAll = () => {
    return db('users');
}

const findById = id => {
    return db('users').where({id}).first()
}

const insert = async (user) => {
    const id = await db('users').insert(user);
    console.log(id);
    return db('users').where({id}).first();
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