const { body } = require ("express-validator");

exports.registerValidator =[
    body("username").notEmpty().withMessage("Username required"),
    body("password").isLength({min:6}).withMessage("Password must be 6+ characters")
];

exports.loginValidator =[
    body("username").notEmpty(),
    body("password").notEmpty()
];
