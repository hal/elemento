goog.module('org.jboss.elemento.Elements.JsArrayLikeIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('jsinterop.base.JsArrayLike.$Overlay');
goog.require('vmbootstrap.Exceptions');

const JsArrayLikeIterator = goog.require('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');
exports = JsArrayLikeIterator; 
