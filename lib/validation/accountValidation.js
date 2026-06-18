const { body } = require("express-validator");

const messages = {
    alphanumeric: "can only contain numbers or letters.",
    usernameLength: 'should be between 4 - 18 characters.',
    email: 'must be properly formatted.',
    nameAlpha: 'must only include letters.',
    nameLength: 'must be between 2 - 20 characters.',
    passwordLength: 'must be between 8 - 24 characters'
}

const accountValidation = {
    userSignUp: [
        body("username").trim()
            .isAlphanumeric().withMessage(`Username ${messages.alphanumeric}`)
            .isLength({ min: 4, max: 18 }).withMessage(`Username ${messages.usernameLength}`)
            .escape(),
        body("email").trim()
            .isEmail().withMessage(`Email address ${messages.email}`)
            .normalizeEmail().escape(),
        body("firstName").trim()
            .isAlpha().withMessage(`First name ${messages.nameAlpha}`)
            .isLength({ min: 2, max: 20 }).withMessage(`First name ${messages.nameLength}`)
            .escape(),
        body("lastName").trim()
            .isAlpha().withMessage(`Last name ${messages.nameAlpha}`)
            .isLength({ min: 2, max: 20 }).withMessage(`Last name ${messages.nameLength}`)
            .escape(),
        body("password").trim()
            .isAlphanumeric().withMessage(`Password ${messages.alphanumeric}`)
            .isLength({ min: 8, max: 24 }).withMessage(`Password ${messages.passwordLength}`)
            .escape(),
        body("confirmPassword").trim()
            .isAlphanumeric().withMessage(`Password ${messages.alphanumeric}`)
            .isLength({ min: 8, max: 24 }).withMessage(`Password ${messages.passwordLength}`)
            .escape(),
    ],
    userLogIn: [
        // user can log in with either username OR email
        body("username").trim()
            .isAlphanumeric().withMessage(`Username ${messages.alphanumeric}`)
            .isLength({ min: 4, max: 18 }).withMessage(`Username ${messages.usernameLength}`)
            .escape(),
        body("email").trim()
            .isEmail().withMessage(`Email address ${messages.email}`)
            .normalizeEmail().escape(),
        body("password").trim()
            .isAlphanumeric().withMessage(`Password ${messages.alphanumeric}`)
            .isLength({ min: 8, max: 24 }).withMessage(`Password ${messages.passwordLength}`)
            .escape(),
    ],
}

module.exports = accountValidation;