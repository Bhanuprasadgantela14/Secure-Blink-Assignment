import express from 'express'
import {registerController,loginController,testController,forgotPasswordController,} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);

//Forgot Password 
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test',requireSignIn,isAdmin, testController);

//Protected USER route 
router.get('/user-auth',requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
});

//Admin RouTE
router.get('/admin-auth',requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true});
});


export default router;