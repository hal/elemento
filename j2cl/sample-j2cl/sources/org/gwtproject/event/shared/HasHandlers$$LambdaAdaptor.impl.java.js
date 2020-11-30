goog.module('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');

/**
 * @implements {HasHandlers}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Event<?>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event<?>):void}*/
  this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction(/** ?function(Event<?>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor = fn;
 }
 
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HasHandlers$$LambdaAdaptor');

HasHandlers.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasHandlers$$LambdaAdaptor.js.map
