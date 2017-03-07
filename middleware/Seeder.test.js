import Seeder from './Seeder.js';

test('it has expected data', () => {
  let realm =  Seeder.initDb();
  expect(Seeder.getData(realm).length).toBe(5);
  expect(Seeder.getData(realm)[0].description).toBe('Straight from realm yo');
});


test('it deletes a record', () => {
  let realm =  Seeder.initDb();
  expect(Seeder.getData(realm).length).toBe(5);
  Seeder.deleteRecord(realm);
  expect(Seeder.getData(realm).length).toBe(4);
});
