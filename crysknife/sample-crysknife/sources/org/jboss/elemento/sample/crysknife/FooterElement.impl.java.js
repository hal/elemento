goog.module('org.jboss.elemento.sample.crysknife.FooterElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @implements {IsElement<HTMLElement>}
  */
class FooterElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.f_info__org_jboss_elemento_sample_crysknife_FooterElement;
 }
 /** @return {!FooterElement} */
 static $create__() {
  FooterElement.$clinit();
  let $instance = new FooterElement();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {HTMLElement} */
 m_element__() {
  return this.f_info__org_jboss_elemento_sample_crysknife_FooterElement;
 }
 
 static $clinit() {
  FooterElement.$clinit = () =>{};
  FooterElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FooterElement;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FooterElement, 'org.jboss.elemento.sample.crysknife.FooterElement');

IsElement.$markImplementor(FooterElement);

exports = FooterElement; 
//# sourceMappingURL=FooterElement.js.map
