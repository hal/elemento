goog.module('elemental2.dom.CustomElementRegistry.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DefineOptionsType_$Overlay = goog.forwardDeclare('elemental2.dom.CustomElementRegistry.DefineOptionsType.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsConstructorFn.$Overlay$impl');

class CustomElementRegistry_$Overlay {
 
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class__elemental2_dom_CustomElementRegistry_DefineOptionsType(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass, /** ? */ options) {
  CustomElementRegistry_$Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(klass)), options);
 }
 
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass) {
  CustomElementRegistry_$Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(klass)));
 }
 
 static $clinit() {
  CustomElementRegistry_$Overlay.$clinit = () =>{};
  CustomElementRegistry_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomElementRegistry;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(CustomElementRegistry_$Overlay, 'CustomElementRegistry');

exports = CustomElementRegistry_$Overlay; 
//# sourceMappingURL=CustomElementRegistry$$Overlay.js.map
