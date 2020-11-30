goog.module('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DocumentEvent_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');

/**
 * @implements {DocumentEvent}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string):Event */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):Event}*/
  this.f_$$fn__elemental2_dom_DocumentEvent_$LambdaAdaptor;
  this.$ctor__elemental2_dom_DocumentEvent_$LambdaAdaptor__elemental2_dom_DocumentEvent_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_DocumentEvent_$LambdaAdaptor__elemental2_dom_DocumentEvent_$JsFunction(/** ?function(?string):Event */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_DocumentEvent_$LambdaAdaptor = fn;
 }
 /** @return {Event} */
 createEvent(/** ?string */ arg0) {
  let /** ?function(?string):Event */ $function;
  return ($function = this.f_$$fn__elemental2_dom_DocumentEvent_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.DocumentEvent$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=DocumentEvent$$LambdaAdaptor.js.map
