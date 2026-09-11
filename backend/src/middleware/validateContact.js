const { body, validationResult } = require('express-validator');

const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters.')
    .escape(),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail()
    .isLength({ max: 200 }),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 20 })
    .escape(),

  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required.')
    .isLength({ min: 3, max: 200 }).withMessage('Subject must be between 3 and 200 characters.')
    .escape(),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters.')
    .escape(),
];

function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
    });
  }
  next();
}

module.exports = { contactValidation, handleValidation };
