goog.module('org.jboss.elemento.Id');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Objects');
goog.require('java.util.function.Function');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const Id = goog.require('org.jboss.elemento.Id$impl');
exports = Id; 
