const express = require('express')
const userRoute = require('./routes/users.js')
const app = express()

// membuat variable router untuk user

// menggunakan route user yang telah dibuta
app.use('/', userRoute)
// membuat routing 
app.get('/', (req, res)=> {
    res.json({
        name: "Hasudungan",
        age: 30,
        address: "Bandung-barat"
    })
})

// membuat port
app.listen(4000, ()=> {
    console.log('server berhasil dibuat diport 4000')
})