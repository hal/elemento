goog.module('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let WritableStreamDefaultController_$Overlay = goog.forwardDeclare('elemental2.dom.WritableStreamDefaultController.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');

/**
 * @implements {WritableStreamDefaultController}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(*):Promise<?void> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(*):Promise<?void>}*/
  this.f_$$fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor;
  this.$ctor__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor__elemental2_dom_WritableStreamDefaultController_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor__elemental2_dom_WritableStreamDefaultController_$JsFunction(/** ?function(*):Promise<?void> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor = fn;
 }
 /** @return {Promise<?void>} */
 error(/** * */ arg0) {
  let /** ?function(*):Promise<?void> */ $function;
  return ($function = this.f_$$fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.WritableStreamDefaultController$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=WritableStreamDefaultController$$LambdaAdaptor.js.map
