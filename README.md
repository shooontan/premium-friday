# premium-friday

[![npm version](https://img.shields.io/npm/v/premium-friday.svg)](https://www.npmjs.com/package/premium-friday)
[![install size](https://packagephobia.now.sh/badge?p=premium-friday)](https://packagephobia.now.sh/result?p=premium-friday)
[![Build Status](https://travis-ci.com/shooontan/premium-friday.svg?branch=master)](https://travis-ci.com/shooontan/premium-friday)

This is JavaScript Library for Premium Friday. Helps to find Premium Friday.


## Install

```bash
# npm
$ npm install premium-friday

# or yarn
$ yarn add premium-friday
```

## Use

```js
const pFriday = require('premium-friday');

// Sat Nov 10 2018 09:00:00 GMT+0900 (日本標準時)

const premium = pFriday.get(); // new Date('2018-11-30')
const isPremium = pFriday.isPremium(); // false

//----------------------------------------------------

// Fri Nov 30 2018 09:00:00 GMT+0900 (日本標準時)

const premium = pFriday.get(); // new Date('2018-11-30')
const idPremium = pFriday.isPremium(); // true

```

## Documents

### `.get()`

```js
// Sat Dec 01 2018 00:00:00 GMT+0900 (日本標準時)

const premium = pFriday.get();
console.log(premium); // Fri Dec 28 2018 09:00:00 GMT+0900 (日本標準時)
```

Returns `Date` which is next Premium Friday.

If now is November 5, 2018, `get()` return `new Date('2018-11-30')` because last friday in November is 30th.


### `.isPremium([date, [month, day]])`

```js
// Fri Nov 30 2018 09:00:00 GMT+0900 (日本標準時)

const isPremium = pFriday.isPremium(); // true
const isPremium = pFriday.isPremium('2018-11-30'); // true
const isPremium = pFriday.isPremium(2018, 11, 30); // true
const isPremium = pFriday.isPremium(new Date(2018, 10, 30)); // true

//--------------------------------------------------

// Sat Dec 01 2018 00:00:00 GMT+0900 (日本標準時)

const isPremium = pFriday.isPremium(); // false
const isPremium = pFriday.isPremium('2018-11-30'); // true
const isPremium = pFriday.isPremium(2018, 11, 30); // true
const isPremium = pFriday.isPremium(new Date(2018, 10, 30)); // true
```

Returns `boolean`. If `.isPremium()` args is Premium Friday, return `true`.
