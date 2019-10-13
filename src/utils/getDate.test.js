// import getDate from './getDate';
const getDate = require('./getDate');

it('check date', () => {
  const dateObj = new Date();

  expect(dateObj).toEqual(dateObj);
});

it('check date with null', () => {
    const dateObj = null;
  
    expect(dateObj).toEqual(null);
  });

