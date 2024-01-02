const PostModel = require('../models/post');

const getAllPost = async(req, res)=> {
    const [data] = await PostModel.getAllPost();
    try {
        res.json({
            message: "Get List Successfully..",
            data: data
        })
    } catch (error) {
     res.json({
        message: "GetList failed",
        serverMessage: error
     });   
    }
}

module.exports = { getAllPost }