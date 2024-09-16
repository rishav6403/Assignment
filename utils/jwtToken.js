import jwt from "jsonwebtoken";
const secret = process.env.JWT_KEY || "default_secret_key";
export function setUser(user){
    const payload = {
        id : user._id,
        email: user.email,
    }
    return jwt.sign(payload, secret, { expiresIn: "1d" });
}

export function getUser(token){
    if(!token) return null;
    try {
        return  jwt.verify(token, secret);
    } catch (error) {
       return null; 
    }
 
}

