const router = require('express').Router();
const Users = require('./users-model');

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    } 
})

router.get('/:id', async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newUser = await Users.insert(req.body);
        res.status(201).json(newUser)
    } catch (err) {
        // res.status(500).json({message: "internal error"})
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const changes = await Users.update(req.params.id, req.body);
        res.status(200).json(changes)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleted = await Users.remove(req.params.id);
        res.status(200).json({message: "user has been deleted"})
    } catch (err) {
        next(err)
    }
})

module.exports = router;