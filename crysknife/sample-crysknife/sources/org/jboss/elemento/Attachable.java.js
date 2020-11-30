goog.module('org.jboss.elemento.Attachable');

goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.jboss.elemento.Attachable.$LambdaAdaptor');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.ObserverCallback');

const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
exports = Attachable; 
