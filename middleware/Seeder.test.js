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

test('it deletes all records', () => {
  let realm =  Seeder.initDb();
  expect(Seeder.getData(realm).length).toBe(5);
  Seeder.deleteAllRecords(realm);
  expect(Seeder.getData(realm).length).toBe(0);
});

test('it finds a record', () => {
  let realm = Seeder.initDb();
  expect(Seeder.findRecord(realm, 'goOgle').length).toBe(1);
  expect(Seeder.findRecord(realm, 'napSter')[0].url).toBe('http://www.napster.com');
});
