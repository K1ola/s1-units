// import getDate from './getDate';
const getDate = require('./getDate');

it('check date', () => {
  var dateObj = new Date();

  expect(dateObj).toEqual(dateObj);
});

it('check date with null', () => {
    var dateObj = null;
  
    expect(dateObj).toEqual(dateObj);
  });

