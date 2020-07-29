import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('не пустая корзина', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1010, 'Film', 'autor', 200, 3900, true));

  expect(cart.items.length).toBe(3);
});


test('сумма в корзине', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 5, 5, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 10, true));
  cart.add(new Movie(1010, 'Film', 'autor', 1, 1, true));
  const result = cart.totalSum();

  expect(result).toBe(16);
});


test('скидка в корзине', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 5, 5, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 10, true));
  cart.add(new Movie(1010, 'Film', 'autor', 1, 1, true));
  const result = cart.afterSale(2);

  expect(result).toBe(14);
});


test('удаление из корзины', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1010, 'Film', 'autor', 200, 3900, true));
  const result = cart.deleteItem(1001);

  expect(cart.items.length).toBe(2);
});