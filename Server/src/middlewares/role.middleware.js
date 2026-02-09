export const isAdmin = async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(200).json({
            message: 'Admin access Only'
        })
    }
    next();
}