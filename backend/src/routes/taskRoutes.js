const { Router } = require('express');
const taskController = require('../controllers/taskController');

const router = Router();

router.get('/', taskController.getAll);

router.post('/', taskController.create);

router.put('/:id', taskController.update);

router.delete('/:id', taskController.deleteTask);

router.get('/dia', taskController.getDia);

router.get('/mes', taskController.getMes);

router.get('/ano', taskController.getAno);

module.exports = router;
