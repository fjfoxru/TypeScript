import Buyable from './Buyable';

export default class Movie {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly duration: number,
        readonly unique: boolean,
        public count: number = 1,
    ) { }
}