const express = require('express');

const router = express.Router();
const { doSignUp } = require('../Controllers/userController');

router.post('/sign-up', async (req, res) => {
  try {
    const result = await doSignUp(req.body.email, req.body.password);
    res.send(result).status(200);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

module.exports = router;
