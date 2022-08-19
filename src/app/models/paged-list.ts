export class PagedList<T> {
    constructor(public items: T[],
        public hasNextPage: boolean,
        public hasPreviousPage: boolean,
        public pageNumber: number,
        public pageSize:number) {}
}