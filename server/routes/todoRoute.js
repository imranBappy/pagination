const { todoManyPostController, todoGetController } = require('../controllers/todoController');

const router = require('express').Router();

router.post('/add-many', todoManyPostController);
router.get('/', todoGetController);


module.exports = router;
