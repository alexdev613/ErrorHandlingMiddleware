import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './api/routes/index'

import sequelize from './database/sequelize';
import AppError from './utils/AppError';
// import films from './app/controllers/FilmController'; //foi para index.ts

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());
app.use('/api/v1', routes);
// app.use('/films', films); //foi pra intex.ts

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World com Express + TypeScript!!!');
});

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error(err.stack);
//     // res.status(404).send("Something Broke! - Alguma coisa deu errado!");
//     // Existem três parâmetros em err, name, message e stack, stack é opcional
//     res.status(404).send(`${err.name}: ${err.message}`);
// });

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.getHttpCode()).send(err.getError()); // retorna json
    //res.status(err.getHttpCode()).send(err.toString()); // retorna text/html
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o postgres realizada com sucesso');
}).catch((error: Error) => {
    console.log(`Conexão com o postgres não foi bem sucedida. ${error}`);
});