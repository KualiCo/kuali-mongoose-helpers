/* eslint-env jest */
'use strict'

const sortStringToObject = require('../sort-string-to-object')

describe('sortStringToObject', () => {
  test('converts sort string to object', () => {
    expect(sortStringToObject('name,-createdAt')).toEqual({
      name: 1,
      createdAt: -1
    })
    expect(Object.keys(sortStringToObject('name,-createdAt'))).toEqual([
      'name',
      'createdAt'
    ])
  })
  test('allows spaces before and after key', () => {
    expect(sortStringToObject(' name , -createdAt ')).toEqual({
      name: 1,
      createdAt: -1
    })
  })
})
