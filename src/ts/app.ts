import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
cart.add(new Movie(1010, 'Film', 'autor', 200, 3900, true));
cart.add(new Movie(1010, 'Film', 'autor', 200, 3900, true));
cart.add(new Smartphone(1210, 'nout', 200, 'a1' , 'lg', false));
cart.add(new Smartphone(1210, 'nout', 200, 'a1' , 'lg', false));
console.log(cart.totalSum());
console.log(cart.items);
