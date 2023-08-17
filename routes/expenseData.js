const express=require('express');

const router = express.Router();

const addControllers=require('../controllers/expenseData');



router.post('/user/add-expenses', addControllers.postAddDetails)

router.get('/user/get-expenses',addControllers.getAddDetails)

router.delete('/user/delete-expenses/:productId',addControllers.deleteAddDetails)


module.exports = router;