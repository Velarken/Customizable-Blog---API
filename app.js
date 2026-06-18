const express = require('express');
const app = express();

const blogRouter = require('./src/routes/blogRouter.js');
const userRouter = require('./src/routes/userRouter.js');
const accountRouter = require('./src/routes/accountRouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/blog', blogRouter);
app.use('/user', userRouter);
app.use('/account', accountRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});