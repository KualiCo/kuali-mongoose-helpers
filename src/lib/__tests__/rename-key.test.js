/* eslint-env jest */
'use strict'

const renameKey = require('../rename-key')

describe('renameKey', () => {
  test('renames key of object', () => {
    expect(
      renameKey('_id', 'id', { _id: 'foo', another: 'property' })
    ).toEqual({
      id: 'foo',
      another: 'property'
    })
  })
  test('returns new object', () => {
    const originalObject = {
      foo: 'bar',
      hello: 'world'
    }
    expect(renameKey('foo', 'bar', originalObject)).not.toBe(originalObject)
  })
})
