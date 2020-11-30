goog.module('org.jboss.elemento.Elements.JsArrayElementIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.IllegalStateException');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const JsArrayElementIterator = goog.require('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
exports = JsArrayElementIterator; 
