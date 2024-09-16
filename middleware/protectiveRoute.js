import { getUser } from "../utils/jwtToken.js";


export async function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;
    
    if (!tokenCookie) return res.redirect("/login");

    const token = tokenCookie
    try {
        const user = await getUser(token);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).end({ error: "Unauthorized" });
    }
}


