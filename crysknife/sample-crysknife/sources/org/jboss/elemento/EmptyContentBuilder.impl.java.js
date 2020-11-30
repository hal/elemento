goog.module('org.jboss.elemento.EmptyContentBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.jboss.elemento.ElementBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, EmptyContentBuilder<E>>}
  */
class EmptyContentBuilder extends ElementBuilder {
 /** @protected */
 constructor() {
  super();
 }
 /** @template E @return {!EmptyContentBuilder<E>} */
 static $create__elemental2_dom_HTMLElement(/** E */ element) {
  EmptyContentBuilder.$clinit();
  let $instance = new EmptyContentBuilder();
  $instance.$ctor__org_jboss_elemento_EmptyContentBuilder__elemental2_dom_HTMLElement(element);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_EmptyContentBuilder__elemental2_dom_HTMLElement(/** E */ element) {
  this.$ctor__org_jboss_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /** @override @return {EmptyContentBuilder<E>} */
 m_that__() {
  return this;
 }
 
 static $clinit() {
  EmptyContentBuilder.$clinit = () =>{};
  EmptyContentBuilder.$loadModules();
  ElementBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyContentBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EmptyContentBuilder, 'org.jboss.elemento.EmptyContentBuilder');

exports = EmptyContentBuilder; 
//# sourceMappingURL=EmptyContentBuilder.js.map
