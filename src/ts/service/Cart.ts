import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.unique || this._items.find(element => element.id == item.id) === undefined) {
            this._items.push(item);
        } else {
            this._items.map((element)=> {
                element.id == item.id ? element.count + 1 : '';
            });
        }
        
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    totalSum(): number {
        return this._items.reduce((sum, current) => sum + current.price, 0);
    }
    afterSale(amountSale: number): number {
        return this._items.reduce((sum, current) => sum + current.price, 0) - amountSale;
    }
    deleteItem(id: number): void {
        this._items.splice(this._items.findIndex(item => item.id == id), 1);
    }
}   