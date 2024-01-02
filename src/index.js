require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 5000;
const userRoute = require('./routes/users.js');
const postRoute = require('./routes/posts.js');

const middlewareLogRequest = require('./middleware/log');
const app = express()

// membuat middleware
app.use(middlewareLogRequest)
app.use(express.json()) // middleware mengizinkan untuk mengakses request body dari jason
app.use('/assets', express.static('public/images')) // memberikan izin akses untuk file dalam folder public

// menggunakan route user yang telah dibuat
app.use('/user', userRoute);
app.use('/post', postRoute);

// melakukan eksekusi dbPoll
app.use('/', (req, res)=> {
    dbPool.execute('SELECT * FROM users', (err, row)=> {
        if (err) {
            res.json({
                message: "Connection Failed"
            })
        }
        res.json({
            message: "Connection Successfully",
            data: row
        });
    });
})

// membuat port
app.listen(PORT, ()=> {
    console.log(`server berhasil dibuat diport ${PORT}`)
})