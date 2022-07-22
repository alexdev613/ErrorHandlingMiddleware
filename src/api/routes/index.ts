import { Router } from 'express';
import films from './FilmRoute';

const routes = Router();

routes.use('/films', films);

export default routes;