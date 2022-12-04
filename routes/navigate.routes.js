const navigateController = require('../controllers/navigate.controller.js')
export {Router} from 'express'

const router = Router
router.get('/', navigateController.getNavigate)
router.post('/', navigateController.save)
router.put('/:id', navigateController.updateByIDNavigate)
router.delete('/:id', navigateController.deleteByIDNavigate)
