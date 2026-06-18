const pool = require('../pool.js');

const accountQueries = {
    checkIfEmailExists: async (email) => {
        const client = await pool.connect();
        // email should be unique, query checks for existing account with provided email
        try {
            const query = await client.query(`
                SELECT * from "user"
                WHERE email = $1
            `, [email]);
            const data = query.rows[0];
            if (data == undefined) {
                return true; // no user found with provided email
            }
            if (data) {
                return false; // user found with matching email
            }
            return
        } catch (error) {
            return error
        } finally {
            client.release();
        }
    },
    signUpUser: async (username, email, password, firstName, lastName) => {
        const client = await pool.connect();
        // add validated new user to the user db table
        try {
            const query = await client.query(`
                INSERT INTO "user" (username, email, password, first_name, last_name)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `, [username, email, password, firstName, lastName]);
            const data = query.rows[0];
            console.table(data)
            return data;
        } catch (error) {
            console.log('something went wrong with db query')
            return error;
        } finally {
            client.release();
        }
    }
}

module.exports = accountQueries;