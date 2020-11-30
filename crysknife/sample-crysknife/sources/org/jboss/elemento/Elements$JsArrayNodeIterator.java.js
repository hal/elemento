goog.module('org.jboss.elemento.Elements.JsArrayNodeIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.IllegalStateException');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Exceptions');

const JsArrayNodeIterator = goog.require('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
exports = JsArrayNodeIterator; 
