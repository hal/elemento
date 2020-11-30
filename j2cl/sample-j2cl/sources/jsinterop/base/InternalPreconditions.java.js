goog.module('jsinterop.base.InternalPreconditions');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.AssertionError');
goog.require('java.lang.ClassCastException');
goog.require('java.lang.Exception');
goog.require('java.lang.String');
goog.require('vmbootstrap.Exceptions');

const InternalPreconditions = goog.require('jsinterop.base.InternalPreconditions$impl');
exports = InternalPreconditions; 
