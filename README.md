# kuali-mongoose-helpers

Generic functions that make dealing with kuali specific mongoose standards
easier to maintain.

# Installation

```
npm install kuali-mongoose-helpers
```

# API



## `toTimestamp(date)`

Returns the number, representative of the number of milliseconds since the Unix
Epoch.

- `date` {Date} - The date to convert

<details>
<summary>Examples:</summary>

```js
const { toTimestamp } = require('kuali-mongoose-helpers')

toTimestamp(new Date(10)) === 10
toTimestamp(new Date('2017-10-18T20:50:02.551Z')) === 1508359802551
```
</details>



## `renameKey(oldKey, newKey, object)`

Moves one key from an object to a new key.

- `oldKey` {String} - The key to move from
- `newKey` {String} - The key to move to
- `object` {Object} - The object to modify (it actually returns a new object.
  This function treats the object immutably)

<details>
<summary>Examples:</summary>

```js
const { renameKey } = require('kuali-mongoose-helpers')

renameKey('_id', 'id', { _id: 'foobar', name: 'hello' }) // -> { id: 'foobar', name: 'hello' }
```
</details>



## `sortStringToObject`

Converts a comma delimited sort string into an object you can pass into
`mongoose.find().sort()`.

- `sortString` {String} - The string to convert. Should be a comma delimited
  string of fields.

<details>
<summary>Examples:</summary>

```js
const { sortStringToObject } = require('kuali-mongoose-helpers')

sortStringToObject('name,-createdAt') // -> { name: 1, createdAt: -1 }
```
</details>
