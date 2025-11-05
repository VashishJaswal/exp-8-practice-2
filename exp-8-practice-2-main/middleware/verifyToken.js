const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mySecretKey';

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // No token provided

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = decoded; // attach decoded payload
        next();
    });
}

module.exports = verifyToken;
