import { NextFunction, Request, Response, Router } from "express";
import * as controller from '../controllers/FilmController';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await controller.getAll());
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send(await controller.getById(parseInt(req.params.id)));
    } catch (error) {
        next(error);
    }
    // recebeu do controller que recebeu do service que recebeu do repository através do throw error no catch de cada um dos anteriores. OBS: não precisamos das excessões/throw e dos try/catchs do service e nem do repository! Por se tratarem de funções async que automaticamente passa o erro de camada por camada, sendo o único local de tratar de fato é na camada de rota que é FilmRoute.ts. A11P2I01:11:11
});

router.post('/', async (req: Request, res: Response) => {
    res.status(201).send(await controller.create(req.body));
});

router.put('/:id', async (req:Request, res: Response) => {
    res.send(await controller.updateById(parseInt(req.params.id), req.body));
});

router.delete('/:id', async (req: Request, res: Response) => {
    await controller.deleteById(parseInt(req.params.id));
    res.status(204).send();
});

export default router;
