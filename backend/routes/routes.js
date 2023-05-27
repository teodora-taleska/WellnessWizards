import express from "express";
import { signup, signin } from "../controllers/auth.js"


const router = express.Router();


router.post("/sign-up", signup);
router.get('/sign-in', signin);

export default router;
