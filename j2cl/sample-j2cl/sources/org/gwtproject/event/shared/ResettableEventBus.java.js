goog.module('org.gwtproject.event.shared.ResettableEventBus');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.EventBus');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('vmbootstrap.Casts');

const ResettableEventBus = goog.require('org.gwtproject.event.shared.ResettableEventBus$impl');
exports = ResettableEventBus; 
