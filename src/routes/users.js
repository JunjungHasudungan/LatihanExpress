const express = require('express')
const router = express.Router() // membuat router 
const userController = require('../controller/userController')

// router untuk mengambil semua data user
router.get('/', userController.getaAllUser) // mengambil seluruh list data user menggunakan userController
router.post('/', userController.createNewUser); // route untuk membuat user baru
router.patch('/:idUser', userController.updateUser); // method path meng-update sebagian dari data
router.get('/', userController.showDataUser);
router.delete('/:idUser', userController.deleteUser)

// router untuk mengirim / store data user baru 
router.post('/', (req, res)=> {
    res.json({
        message: "Post Data User"
    })
})
module.exports = router;