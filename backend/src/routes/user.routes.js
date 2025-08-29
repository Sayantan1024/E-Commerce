import {Router} from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import { loginClient, registerCustomer } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register-customer").post(registerCustomer)
router.route("/login-client").post(loginClient)

export default router