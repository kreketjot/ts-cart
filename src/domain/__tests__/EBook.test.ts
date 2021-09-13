import EBook from '../EBook';

test('Ebook creation', () => {
  const book = new EBook(1001, 'Последнее желание', 'Анджей Сапковский', 299, 874);
  expect(book.id).toBe(1001);
});
