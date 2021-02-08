const express = require('express');
const router = new express.Router();
const session = require('express-session')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('restaurant', {title: 'Eat It | Section restaurateur'});
});

module.exports = router;
