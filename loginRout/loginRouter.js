const express = require('express');
const bcrypt = require('bcryptjs');

const login = require('./loginModel.js');

const router = express.Router();

router.post('/register', (req,res) => {
    let registerData = req.body;

    const hash = bcrypt.hashSync(registerData.password, 10);

    registerData.password = hash;

    login.register(registerData)
    .then(login => {
        res.status(201).json(login)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "failed to register"});
    })
});

router.post('/login', (req,res) => {
    let {username, password} = req.body;

    login.findBy({username})
    .first()
    .then(login => {
        if(login && bcrypt.compareSync(password, login.password)) {
        res.status(200).json({ message: `welcome ${user.username}`});
        } else {
          res.status(401).json({ message: 'Invalid Credentials'});
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'login failed'})
    })

})

router.get('/users', (req,res) => {
    login.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get users'})
    })
})

module.exports = router;