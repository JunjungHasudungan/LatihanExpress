// membuat fungsi untuk mengambil semua list data user
const getaAllUser = (req, res) => {
    res.json({
        message: "Get List data User"
    })
}

// fungsi untuk membuat user baru
const createNewUser = (req, res)=> {
    res.json({
        message: "Create New data user"
    })
}

// melakukan export semua fungsi yang ada didalam file userController
module.exports = {
    getaAllUser, createNewUser
}