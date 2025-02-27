import { Router } from 'express';
import produtoController from './produto.controller';
import isAdmin from '../../middlewares/isAdmin';
const router = Router();

router.get('/', produtoController.index);
router.post('/', produtoController.create); // isAdmin
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);

export default router;
