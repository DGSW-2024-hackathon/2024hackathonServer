const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
//const openai = require('openai');

dotenv.config();

const app = express();

const {sequelize} = require('./models');

//const indexRouter = require('./routers');
const chatRouter = require('./routers/openai');
const humanIntelRouter = require('./routers/humanintel');



// routes 폴더 
//app.use('/', indexRouter);
app.use('/chat', chatRouter);
app.use('/human', humanIntelRouter);


app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));



app.set('port', process.env.PORT || 3000);
sequelize.sync({ force: false })
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
})




// Not found
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
    error.status = 404;
    next(error);
});

// server error
app.use((err, req, res) => {
    res.status(500).json(err.message);
});

// 포트 대기 출력
app.listen(app.get('port'), () => {
    console.log('wating on port', app.get('port'));
});