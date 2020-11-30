goog.module('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @implements {HandlerRegistration}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor = fn;
 }
 
 m_removeHandler__() {
  {
   let $function = this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
   $function();
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HandlerRegistration$$LambdaAdaptor');

HandlerRegistration.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HandlerRegistration$$LambdaAdaptor.js.map
