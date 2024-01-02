const dbPoll = require('../config/database'); // membuat object dbPoll untuk digunakan

// fungsi untuk mengambil data list user
const getAllUser = (req, res) => {
    const SQLQuery = 'SELECT * FROM users';  // mengambil semua data users dari table users
    return dbPoll.execute(SQLQuery); 
}

// melakukan export fungsi
module.exports = {getAllUser}
