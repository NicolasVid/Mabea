const express = require('express');
const router = express.Router();
const baCtrl = require('../controllers/ba');

const auth = require('../middleware/auth');

router.get('/', baCtrl.getRandomBa);
router.post('/', baCtrl.createBa);
router.patch('/', auth, baCtrl.greet);

module.exports = router;