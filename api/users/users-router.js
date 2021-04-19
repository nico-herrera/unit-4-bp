const router = require('express').Router();
const Users = require('./users-model');

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users)
    } catch (err) {
        next({ apiCode: 500, apiMessage: 'error getting users', ...err })
    } 
})

router.get('/:id', async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        next({ apiCode: 500, apiMessage: 'error getting user by id', ...err })
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newUser = await Users.add(req.body);
        console.log(req.body, "user router")
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err.stack)
        next({ apiCode: 500, apiMessage: 'error posting user', ...err })
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const changes = await Users.update(req.params.id, req.body);
        res.status(200).json(changes)
    } catch (err) {
        next({ apiCode: 500, apiMessage: 'error changing user', ...err })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleted = await Users.remove(req.params.id);
        res.status(200).json({message: "user has been deleted"})
    } catch (err) {
        next({ apiCode: 500, apiMessage: 'error deleting user', ...err })
    }
})

module.exports = router;