const blogQueries = require('../../lib/db/queries/blogQueries.js');

const blogController = {
    getUserBlogs: async ( req, res ) => {
        const { username, userId } = req.body;
        
        // db query for all posts with authorId matching userId

        res.status(200).json({
            message: `Showing all published blog posts for user: ${username}.`,
            info: `Username: ${username}, ID:  ${userId}`
        })
    },
    saveBlogInProgress: async ( req, res ) => {
        // this will also include any uploaded photos, videos, or audios
        // attached to this post
        const { postTitle, postContent, authorId, username } = req.body;

        // db query to save all uploaded info with the authorId as a 
        // secondary identifier to the postId (postId auto generated from DB)

        res.status(200).json({
            message: `Blog post successfully saved for: ${username}.`,
            postInfo: {
                title: postTitle,
                content: postContent,
                authorId,
                username
            }
        })

    }
}

module.exports = blogController;