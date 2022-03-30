const { Router } = require('express')
const { getUser, addUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user.controller')

const router = Router()


router.get('/users/me', getUser)
router.post('/user/add', addUser)
router.get('/users', getAllUsers)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)

module.exports = router