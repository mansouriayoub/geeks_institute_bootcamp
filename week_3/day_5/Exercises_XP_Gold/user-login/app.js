import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const users = [];

const app = express();

app.use(express.json())


/*
    create a function that takes a required role as argument
    it returns a middleware function with (req, res, next)
    inside check req.user.role against the required role
    if match → call next()
    if no match → return 403 Forbidden
*/
const checkRole = (role)=>{
    return (req,res, next)=>{
        if (req.user.role === role) {
            next()
        }else{
            return res.status(403).json({message: 'access forbidden'})
        }
    }
}

const verifyToken = (req, res, next) => {
    try {
        
        // get token from authorization header
        const token = req.headers.authorization
        // verify it with jwt.verify()
        const secretKey = process.env.JWT_SECRET;
        const decoded = jwt.verify(token.split(' ')[1], secretKey)
        // attach decoded payload to req.user
        req.user = decoded;
        // call next()
        next()
        // if error → return 401
    } catch (error) {
        return res.status(401).json({message: error})
    }
}


/**
 * Profile   → verify token from request header → find user → send user data
 */
app.get('/api/profile', verifyToken, async (req, res) => {

    // const secretKey = process.env.JWT_SECRET;
    // const token = req.headers.authorization
    try {
        
        // const decoded = jwt.verify(token.split(' ')[1], secretKey)
        // const email = decoded.email

        const user = users.find(user=>user.email=== req.user.email)

        if (user) {
            res.json({
                id: user.id,
                email: user.email,
                role: user.role
            })
        }else{
            return res.status(404).json({message:'user not found'})
        }

    } catch (error) {
        return res.status(400).json({message:'Invalid Token'})
    }
})

/**Register  → validate body → check if email exists → hash password → store user → respond */
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body

    const regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!email || !password) {
        return res.status(400).json({message:'email necessary'})
    }

    try {
        
        if (!regexPass.test(password)) {
            return res.status(400).json({message:`minimum length (e.g. 8 characters)\n at least one uppercase letter\n at least one number\n at least one special character`})
            }
            
        const foundUser = users.find(user=>user.email===email)

        if (foundUser) {
            
            return res.status(409).json({message:'Email already exist'})
            
        }else{
            const newUser = {
                id: users.length+1,
                email,
                role: req.body.role || 'user',
                password: await bcrypt.hash(password, 10),
                failedAttempts: 0,
                lockedUntil: null
            }

            users.push(newUser)
            res.status(201).json({message:'New user added'})
        }

    } catch (error) {
        return res.status(500).json({message:'bad request'})
    }
})

/**Login     → validate body → find user by email → compare password → generate token → respond */
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({message:'missing email'})
    }

    try {
        const foundUser = users.find(user=>user.email===email)

        if (!foundUser) {
            return res.status(404).json({message:'user not found'})
        }else{

            if (foundUser.lockedUntil && foundUser.lockedUntil > Date.now()) {
                return res.status(423).json({message:'user locked in'})
            } 
            const userPass = await bcrypt.compare(password, foundUser.password);

            if (!userPass) {
                foundUser.failedAttempts++
                if (foundUser.failedAttempts >= 5) {
                    foundUser.lockedUntil = Date.now() + (15*60*1000)
                    return res.status(401).json({message:'you need to wait to try again'})
                }
                return res.status(401).json({message:'Unauthorized'})
            }
            foundUser.failedAttempts = 0
            foundUser.lockedUntil = null
            const token = jwt.sign({email, role: foundUser.role}, process.env.JWT_SECRET, {expiresIn: '2h'})
            res.json({token});
        }
    } catch (error) {
        return res.status(400).json({message:'missing email or password'})
    }
})



app.get('/api/admin', verifyToken,checkRole('admin'), (_req,res)=>{
    res.json({message:'Welcome admin'})
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started at ${port}`))