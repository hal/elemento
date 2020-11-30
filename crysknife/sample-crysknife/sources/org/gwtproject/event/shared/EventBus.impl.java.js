goog.module('org.gwtproject.event.shared.EventBus$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @abstract
 * @implements {HasHandlers}
  */
class EventBus extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_shared_EventBus__() {
  this.$ctor__java_lang_Object__();
 }
 /** @template H */
 static m_dispatchEvent__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<H> */ event, /** H */ handler) {
  EventBus.$clinit();
  event.m_dispatch__java_lang_Object(handler);
 }
 
 static m_setSourceOfEvent__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {
  EventBus.$clinit();
  event.m_setSource__java_lang_Object(source);
 }
 /** @abstract @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {}
 /** @abstract @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {}
 /** @abstract @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {}
 /** @abstract */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {}
 
 static $clinit() {
  EventBus.$clinit = () =>{};
  EventBus.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventBus;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventBus, 'org.gwtproject.event.shared.EventBus');

HasHandlers.$markImplementor(EventBus);

exports = EventBus; 
//# sourceMappingURL=EventBus.js.map
