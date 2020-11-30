goog.module('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SelectorFunction {
 /** @abstract @return {Element} */
 m_select__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ context, /** ?string */ identifier) {}
 /** @return {SelectorFunction} */
 static $adapt(/** ?function(HTMLElement, ?string):Element */ fn) {
  SelectorFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SelectorFunction.$clinit = () =>{};
  SelectorFunction.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SelectorFunction, 'io.crysknife.ui.templates.client.TemplateUtil$SelectorFunction');

SelectorFunction.$markImplementor(/** @type {Function} */ (SelectorFunction));

exports = SelectorFunction; 
//# sourceMappingURL=TemplateUtil$SelectorFunction.js.map
