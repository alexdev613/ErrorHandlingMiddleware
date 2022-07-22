import AppError from '../../utils/AppError';
import model, { FilmInput, FilmOutput } from '../models/FilmModel';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await model.findAll();
};

// export const getById = async (id: number): Promise<FilmOutput> => {
//     const film = await model.findByPk(id);

//     if (!film) {
//         throw new Error('Registro não encontrado');
//     } // passa para o serviço
//     return film;
// };

export const getById = async (id: number): Promise<FilmOutput> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
        // são os argumentos que preenchem os parâmetros name, message, httpCode da classe AppError.
    }

    return film;
}

// função create, para add um novo filme:

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await model.create(payload);
};

// update alteração:

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    const film = await model.findByPk(id);
    
    if (!film) {
        throw new Error('Registro não encontrado');
    }

    return await film.update(payload);
};

// delete

export const deleteById = async (id: number): Promise<void> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new Error('Registro não encontrado');
    }

    await film.destroy();
}