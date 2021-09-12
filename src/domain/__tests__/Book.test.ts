import Book from '../Book';

test('book creation', () => {
  const book = new Book(1, 'Последнее желание', 'Анджей Сапковский', 799, 874);
  expect(book.id).toBe(1);
});
