var test = require('tape')
  , nullobj = require('./')

test(function(t) {
  t.notOk('hasOwnProperty' in nullobj(), "nullobj shouldn't have hasOwnProperty")
  t.notOk('constructor' in nullobj(), "nullobj shouldn't have constructor")
  t.notOk('hasOwnProperty' in nullobj(), "nullobj shouldn't have hasOwnProperty")
  t.notOk('propertyIsEnumerable' in nullobj(), "nullobj shouldn't have propertyIsEnumerable")
  t.notOk('isPrototypeOf' in nullobj(), "nullobj shouldn't have isPrototypeOf")
  t.notOk('toLocaleString' in nullobj(), "nullobj shouldn't have toLocaleString")
  t.notOk('toString' in nullobj(), "nullobj shouldn't have toString")
  t.notOk('valueOf' in nullobj(), "nullobj shouldn't have valueOf")

  t.end()
})
