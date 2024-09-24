import { AxiosResponse } from "axios";

export async function handleRequest<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
    try {
        const response = await request;
        return response.data;
    } catch (e) {
        console.error('API request failed:', e);
        throw e;
    }
}
