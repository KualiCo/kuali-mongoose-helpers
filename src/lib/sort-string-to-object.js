'use strict'

const R = require('ramda')

const removeLeadingDash = R.replace(/^-/, '')
const sortAscending = R.always(1)
const sortDescending = R.always(-1)
const isDescending = R.startsWith('-')
const getSortKeyValue = R.applySpec({
  key: removeLeadingDash,
  value: R.ifElse(isDescending, sortDescending, sortAscending)
})

/**
 * @function sortStringToObject
 * Converts a comma-delmited sort string into a valid mongoose object sort
 * @param {string} sortString - The comma delimited sort string of fields to to
 *   sort by. The fields should be preceded by a `-` if the field is to be
 *   sorted in descending order.
 * @return {Object} Returns the object keyed by each field, and values are `1`
 *   if the field is to be sorted in ascending order, or `-1` if the field is to
 *   be sorted in descending order.
 */
const sortStringToObject = sortString => {
  return R.pipe(
    R.defaultTo(''),
    R.split(','),
    R.filter(Boolean),
    R.map(R.trim),
    R.reduce((sortObject, field) => {
      const { key, value } = getSortKeyValue(field)
      return R.assoc(key, value, sortObject)
    }, {})
  )(sortString)
}

module.exports = sortStringToObject
