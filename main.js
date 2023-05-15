const express = require('express');
const globalRouter = require('./routers/globalRouter');
const userRouter = require('./routers/userRouter');
const boardRouter = require('./routers/boardRouter');

const app = express(); 

app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/', globalRouter);



app.listen(3000, () => {
	console.log('working right now! hahahaha');
});