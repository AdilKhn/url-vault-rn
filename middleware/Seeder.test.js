import Seeder from './Seeder.js';

test('it has expected data', () => {
  Seeder.initDb();
  expect(Seeder.getData().length).toBe(5);
  expect(Seeder.getData()[0].description).toBe('Straight from realm yo');
})
