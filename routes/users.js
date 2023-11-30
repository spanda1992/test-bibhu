const express = require('express')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/users', auth,(req,res) => {
    res.status(200).send({users:'Here are list of users'})
})

router.post('/users',(req,res) => {
    res.status(200).send({users:'Here are list of users'})
})

module.exports = router