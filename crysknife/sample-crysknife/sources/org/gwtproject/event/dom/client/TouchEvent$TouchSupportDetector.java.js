goog.module('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Casts');

const TouchSupportDetector = goog.require('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector$impl');
exports = TouchSupportDetector; 
