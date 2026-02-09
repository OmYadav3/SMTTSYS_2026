import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    console.log('VERIFY TOKEN MIDDLEWARE HIT');

    try {
        const authHeader = req.headers.authorization;
        console.log("HEADERS :", authHeader);
        if (!authHeader) {
            return res.status(401).json({
                message: 'Token missing'
            })
        }

        const token = authHeader.split(" ")[1]
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken;

        next();
    } catch (error) {
        console.log('Error while verify token');
        return res.status(401).json({
            message: 'Invalid or expired token'
        })

    }
}