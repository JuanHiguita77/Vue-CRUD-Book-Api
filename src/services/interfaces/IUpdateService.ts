export interface IUpdateService<RQ, RS, ID> {
    update(request: RQ, id: ID): Promise<RS>
}