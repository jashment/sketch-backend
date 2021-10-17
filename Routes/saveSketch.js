const express = require('express');

const router = express.Router();
const { doDeleteFromDB, doRetrieveFromDB, doSave } = require('../Controllers/databaseController');

router.post('/save', async (req, res) => {
  try {
    const result = await doSave(req.body.uuid, req.body.sketch);
    res.send(result).status(200);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await doRetrieveFromDB(req.params.id);
    res.send(result).status(200);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const result = await doDeleteFromDB(req.params.id, req.body.sketchId);
    res.send(result).status(204);
  } catch (e) {
    res.sendStatus(500, e);
  }
});

module.exports = router;
