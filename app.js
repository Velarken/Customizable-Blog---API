const express = require('express');
const app = express();

const blogRouter = require('./src/routes/blogRouter.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/blog', blogRouter)

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});