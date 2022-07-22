import { FilmInput, FilmOutput } from '../database/models/FilmModel';
import * as repository from '../database/repositories/FilmRepository';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await repository.getAll();
};

// export const getById = async (id: number): Promise<FilmOutput> => {
//     try {
//         return await repository.getById(id);
//     } catch (error) {
//         throw error;
//     } // passa para o controller
// };

export const getById = async (id: number): Promise<FilmOutput> => {
    return await repository.getById(id); // passa para o controller
};

// create criar
export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await repository.create(payload);
};
// update alterar
export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    return await repository.updateById(id, payload);
};
//delete
export const deleteById = async (id: number): Promise<void> => {
    repository.deleteById(id);
};