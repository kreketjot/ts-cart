import Movie from '../Movie';

test('movie creation', () => {
  const movie = new Movie(532, 'Мстители', 50, true, 'The Avengers', 2012, 'США', 'Avengers Assemble!', [
    'фантастика',
    'боевик',
    'фэнтези',
    'приключения',
  ], 137);
  expect(movie.id).toBe(532);
});

test('changinh movie genres', () => {
  const genres = [
    'фантастика',
    'боевик',
    'фэнтези',
    'приключения',
  ];
  const movie = new Movie(532, 'Мстители', 50, true, 'The Avengers', 2012, 'США', 'Avengers Assemble!', genres, 137);
  genres.length = 0;
  expect(movie.genre.length).toBe(4);
});
