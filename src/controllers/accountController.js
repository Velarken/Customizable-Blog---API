const bcrypt = require('bcrypt');
const accountValidation = require('../../lib/validation/accountValidation.js');
const { validationResult } = require('express-validator');
const accountQueries = require('../../lib/db/queries/accountQueries..js');

const accountController = {
    userSignUp: [accountValidation.userSignUp, async (req, res) => {
        // destructure data from req.body
        const {
            username, email, password, confirmPassword, firstName, lastName
        } = req.body;
        // handle any validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                service: 'Account creation',
                errors
            })
        }
        // verify key account details are unique
        const emailIsUnique = await accountQueries.checkIfEmailExists(email);
        console.log(emailIsUnique)
        if (!emailIsUnique) {
            return res.status(409).json({
                message: 'Provided email is already in use. Please use a different email address or proceed to login with provided email.'
            })
        }
        // verify password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: 'Passwords do not match. Please verify and try again.'
            })
        }
        // hash user password
        const hashedPassword = await bcrypt.hash(password, 10);
        // store verified new user info in db
        const newUser = await accountQueries.signUpUser(username, email, hashedPassword, firstName, lastName);
        // all checks pass, return created info to frontend
        return res.status(200).json({
            message: 'User account created successfully.',
            accountInfo: newUser,
        })
    }]
}

module.exports = accountController;