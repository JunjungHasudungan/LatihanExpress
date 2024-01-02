const UserModel = require('../models/user');

// membuat fungsi untuk mengambil semua list data user
const getaAllUser = async(req, res) => {
    try {
        const [data] = await UserModel.getAllUser(); // menggunakan [] agar daapt melakukan desctructring  keobjek data
        res.json({
            message: "Get List data User",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Errror",
            serverMesage: error
        })
    }
}

// fungsi untuk membuat user baru
const createNewUser = (req, res)=> {
    res.json({
        message: "Create New data user",
        data: req.body
    })
}

const updateUser = (req, res) => {
    // console.log(req.params); // mengecek request parameter yang ada dari route dan endpoint
    const { idUser } = req.params // menggunakan {} menkonversikan menjadi objek
    res.json({
        message: "Update User",
        data: req.body
    })
}

const showDataUser = (req, res)=> {
    res.json({
        message: "Show data user"
    })
}

const deleteUser = (req, res)=> {
    const { idUser } = req.params;

    res.json({
        message: "Delete User",
        data: {
            idUser: idUser
        }
    })
}

// melakukan export semua fungsi yang ada didalam file userController
module.exports = {
    getaAllUser, createNewUser, showDataUser, deleteUser, updateUser
}