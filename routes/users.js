const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/quiz/:id', (req, res) => {
  const target = req.params.id
  db.getQuestion()
    .then((countries) => {
      res.render('quiz',
        {countries: countries,
          answer: countries[Math.floor(Math.random() * 4)]
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
