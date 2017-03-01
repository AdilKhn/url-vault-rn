import {setUvState, getUvState} from './StateEngine.js';

test('functions are found', () => {
 expect(setUvState).toBeDefined();
 expect(getUvState).toBeDefined();
});


test('keys can be added' , () => {
  setUvState('foo', 'bar');
  expect(getUvState('foo')).toBe('bar');
});
