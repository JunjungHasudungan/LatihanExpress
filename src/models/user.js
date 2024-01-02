const dbPoll = require('../config/database'); // membuat object dbPoll untuk digunakan

// fungsi untuk mengambil data list user
const getAllUser = (req, res) => {
    const SQLQuery = 'SELECT * FROM users';  // mengambil semua data users dari table users
    return dbPoll.execute(SQLQuery); 
}

const createNewUser = (body)=> {
    const SQLQuery = `  INSERT INTO users(name, address, email) 
                        VALUES('${body.name}', '${body.address}', '${body.email}')`;
    return dbPoll.execute(SQLQuery);
}

const showDataUser = (idUser)=> {
    const SQLQuery = `SELECT name, email, address FROM users WHERE idUser=${idUser}`;
    return dbPoll.execute(SQLQuery);
}

const updateUser = (body, idUser)=> {
    const SQLQuery =    `UPDATE users SET name='${body.name}', 
                        address='${body.address}', email='${body.email}' 
                        WHERE idUser=${idUser}`;

    return dbPoll.execute(SQLQuery);
}

const deleteUser = (idUser)=> {
    const SQLQuery = `DELETE FROM users WHERE idUser = ${idUser}`;
    return dbPoll.execute(SQLQuery);
}
// melakukan export fungsi
module.exports = { getAllUser, createNewUser, updateUser, deleteUser, showDataUser }
