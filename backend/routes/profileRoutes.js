import exprss from 'express'
import profileController from '../controller/profileController.js';
import { protect, admin } from '../middleware/middleware.js';


const route = exprss.Router();


route.use('/createprofile', protect, profileController);


export default route;