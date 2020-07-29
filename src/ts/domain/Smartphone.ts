import Buyable from '../domain/Buyable';

export default class Smartphone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly model: string,
        readonly brand: string,
        readonly unique: boolean,
        public count: number = 1,
    ) { }
}