const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(req.user) {
    res.render('logged', {username: req.user.displayName, avatar: req.user.photos[0].value})
  } else {
    res.redirect('/user/no-permission');
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if (req.user) {
    res.render('profile');
  } else {
    res.redirect('/user/no-permission');
  }
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;