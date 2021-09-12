import Cart from '../Cart';
import Book from '../../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding Book to cart', () => {
  const cart = new Cart();
  cart.add(new Book(4, 'Автостопом по галактике', 'Дуглас Адамс', 345, 314));

  expect(cart.items[0].id).toBe(4);
});
