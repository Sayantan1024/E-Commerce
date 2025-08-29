import {Router} from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import { loginClient, sendOtpToCustomer, verifyOtpAndRegisterCustomer } from "../controllers/user.controllers.js";

const router = Router();

router.route("/send-otp").post(sendOtpToCustomer)
router.route("/register-customer").post(verifyOtpAndRegisterCustomer)
router.route("/login-client").post(loginClient)

export default router