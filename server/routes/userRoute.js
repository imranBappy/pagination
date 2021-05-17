const { userGetController, userManyPostController } = require('../controllers/userController');
const router = require('express').Router();

router.post('/add-many', userManyPostController);
router.get('/', userGetController);


module.exports = router;
