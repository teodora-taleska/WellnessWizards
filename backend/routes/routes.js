import express from "express";
import { signup, signin } from "../controllers/auth.js"


const router = express.Router();


router.post("/sign-up", signup);
// router.post("/sign-up", signin);
router.get('/sign-in', signin);

export default router;
