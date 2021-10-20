const express = require('express');

const router = express.Router();
const { doSignIn, doSignOut } = require('../Controllers/userController');

router.post('/sign-in', async (req, res) => {
  try {
    const result = await doSignIn(req.body.email, req.body.password);
    res.send(result).status(200);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

router.delete('/sign-out', async (req, res) => {
  try {
    const result = await doSignOut();
    res.send(result).status(204);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

module.exports = router;
