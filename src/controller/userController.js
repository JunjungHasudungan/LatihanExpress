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
const createNewUser = async (req, res)=> {
    const { body } = req;

    // melakukan validasi inputan pada setiap body
    if(!body.name || !body.address || !body.email) {
        res.status(400).json({
            message: "uncompleted data send..",
            data: null
        });
    }

    try {
        // inisalisasi model User
        await UserModel.createNewUser(body)
        res.status(201).json({
            message: "Create New user Successfully..",
            data: req.body
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Failed Created User",
            serverMesage: error
        })
    }
}

const updateUser = async(req, res) => {
    // console.log(req.params); // mengecek request parameter yang ada dari route dan endpoint
    const { idUser } = req.params // menggunakan {} menkonversikan menjadi objek
    const { body } = req;

    try {
        await UserModel.updateUser(body, idUser)

        res.json({
            message: "Updated User Successfully..",
            data: {
                id: idUser,
                ...body // menggunakan ... / spread agar menampilkan semua isi dari object body
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Updated User Failed",
            serverMesage: error
        })
    }
}

const showDataUser = async(req, res)=> {
    const {idUser} = req.params;
    console.log(`idUser: ${idUser}`)
    try {
        await UserModel.showDataUser(idUser);
        res.json({
            message: "Show data user Successfully.."
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Show data user Failed..",
            serverMesage: error
        });
    }
}

const deleteUser = async(req, res)=> {
    const { idUser } = req.params;
    
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: "Delete User Successfully..",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Deleted User Failed..",
            serverMesage: error
        });
    }


}

// melakukan export semua fungsi yang ada didalam file userController
module.exports = {
    getaAllUser, createNewUser, showDataUser, deleteUser, updateUser
}