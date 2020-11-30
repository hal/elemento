goog.module('org.jboss.elemento.sample.j2cl.Main');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLBodyElement.$Overlay');
goog.require('elemental2.dom.HashChangeEvent.$Overlay');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HtmlContentBuilder');
goog.require('org.jboss.elemento.sample.j2cl.ApplicationElement');
goog.require('org.jboss.elemento.sample.j2cl.FooterElement');
goog.require('org.jboss.elemento.sample.j2cl.TodoRepository');
goog.require('vmbootstrap.Casts');

const Main = goog.require('org.jboss.elemento.sample.j2cl.Main$impl');
exports = Main; 
