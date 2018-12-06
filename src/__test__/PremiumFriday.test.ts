import MockDate from 'mockdate';
import pFriday from '../index';

test('getBy', () => {
  expect(pFriday['getBy'](2018, 6)).toEqual(new Date(2018, 6, 27));
  expect(pFriday['getBy'](2018, 11)).toEqual(new Date(2018, 11, 28));
  expect(pFriday['getBy'](2018, 12)).toEqual(new Date(2019, 0, 25));
});

test('isEqual', () => {
  expect(
    pFriday['isEqual'](new Date(2018, 10, 10), new Date(2018, 10, 10))
  ).toBe(true);

  expect(
    pFriday['isEqual'](new Date(2018, 10, 10), new Date(2018, 10, 11))
  ).toBe(false);
});

test('isPremium, no arg', () => {
  MockDate.set('2018-11-30');
  expect(pFriday.isPremium()).toBe(true);

  MockDate.set('2018-11-29');
  expect(pFriday.isPremium()).toBe(false);
});

test('isPremium, string arg', () => {
  MockDate.set('2018-11-30');
  expect(pFriday.isPremium('2018-09-28')).toBe(true);
  expect(pFriday.isPremium('2018-09-29')).toBe(false);

  expect(pFriday.isPremium('2018-11-29')).toBe(false);
  expect(pFriday.isPremium('2018-11-30')).toBe(true);

  MockDate.set('2018-11-15');
  expect(pFriday.isPremium('2018-09-28')).toBe(true);
  expect(pFriday.isPremium('2018-09-29')).toBe(false);

  expect(pFriday.isPremium('2018-11-29')).toBe(false);
  expect(pFriday.isPremium('2018-11-30')).toBe(true);
});

test('isPremium, date arg', () => {
  MockDate.set('2018-11-30');
  expect(pFriday.isPremium(new Date('2018-09-28'))).toBe(true);
  expect(pFriday.isPremium(new Date('2018-09-29'))).toBe(false);

  expect(pFriday.isPremium(new Date('2018-11-29'))).toBe(false);
  expect(pFriday.isPremium(new Date('2018-11-30'))).toBe(true);

  expect(pFriday.isPremium(new Date(2018, 10, 29))).toBe(false);
  expect(pFriday.isPremium(new Date(2018, 10, 30))).toBe(true);

  MockDate.set('2018-11-15');
  expect(pFriday.isPremium(new Date('2018-09-28'))).toBe(true);
  expect(pFriday.isPremium(new Date('2018-09-29'))).toBe(false);

  expect(pFriday.isPremium(new Date('2018-11-29'))).toBe(false);
  expect(pFriday.isPremium(new Date('2018-11-30'))).toBe(true);
});

test('isPremium, number arg', () => {
  MockDate.set('2018-11-30');
  expect(pFriday.isPremium(2018, 9, 28)).toBe(true);
  expect(pFriday.isPremium(2018, 9, 29)).toBe(false);

  expect(pFriday.isPremium(2018, 11, 29)).toBe(false);
  expect(pFriday.isPremium(2018, 11, 30)).toBe(true);

  MockDate.set('2018-11-15');
  expect(pFriday.isPremium(2018, 9, 28)).toBe(true);
  expect(pFriday.isPremium(2018, 9, 29)).toBe(false);

  expect(pFriday.isPremium(2018, 11, 29)).toBe(false);
  expect(pFriday.isPremium(2018, 11, 30)).toBe(true);
});

test('isPremium, false', () => {
  expect(pFriday.isPremium('')).toBe(false);
  // @ts-ignore
  expect(pFriday.isPremium(null)).toBe(false);
});

test('get', () => {
  MockDate.set('2018-09-1');
  expect(pFriday.get()).toEqual(new Date(2018, 8, 28));

  MockDate.set('2018-11-1');
  expect(pFriday.get()).toEqual(new Date(2018, 10, 30));
});
