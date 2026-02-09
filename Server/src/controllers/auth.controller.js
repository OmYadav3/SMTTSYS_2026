import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createNewUser, findUserByEmailAndRole } from '../models/user.model.js'

/* Register User */
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Some is missing is the given field"
            })
        }

        const existingUser = await findUserByEmailAndRole(email, role)
        if (existingUser) {
            return res.status(400).json({
                message: "User are already exists"
            })
        }

        const hassedPassword = bcrypt.hash(password, 10)

        const user = await createNewUser({
            name,
            email,
            password: hassedPassword,
            role
        })
        console.log('New User Register', user);

        return res.status(201).json(
            {
                message: 'User create successfully'
            }
        )

    } catch (error) {
        return res.status(500).json({
            message: 'Registeration failed !',
            error
        })
    }
}

/* Login User */
const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: 'All field are required'
            })
        }

        const user = await findUserByEmailAndRole(email, role)
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            })
        }

        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            return res.status(400).json({
                message: 'Password is incorrect'
            })
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        console.log("User Login Successfully", user);

        return res.status(200).json({
            message: 'User login successfully',
            token,
            user: {
                id: user.id,
                email: user.email
            }})

    } catch (error) {
        return res.status(500).json({
            message: 'Login failed !',
            error
        })
    }
}


export {
    registerUser,
    loginUser
}