goog.module('javax.enterprise.event.Event$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.event.Event.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Event {
 /** @abstract */
 m_fire__java_lang_Object(/** T */ var1) {}
 /** @template T @return {Event<T>} */
 static $adapt(/** ?function(T):void */ fn) {
  Event.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_enterprise_event_Event = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_event_Event;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.event.Event.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Event, 'javax.enterprise.event.Event');

Event.$markImplementor(/** @type {Function} */ (Event));

exports = Event; 
//# sourceMappingURL=Event.js.map
