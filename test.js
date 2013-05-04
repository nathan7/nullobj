var test = require('tape')
  , nullobj = require('./')

test(function(t) {
  t.notOk('hasOwnProperty' in nullobj())
  t.notOk('constructor' in nullobj())
  t.notOk('hasOwnProperty' in nullobj())
  t.notOk('propertyIsEnumerable' in nullobj())
  t.notOk('isPrototypeOf' in nullobj())
  t.notOk('toLocaleString' in nullobj())
  t.notOk('toString' in nullobj())
  t.notOk('valueOf' in nullobj())

  t.end()
})
