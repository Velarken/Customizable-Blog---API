const pool = require('../pool.js');

const userProfileQueries = {
    getAccountInfo: async ( username ) => {
        const client = await pool.connect()
        try {
            const query = await client.query(`
                SELECT * FROM "user"
                WHERE username = $1
            `, [ username ]);
            
            const data = query.rows[0];

            return data;
        } catch (error) {
            return error;
        } finally {
            client.release();
        }
    },
    getPublicInfo: async ( username ) => {
        const client = await pool.connect();

        try {
            const query = await client.query(`
                SELECT username, first_name, last_name, bio, profile_photo FROM "user"
                WHERE username = $1
            `, [ username ]);

            const data = query.rows[0];

            return data;
        } catch (error) {
            return error;
        } finally {
            client.release();
        }
    },
    getFriendsList: async () => {
        const client = await pool.connect()
        try {
            const query = await client.query(`
                
            `, []);
        } catch (error) {
            return error;
        } finally {
            client.release();
        }
    },
    addProfileViewToUser: async () => {
        const client = await pool.connect()
        try {
            const query = await client.query(`
                
            `, []);
        } catch (error) {
            return error;
        } finally {
            client.release();
        }
    },
    sendUserDirectMessage: async () => {
        const client = await pool.connect()
        try {
            const query = await client.query(`
                
            `, []);
        } catch (error) {
            return error;
        } finally {
            client.release();
        }
    }
} 

module.exports = userProfileQueries