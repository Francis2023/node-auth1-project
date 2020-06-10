const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');


const LoginRouter = require('../loginRout/loginRouter.js');

const server = express();

const sessionConfig = {
    name: 'DonDada',
    secret: 'Na Who be the Don gunna',
    cookie: {
        maxAge: 1000 * 30,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig))

server.use('/api', LoginRouter);

server.get('/', (req,res) => {
    res.status(200).json({message: "Hello World"})
})

module.exports = server;