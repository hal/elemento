goog.module('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let DatabaseCallback_$Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');

/**
 * @implements {DatabaseCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Database):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Database):void}*/
  this.f_$$fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor;
  this.$ctor__elemental2_dom_DatabaseCallback_$LambdaAdaptor__elemental2_dom_DatabaseCallback_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_DatabaseCallback_$LambdaAdaptor__elemental2_dom_DatabaseCallback_$JsFunction(/** ?function(Database):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor = fn;
 }
 
 handleEvent(/** Database */ arg0) {
  {
   let $function = this.f_$$fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor;
   $function(arg0);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.DatabaseCallback$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=DatabaseCallback$$LambdaAdaptor.js.map
