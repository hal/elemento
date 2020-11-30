goog.module('org.gwtproject.event.dom.client.TouchEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HumanInputEvent');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JsArray.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Touch.$Overlay');
goog.require('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector');
goog.require('org.gwtproject.event.legacy.shared.EventHandler');

const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');
exports = TouchEvent; 
