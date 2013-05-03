/*jshint scripturl:true proto:true */

// taken from https://github.com/kriskowal/es5-shim/blob/master/es5-sham.js
// Copyright 2009-2012 by contributors, MIT License
// pretty much a straight ripoff of the Object.create from es5-sham
// Contributed by Brandon Benvie, October, 2012


function Empty() {}

if (Object.prototype.__proto === null || typeof document == 'undefined') {
  module.exports = function nullobj() {
    var obj = {}
    obj.__proto__ = null
    return obj
  }
}
else {
  var iframe = document.createElement('iframe')
    , parent = document.body || document.documentElement
  iframe.style.display = 'none'
  parent.appendChild(iframe)
  iframe.src = 'javascript:'
  var empty = iframe.contentWindow.Object.prototype
  parent.removeChild(iframe)
  iframe = null
  ;delete empty.constructor
  ;delete empty.hasOwnProperty
  ;delete empty.propertyIsEnumerable
  ;delete empty.isPrototypeOf
  ;delete empty.toLocaleString
  ;delete empty.toString
  ;delete empty.valueOf
  empty.__proto__ = null

  Empty.prototype = empty
  module.exports = function nullobj_shim() {
    return new Empty()
  }
}
