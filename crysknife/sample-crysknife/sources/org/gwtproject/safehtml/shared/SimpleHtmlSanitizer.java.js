goog.module('org.gwtproject.safehtml.shared.SimpleHtmlSanitizer');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.HtmlSanitizer');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.Arrays');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlString');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');

const SimpleHtmlSanitizer = goog.require('org.gwtproject.safehtml.shared.SimpleHtmlSanitizer$impl');
exports = SimpleHtmlSanitizer; 
