goog.module('org.gwtproject.dom.builder.shared.ElementBuilderImpl');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase');
goog.require('org.gwtproject.dom.builder.shared.ElementBuilderImpl.FastPeekStack');
goog.require('org.gwtproject.dom.builder.shared.StylesBuilder');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.regexp.shared.RegExp');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('vmbootstrap.Exceptions');

const ElementBuilderImpl = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');
exports = ElementBuilderImpl; 
