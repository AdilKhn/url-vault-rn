import Dao from './Dao.js';

test('gots the data from the dao', () => {
 expect(Dao.getLinks()).toBeDefined();
});

test('Gets an Array of Link Objects', () => {
  expect(Dao.getLinks()[0]['url']).toBe('http://www.google.com');
});



