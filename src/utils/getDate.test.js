import { getDate } from './getDate';
// const getDate = require('./getDate');

it('check date', () => {
  const date = getDate(0);

  expect(date).toBe('1 января, чт, 1970 год');
});

it('check date with null', () => {  
  const date = getDate(null);
  
  expect(date).toBeNull();
});


