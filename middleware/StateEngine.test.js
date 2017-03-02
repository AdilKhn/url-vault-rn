import {setUvState, getUvState} from './StateEngine.js';

test('functions are found', () => {
 expect(setUvState).toBeDefined();
 expect(getUvState).toBeDefined();
});


test('keys can be set and get' , () => {
  setUvState('foo', 'bar');
  expect(getUvState('foo')).toBe('bar');
});


test('functions can be set and run', () => {
  let mockFunc = () => {return 'foo'};
  setUvState('func', mockFunc);
  expect(getUvState('func')()).toBe('foo');
});
