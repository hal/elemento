goog.module('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DocumentRange_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentRange.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Range.$Overlay$impl');

/**
 * @implements {DocumentRange}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Range */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Range}*/
  this.f_$$fn__elemental2_dom_DocumentRange_$LambdaAdaptor;
  this.$ctor__elemental2_dom_DocumentRange_$LambdaAdaptor__elemental2_dom_DocumentRange_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_DocumentRange_$LambdaAdaptor__elemental2_dom_DocumentRange_$JsFunction(/** ?function():Range */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_DocumentRange_$LambdaAdaptor = fn;
 }
 /** @return {Range} */
 createRange() {
  let /** ?function():Range */ $function;
  return ($function = this.f_$$fn__elemental2_dom_DocumentRange_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.DocumentRange$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=DocumentRange$$LambdaAdaptor.js.map
