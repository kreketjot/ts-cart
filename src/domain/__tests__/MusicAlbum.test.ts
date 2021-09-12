import MusicAlbum from '../MusicAlbum';

test('music album creation', () => {
  const album = new MusicAlbum(31342, 'Проклятие морей', 'Ария', 149);
  expect(album.author).toBe('Ария');
});
