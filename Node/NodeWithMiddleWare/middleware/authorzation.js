// TODO: THis is middle ware file.......................

const verifyAutho = (req,res, next)=>{
    if (req.headers.authorization !== process.env.password) return res.sendStatus(401);
    next() //middle ware has access to next middleware function ya other function that why we call at the end of line next ()
}

module.exports = verifyAutho; 