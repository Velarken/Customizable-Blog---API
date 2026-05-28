const pool = require('../pool.js');

const blogQueries = {
    getAllPostsByUser: async () => {
        const client = await pool.connect();
        try {
            
        } catch (error) {
            console.log(error)
        } finally {
            await client.release();
        }
    }
}

module.exports = blogQueries;