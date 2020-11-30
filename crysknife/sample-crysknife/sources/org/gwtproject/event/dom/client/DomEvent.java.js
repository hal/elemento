goog.module('org.gwtproject.event.dom.client.DomEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasNativeEvent');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.util.List');
goog.require('jsinterop.base.Js');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.dom.client.DomEvent.Type');
goog.require('org.gwtproject.event.legacy.shared.EventHandler');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');
exports = DomEvent; 
