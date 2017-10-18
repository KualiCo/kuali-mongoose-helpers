/* eslint-env jest */
'use strict'

const toTimestamp = require('../to-timestamp')

describe('toTimestamp', () => {
  test('converts date to numeric timestamp', () => {
    expect(toTimestamp(new Date(0))).toBe(0)
    expect(toTimestamp(new Date(10000000))).toBe(10000000)
  })
})
