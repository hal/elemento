goog.module('javax.enterprise.event.Event.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Event = goog.require('javax.enterprise.event.Event$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Event<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):void}*/
  this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor;
  this.$ctor__javax_enterprise_event_Event_$LambdaAdaptor__javax_enterprise_event_Event_$JsFunction(fn);
 }
 
 $ctor__javax_enterprise_event_Event_$LambdaAdaptor__javax_enterprise_event_Event_$JsFunction(/** ?function(T):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor = fn;
 }
 
 m_fire__java_lang_Object(/** T */ arg0) {
  {
   let $function = this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.enterprise.event.Event$$LambdaAdaptor');

Event.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Event$$LambdaAdaptor.js.map
