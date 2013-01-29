var expect = require('chai').expect
  , nullobj = require('./')

it('should set the prototype to null or close', function() {
  expect(nullobj()).not.to.have.property('hasOwnProperty')
})
