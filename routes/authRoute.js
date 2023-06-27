import express from "express";
import {
  registerController,
  loginController,
  testController,
  userAuthController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController)



//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//user route auth for dashboard

router.get('/user-auth', requireSignIn, userAuthController, (req, res) => {
  res.status(200).send({ ok: true })
})



export default router;
