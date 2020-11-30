goog.module('org.gwtproject.event.shared.testing.CountingEventBus');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.EventBus');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.SimpleEventBus');
goog.require('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter');
goog.require('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair');

const CountingEventBus = goog.require('org.gwtproject.event.shared.testing.CountingEventBus$impl');
exports = CountingEventBus; 
