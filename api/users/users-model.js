const db = require('../../data/dbConfig');

const findAll = () => {
    return db('users').orderBy('users.id');
}

const findById = id => {
    return db('users').where({id}).first()
}

async function add(user) {
    try {
        const [id] = await db('users').insert(user);
    console.log(id)
    return findById(id);
    } catch (err) {
        console.log(err)
    }
    
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
    add,
    update,
    remove
}