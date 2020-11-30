goog.module('io.crysknife.client.internal.AbstractEventHandler');

goog.require('java.lang.Object');
goog.require('javax.enterprise.event.Event');
goog.require('nativebootstrap.Util');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('java.util.function.Consumer');
goog.require('vmbootstrap.Casts');

const AbstractEventHandler = goog.require('io.crysknife.client.internal.AbstractEventHandler$impl');
exports = AbstractEventHandler; 
