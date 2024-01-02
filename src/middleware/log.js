// membuat middleware

const logRequest = (req, res, next)=> {
    console.log('Terjadi request ke path:', req.path);
    next();
}


// melakukan export 
module.exports = logRequest