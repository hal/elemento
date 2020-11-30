goog.module('io.crysknife.ui.templates.client.StyleInjector');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLStyleElement.$Overlay');
goog.require('io.crysknife.ui.templates.client.StyleInjector.FromString');
goog.require('vmbootstrap.Casts');

const StyleInjector = goog.require('io.crysknife.ui.templates.client.StyleInjector$impl');
exports = StyleInjector; 
