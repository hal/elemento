goog.module('org.jboss.elemento.TextContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class TextContent {
 /** @abstract @return {B} */
 m_textContent__java_lang_String(/** ?string */ text) {}
 /** @template E, B @return {B} */
 static m_textContent__$default__org_jboss_elemento_TextContent__java_lang_String(/** !TextContent<E, B> */ $thisArg, /** ?string */ text) {
  TextContent.$clinit();
  /**@type {HTMLElement}*/ ($thisArg.m_element__()).textContent = text;
  return $thisArg.m_that__();
 }
 
 static $clinit() {
  TextContent.$clinit = () =>{};
  TextContent.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_TextContent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_TextContent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextContent, 'org.jboss.elemento.TextContent');

TextContent.$markImplementor(/** @type {Function} */ (TextContent));

exports = TextContent; 
//# sourceMappingURL=TextContent.js.map
