export interface IDeleteService<ID>{
    delete(id: ID): Promise<void>;
}
