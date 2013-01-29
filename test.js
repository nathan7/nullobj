var test = require('tape')
  , nullobj = require('./')

test(function(t) {
  t.notOk(Object.prototype.hasOwnProperty.call(nullobj(), 'hasOwnProperty'))
  t.end()
})
