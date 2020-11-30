goog.module('elemental2.dom.BarProp.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.BarProp.$Overlay$impl');

/**
 * @implements {BarProp}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():boolean}*/
  this.f_$$fn__elemental2_dom_BarProp_$LambdaAdaptor;
  this.$ctor__elemental2_dom_BarProp_$LambdaAdaptor__elemental2_dom_BarProp_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_BarProp_$LambdaAdaptor__elemental2_dom_BarProp_$JsFunction(/** ?function():boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_BarProp_$LambdaAdaptor = fn;
 }
 /** @return {boolean} */
 get visible() {
  let /** ?function():boolean */ $function;
  return ($function = this.f_$$fn__elemental2_dom_BarProp_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.BarProp$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=BarProp$$LambdaAdaptor.js.map
