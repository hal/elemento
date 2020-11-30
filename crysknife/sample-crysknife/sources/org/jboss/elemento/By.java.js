goog.module('org.jboss.elemento.By');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Equality');
goog.require('org.jboss.elemento.By.AttributeOperator');
goog.require('org.jboss.elemento.By.ByAttribute');
goog.require('org.jboss.elemento.By.ByClassname');
goog.require('org.jboss.elemento.By.ByCombination');
goog.require('org.jboss.elemento.By.ByData');
goog.require('org.jboss.elemento.By.ByElement');
goog.require('org.jboss.elemento.By.ByGroup');
goog.require('org.jboss.elemento.By.ById');
goog.require('org.jboss.elemento.By.BySelector');
goog.require('org.jboss.elemento.By.Combinator');
goog.require('org.jboss.elemento.IsElement');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const By = goog.require('org.jboss.elemento.By$impl');
exports = By; 
