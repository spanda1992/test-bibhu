const auth = (req, res, next) => {
    const token = req.header('Authorization')
    if(token === 'abcd'){
        next()
    }else{
        res.status(400).send({error:'User not authenticated'})
    }
}

module.exports = auth