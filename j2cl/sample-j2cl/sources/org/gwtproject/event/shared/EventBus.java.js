goog.module('org.gwtproject.event.shared.EventBus');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');

const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');
exports = EventBus; 
