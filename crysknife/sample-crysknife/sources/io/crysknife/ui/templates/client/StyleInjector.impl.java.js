goog.module('io.crysknife.ui.templates.client.StyleInjector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLStyleElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLStyleElement.$Overlay$impl');
let FromString = goog.forwardDeclare('io.crysknife.ui.templates.client.StyleInjector.FromString$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StyleInjector extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!StyleInjector} */
 static $create__() {
  let $instance = new StyleInjector();
  $instance.$ctor__io_crysknife_ui_templates_client_StyleInjector__();
  return $instance;
 }
 
 $ctor__io_crysknife_ui_templates_client_StyleInjector__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FromString} */
 static m_fromString__java_lang_String(/** ?string */ styleBody) {
  StyleInjector.$clinit();
  return FromString.$create__java_lang_String(styleBody);
 }
 /** @return {HTMLStyleElement} */
 static m_createElement__java_lang_String(/** ?string */ contents) {
  StyleInjector.$clinit();
  let style = /**@type {HTMLStyleElement}*/ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("style"), HTMLStyleElement_$Overlay));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(style, "language", "text/css");
  style.innerHTML = contents;
  return style;
 }
 
 static $clinit() {
  StyleInjector.$clinit = () =>{};
  StyleInjector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StyleInjector;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLStyleElement_$Overlay = goog.module.get('elemental2.dom.HTMLStyleElement.$Overlay$impl');
  FromString = goog.module.get('io.crysknife.ui.templates.client.StyleInjector.FromString$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(StyleInjector, 'io.crysknife.ui.templates.client.StyleInjector');

exports = StyleInjector; 
//# sourceMappingURL=StyleInjector.js.map
