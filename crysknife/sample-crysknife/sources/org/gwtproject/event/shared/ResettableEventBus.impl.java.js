goog.module('org.gwtproject.event.shared.ResettableEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ResettableEventBus extends EventBus {
 /** @protected */
 constructor() {
  super();
  /**@type {EventBus}*/
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_;
  /**@type {Set<HandlerRegistration>}*/
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_;
 }
 /** @return {!ResettableEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrappedBus) {
  ResettableEventBus.$clinit();
  let $instance = new ResettableEventBus();
  $instance.$ctor__org_gwtproject_event_shared_ResettableEventBus__org_gwtproject_event_shared_EventBus(wrappedBus);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_ResettableEventBus__org_gwtproject_event_shared_EventBus(/** EventBus */ wrappedBus) {
  this.$ctor__org_gwtproject_event_shared_EventBus__();
  this.$init___$p_org_gwtproject_event_shared_ResettableEventBus();
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_ = wrappedBus;
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {
  let rtn = this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
  return this.m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(rtn);
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let rtn = this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler);
  return this.m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(rtn);
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /** @override */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source);
 }
 
 m_removeHandlers__() {
  let it = this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.m_iterator__();
  while (it.m_hasNext__()) {
   let r = /**@type {HandlerRegistration}*/ ($Casts.$to(it.m_next__(), HandlerRegistration));
   it.m_remove__();
   r.m_removeHandler__();
  }
 }
 /** @return {number} */
 m_getRegistrationSize___$pp_org_gwtproject_event_shared() {
  return this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.size();
 }
 /** @return {HandlerRegistration} */
 m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(/** HandlerRegistration */ registration) {
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.add(registration);
  return HandlerRegistration.$adapt(() =>{
   this.m_doUnregisterHandler__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(registration);
  });
 }
 
 m_doUnregisterHandler__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(/** HandlerRegistration */ registration) {
  if (this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.contains(registration)) {
   registration.m_removeHandler__();
   this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.remove(registration);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_event_shared_ResettableEventBus() {
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_ = /**@type {!HashSet<HandlerRegistration>}*/ (HashSet.$create__());
 }
 
 static $clinit() {
  ResettableEventBus.$clinit = () =>{};
  ResettableEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResettableEventBus;
 }
 
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ResettableEventBus, 'org.gwtproject.event.shared.ResettableEventBus');

exports = ResettableEventBus; 
//# sourceMappingURL=ResettableEventBus.js.map
