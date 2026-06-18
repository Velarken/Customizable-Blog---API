const userQueries = require('../../lib/db/queries/userProfileQueries.js');

const userController = {
    getPublicUserInfo: async ( req, res ) => {
        const { username } = req.body;
        try {
            const userData = await userQueries.getPublicInfo(username);

            res.status(200).json(userData);
        } catch (error) {
            res.status(400).json(error);
        } finally {
            return
        }
    },
    getAllAccountInfo: async ( req, res ) => {
        const { username } = req.body;
        try {
            const userData = await userQueries.getAccountInfo(username);

            res.status(200).json(userData);
        } catch (error) {
            res.status(400).json(error);
        } finally {
            return
        }
    }
}

module.exports = userController;