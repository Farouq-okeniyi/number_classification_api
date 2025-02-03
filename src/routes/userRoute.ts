import express from 'express';
import usercontroller from '../controller/userController'
const Router = express.Router();


Router.route('/api/classify-number').get(usercontroller)

export default Router