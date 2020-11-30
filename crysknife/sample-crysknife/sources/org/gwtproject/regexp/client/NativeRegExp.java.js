goog.module('org.gwtproject.regexp.client.NativeRegExp');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.regexp.shared.RegExp');
goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.core.JsRegExp.$Overlay');
goog.require('elemental2.core.JsString.$Overlay');
goog.require('java.util.Objects');
goog.require('jsinterop.base.Js');
goog.require('org.gwtproject.regexp.client.NativeMatchResult');
goog.require('org.gwtproject.regexp.client.NativeSplitResult');
goog.require('org.gwtproject.regexp.shared.MatchResult');
goog.require('org.gwtproject.regexp.shared.SplitResult');
goog.require('vmbootstrap.Casts');

const NativeRegExp = goog.require('org.gwtproject.regexp.client.NativeRegExp$impl');
exports = NativeRegExp; 
