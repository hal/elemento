goog.module('elemental2.dom.EventListener.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__elemental2_dom_EventListener_$LambdaAdaptor;
  this.$ctor__elemental2_dom_EventListener_$LambdaAdaptor__elemental2_dom_EventListener_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_EventListener_$LambdaAdaptor__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_EventListener_$LambdaAdaptor = fn;
 }
 
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__elemental2_dom_EventListener_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.EventListener$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=EventListener$$LambdaAdaptor.js.map
