export interface ICreateService<RQ, RS> {
    create(request: RQ): Promise<RS>;
}
