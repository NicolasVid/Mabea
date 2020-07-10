const express = require('express');
const router = express.Router();
const baCtrl = require('../controllers/ba');

const auth = require('../middleware/auth');

router.post('/', auth, baCtrl.createThing);

router.get('/', baCtrl.getRandomBa);

router.put('/', baCtrl.greet);


module.exports = router;