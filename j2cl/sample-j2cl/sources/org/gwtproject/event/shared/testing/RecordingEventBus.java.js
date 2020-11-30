goog.module('org.gwtproject.event.shared.testing.RecordingEventBus');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.EventBus');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.SimpleEventBus');

const RecordingEventBus = goog.require('org.gwtproject.event.shared.testing.RecordingEventBus$impl');
exports = RecordingEventBus; 
