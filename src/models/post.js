const dbPoll = require('../config/database'); // membuat object dbPoll untuk digunakan

const getAllPost = (req, res) => {
    const SQLQuery = `SELECT * FROM posts`;
    return dbPoll.execute(SQLQuery);
}

module.exports = { getAllPost }