const jwt = require('jsonwebtoken');

// ===============
// Verificar Token
// ===============

let verificaToken = (req, res, next) => {
    let token = req.get('token'); //Si se usa otra palabra tiene que estar en el header
    jwt.verify(token, process.env.SEED, (err,decoded) => {
        if(err){
            return res.status(401).json({
                ok:false,
                err
            })
        }
        req.usuario = decoded.usuario;
        next();
    })   
} ;

module.exports = {
    verificaToken
}