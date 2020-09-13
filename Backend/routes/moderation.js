const express = require('express');
const router = express.Router();
const moderationCtrl = require('../controllers/moderation');

const auth = require('../middleware/auth');

router.post('/', auth, moderationCtrl.createThing);
router.get('/',  auth, moderationCtrl.getRandomModeration);
router.patch('/', auth, moderationCtrl.deleteModeration);

module.exports = router;