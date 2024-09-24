import IBook from "../../interfaces/IBook";

export interface IGetOneService<ID>{
    getOne(id: ID): Promise<IBook>;
}