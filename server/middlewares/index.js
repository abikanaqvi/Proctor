const jwt = require('jsonwebtoken');

const requireSignIn = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = user;
    } else {
        res.status(400).json({ msg: `Authorization required` });
    }
    next();
}

module.exports = {
    requireSignIn
}