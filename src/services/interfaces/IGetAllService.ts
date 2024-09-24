import IBook from "../../interfaces/IBook";

export interface IGetAllService{
    get(page:number): Promise<{ content: IBook[], totalPages: number, totalElements: number }>;
}
