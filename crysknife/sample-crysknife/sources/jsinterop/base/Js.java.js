goog.module('jsinterop.base.Js');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.Class');
goog.require('jsinterop.base.Any.$Overlay');
goog.require('jsinterop.base.InternalJsUtil');
goog.require('jsinterop.base.InternalPreconditions');
goog.require('jsinterop.base.JsArrayLike.$Overlay');
goog.require('jsinterop.base.JsConstructorFn.$Overlay');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Primitives');

const Js = goog.require('jsinterop.base.Js$impl');
exports = Js; 
