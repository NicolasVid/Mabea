const express = require('express');
const router = express.Router();
const baCtrl = require('../controllers/ba');

const auth = require('../middleware/auth');

router.get('/ba', baCtrl.getRandomBa);

router.patch('/ba', auth, baCtrl.greet);

module.exports = router;