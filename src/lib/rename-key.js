'use strict'

const R = require('ramda')

/**
 * @function renameKey
 * Renames a key to a new key, like from `_id` to `id`
 * @param {string} oldKey - The old key to remove
 * @param {string} newKey - The new key to add
 * @param {Object} object - The object to make the modification to
 * @return {Object} A new object, who has the new key instead of the old one.
 *   The value should stay the same
 */
const renameKey = R.curry((oldKey, newKey, object) => {
  return R.pipe(
    R.assoc(newKey, R.prop(oldKey, object)), // Add new key
    R.dissoc(oldKey) // Remove old key
  )(object)
})

module.exports = renameKey
