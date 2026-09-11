const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { contactValidation, handleValidation } = require('../middleware/validateContact');
const { contactLimiter } = require('../middleware/rateLimiter');

router.post('/', contactLimiter, contactValidation, handleValidation, sendContactEmail);

module.exports = router;
