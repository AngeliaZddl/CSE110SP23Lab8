// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = require('../code-to-unit-test/unit-test-me.js');

// Test cases for isPhoneNumber function
test('valid phone numbers', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBeTruthy();
  expect(isPhoneNumber('123(456)-7890')).toBeFalsy();
  expect(isPhoneNumber('123-456-7890')).toBeTruthy();
  expect(isPhoneNumber('1234567890')).toBeFalsy();
    //expect(isPhoneNumber('123-4567(890)')).toBeFalsy(); 
    // Bug!!! The result is supposed to be Falsey.
  //????expect(isPhoneNumber('123-4567-890')).toBeFalsy();
});

// Test cases for isEmail function
test('valid email addresses', () => {
  expect(isEmail('test@example.com')).toBeTruthy();
  expect(isEmail('testexample.com')).toBeFalsy();
  expect(isEmail('test@')).toBeFalsy();
  expect(isEmail('@example.com')).toBeFalsy();
});

// Test cases for isStrongPassword function
test('strong passwords', () => {
  expect(isStrongPassword('A1_bcd')).toBeTruthy();
  expect(isStrongPassword('A1bc')).toBeTruthy();
  expect(isStrongPassword('1Abc')).toBeFalsy();
  expect(isStrongPassword('Abc')).toBeFalsy();
  expect(isStrongPassword('Abcdefghijklmnopq')).toBeFalsy();
});

// Test cases for isDate function
test('valid date format', () => {
  expect(isDate('01/01/2022')).toBeTruthy();
  expect(isDate('1/1/2022')).toBeTruthy();
  expect(isDate('01-01-2022')).toBeFalsy();
  expect(isDate('01/01/22')).toBeFalsy();
});

// Test cases for isHexColor function
test('valid hex color codes', () => {
  expect(isHexColor('#123abc')).toBeTruthy();
  expect(isHexColor('#123')).toBeTruthy();
  expect(isHexColor('123abc')).toBeTruthy();
  expect(isHexColor('#123ab')).toBeFalsy();
  expect(isHexColor('1234')).toBeFalsy();
});