'use strict'

const R = require('ramda')

/**
 * @function toTimestamp
 * @param {Date} date - The date to convert
 * @returns {Number} - The number of milliseconds since the Unix Epoch
 */
const toTimestamp = R.invoker(0, 'getTime')

module.exports = toTimestamp
