goog.module('org.gwtproject.event.legacy.shared.GwtEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('java.util.logging.Logger');
goog.require('org.gwtproject.event.legacy.shared.GwtEvent.Type');

const GwtEvent = goog.require('org.gwtproject.event.legacy.shared.GwtEvent$impl');
exports = GwtEvent; 
