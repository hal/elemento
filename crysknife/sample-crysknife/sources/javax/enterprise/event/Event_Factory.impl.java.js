goog.module('javax.enterprise.event.Event_Factory$impl');

const AbstractEventFactory = goog.require('io.crysknife.client.internal.AbstractEventFactory$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class Event__Factory extends AbstractEventFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Event__Factory} */
 static $create__() {
  Event__Factory.$clinit();
  let $instance = new Event__Factory();
  $instance.$ctor__javax_enterprise_event_Event_Factory__();
  return $instance;
 }
 
 $ctor__javax_enterprise_event_Event_Factory__() {
  this.$ctor__io_crysknife_client_internal_AbstractEventFactory__();
 }
 /** @return {Event__Factory} */
 static m_get__() {
  Event__Factory.$clinit();
  if ($Equality.$same(Event__Factory.f_instance__javax_enterprise_event_Event_Factory_, null)) {
   Event__Factory.f_instance__javax_enterprise_event_Event_Factory_ = Event__Factory.$create__();
  }
  return Event__Factory.f_instance__javax_enterprise_event_Event_Factory_;
 }
 
 static $clinit() {
  Event__Factory.$clinit = () =>{};
  Event__Factory.$loadModules();
  AbstractEventFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event__Factory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(Event__Factory, 'javax.enterprise.event.Event_Factory');

/**@type {Event__Factory}*/
Event__Factory.f_instance__javax_enterprise_event_Event_Factory_;

exports = Event__Factory; 
//# sourceMappingURL=Event_Factory.js.map
