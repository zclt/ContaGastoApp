export class Movimentacao {
    constructor(
        public categoria: string,
        public valor: number,
        public valorReal: number,
        public data: Date,
        public tags: string[]
        ) {}
}