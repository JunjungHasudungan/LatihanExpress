// const { PrismaClient } = require('@prisma/client'); // melakukan import PrismaClient
import { PrismaClient } from '@prisma/client';
import "dotenv/config"
import express from "express"
// import postRoute from "./routes/users.js"
// import userRoute from "./routes/users.js"
// require('dotenv').config()
// const express = require('express')
const PORT = process.env.PORT || 5000;
// const userRoute = require('./routes/users.js');
// const postRoute = require('./routes/posts.js');
const prisma = new PrismaClient()

// const middlewareLogRequest = require('./middleware/log');
const app = express()

// membuat middleware
// app.use(middlewareLogRequest)
app.use(express.json()) // middleware mengizinkan untuk mengakses request body dari jason
app.use('/assets', express.static('public/images')) // memberikan izin akses untuk file dalam folder public

// menggunakan route user yang telah dibuat
// app.use('/user', userRoute);
// app.use('/post', postRoute);
app.post('/comments', async(req, res, next)=> {
    try {

        const user = await prisma.comments.create({
            data: {
              body: 'elsa@prisma.io',
            },
          })
        // const result = await prisma.comments.create({
        //     data: {
        //         body: req.body.body
        //     }
        // });

        res.status(201).json({
            message: "Created Comment Successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
})

// melakukan eksekusi dbPoll
// app.use('/', (req, res)=> {
//     dbPool.execute('SELECT * FROM users', (err, row)=> {
//         if (err) {
//             res.json({
//                 message: "Connection Failed"
//             })
//         }
//         res.json({
//             message: "Connection Successfully",
//             data: row
//         });
//     });
// })

// membuat port
app.listen(PORT, ()=> {
    console.log(`server berhasil dibuat diport ${PORT}`)
})