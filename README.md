# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @humairatasnim/lotide`

**Require it:**

`const _ = require('@humairatasnim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Compares 2 arrays and confirms if they are equal
* `assertEqual(actual, expected)`: Compares 2 primitive values and confirms if they are equal
* `assertObjectsEqual(actual, expected)`: Compares 2 objects and confirms if they are equal
* `countLetters(str)`: Returns an object with the total occurances of each letter in the string
* `countOnly(allItems, itemsToCount)`: Returns an object with the total occurances of items that appear in array
* `eqArrays(arr1, arr2)`: Compares 2 arrays and confirms if they are equal
* `eqObjects(object1, object2)`: Compares 2 objects and confirms if they are equal
* `findKey(obj, callback)`: Returns the key of an object the value of which meets the callback function criteria
* `findKeyByValue(obj, val)`: Returns the key of an object the value of which meets the provided value
* `flatten(arr)`: Returns a flattened array from a nested array
* `head(arr)`: Returns first element of array
* `letterPositions(sentence)`: Returns an object with letters as keys and their indices of occurence in the sentence in an array as values
* `map(array, callback)`: Implementation of the built-in Array.Prototype.map() function
* `middle(array)`: Returns middle elements of array
* `tail(arr)`: Returns array without the first element
* `takeUntil(array, callback)`: Returns array with elements until it meets the callback function criteria 
* `without(source, itemsToRemove)`: Returns array with the items in itemsToRemove removed