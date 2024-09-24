import axios from "axios";
import IBook from "@/interfaces/IBook";
import { IBookService } from "./interfaces/IBookService";
import { handleRequest } from "@/helpers/handleRequest";

export class BookService implements IBookService{

    private URL = 'http://localhost:8080/api/v1/books'

    async get(page: number): Promise<{ content: Array<IBook>, totalPages: number, totalElements: number }> {
        const responseData = await handleRequest(axios.get(`${this.URL}?page=${page}`));
        // Retornar directamente los datos necesarios
        return {
            content: responseData.content,
            totalPages: responseData.totalPages,
            totalElements: responseData.totalElements,
        }
    }

    async getOne(id: number): Promise<IBook> {
        return handleRequest<IBook>(axios.get<IBook>(`${this.URL}/${id}`))
    }

    async create(request: IBook): Promise<IBook> {
        return handleRequest<IBook>(axios.post<IBook>(this.URL, request))
    }
    
    async update(request: IBook, id: number): Promise<IBook> {
        return handleRequest<IBook>(axios.put<IBook>(`${this.URL}/${id}`, request))
    }

    async delete(id: number): Promise<void> {
        handleRequest(axios.delete<void>(`${this.URL}/${id}`))
    }
}