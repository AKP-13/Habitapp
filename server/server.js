const express = require('express');
const cors = require('cors')
const server = express()
const port = 3000;
const db = require('./db/config')
const { index, showUsers, showRunning, showRunUser, createUser } = require('./db/queries')

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is running')
})

server.listen(port, () =>
    console.log(`Express server running at http://localhost:${port}`)
)
server.get('/users', (req, res) => {
    db.run(index).then(resp => {
        const users = resp.rows
        res.send(users)
    })
    .catch(err => res.status(500).end())
})
server.get('/users/:id', (req, res) => {
    db.run(showUsers, [req.params.id])
    .then(resp => {
        const post = resp.rows
        res.json(post)
    })
    .catch(err => res.status(500).end())
})

server.post('/users/new', (req, res) => {
    db.run(createUser, [req.body.username, req.body.userPassword, req.body.userEmail]
    .then(console.log('entry added'))
    .catch(console.warn))
})

server.get('/running', (req, res) => {
    db.run(showRunning).then(resp => {
        const running = resp.rows
        res.send(running)
    })
    .catch(err => res.status(500).end())
})
server.get('/running/:id', (req, res) => {
    db.run(showRunUser, [req.params.id])
    .then(resp => {
        const userRun = resp.rows
        res.json(userRun)
    })
    .catch(err => res.status(500).end())
})