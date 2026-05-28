const pool = require('../pool.js');

const blogQueries = {
    getAllPostsByUser: async ( authorId ) => {
        const client = await pool.connect();
        try {
            const query = await client.query(`
                SELECT * FROM posts
                WHERE authorId = $1
            `, [ authorId ])
            const data = query.rows[0]

            return data
        } catch (error) {
            return error
        } finally {
            await client.release();
        }
    }
}

module.exports = blogQueries;