import express from 'express'
import { checkForAuthentication } from '../middleware/protectiveRoute.js';
const router = express.Router();


router.get("/",checkForAuthentication, async(req, res)=>{
    try {
        return res.render("home");
    } catch (error) {
        return res.status(500).send("Server Error");
    }
});

router.get("/signup", (req, res)=>{
    return res.render("signup")
})
router.get("/login", (req, res)=>{
    return res.render("login")
})
router.get("/logout", (req, res)=>{
    res.clearCookie("token");
    return res.redirect("/login")
})

export default router;