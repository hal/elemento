goog.module('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction.$LambdaAdaptor$impl');

const SelectorFunction = goog.require('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @implements {SelectorFunction}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(HTMLElement, ?string):Element */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HTMLElement, ?string):Element}*/
  this.f_$$fn__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$LambdaAdaptor;
  this.$ctor__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$LambdaAdaptor__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$JsFunction(fn);
 }
 
 $ctor__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$LambdaAdaptor__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$JsFunction(/** ?function(HTMLElement, ?string):Element */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$LambdaAdaptor = fn;
 }
 /** @return {Element} */
 m_select__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ arg0, /** ?string */ arg1) {
  let /** ?function(HTMLElement, ?string):Element */ $function;
  return ($function = this.f_$$fn__io_crysknife_ui_templates_client_TemplateUtil_SelectorFunction_$LambdaAdaptor, $function(arg0, arg1));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'io.crysknife.ui.templates.client.TemplateUtil$SelectorFunction$$LambdaAdaptor');

SelectorFunction.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TemplateUtil$SelectorFunction$$LambdaAdaptor.js.map
