goog.module('org.gwtproject.event.shared.testing.CountingEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');
let KeyedCounter = goog.forwardDeclare('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');
let TypeSourcePair = goog.forwardDeclare('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair$impl');

class CountingEventBus extends EventBus {
 /** @protected */
 constructor() {
  super();
  /**@type {KeyedCounter<Type<?>>}*/
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {KeyedCounter<Type<?>>}*/
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {KeyedCounter<TypeSourcePair>}*/
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {EventBus}*/
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_;
 }
 //Factory method corresponding to constructor 'CountingEventBus()'.
 /** @return {!CountingEventBus} */
 static $create__() {
  CountingEventBus.$clinit();
  let $instance = new CountingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__();
  return $instance;
 }
 //Initialization from constructor 'CountingEventBus()'.
 
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus__() {
  this.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus(SimpleEventBus.$create__());
 }
 //Factory method corresponding to constructor 'CountingEventBus(EventBus)'.
 /** @return {!CountingEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  CountingEventBus.$clinit();
  let $instance = new CountingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus(wrapped);
  return $instance;
 }
 //Initialization from constructor 'CountingEventBus(EventBus)'.
 
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  this.$ctor__org_gwtproject_event_shared_EventBus__();
  this.$init___$p_org_gwtproject_event_shared_testing_CountingEventBus();
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_ = wrapped;
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {
  let superReg = this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(type);
  return this.m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(type, superReg);
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let superReg = this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler);
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(type);
  return this.m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(type, superReg);
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_fireEvent__org_gwtproject_event_shared_Event(event);
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(event.m_getAssociatedType__());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(event.m_getAssociatedType__(), null));
 }
 /** @override */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source);
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(event.m_getAssociatedType__());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(event.m_getAssociatedType__(), source));
 }
 /** @return {number} */
 m_getFiredCount__org_gwtproject_event_shared_Event_Type(/** Type<?> */ type) {
  return this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(type);
 }
 /** @return {number} */
 m_getFiredCountFromSource__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<?> */ type, /** * */ source) {
  return this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, source));
 }
 /** @return {number} */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type(/** Type<?> */ type) {
  return this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(type);
 }
 /** @template H @return {HandlerRegistration} */
 m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(/** Type<H> */ type, /** HandlerRegistration */ superReg) {
  return HandlerRegistration.$adapt(() =>{
   this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_decrement__java_lang_Object_$pp_org_gwtproject_event_shared_testing(type);
   superReg.m_removeHandler__();
  });
 }
 /** @private */
 $init___$p_org_gwtproject_event_shared_testing_CountingEventBus() {
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<Type<?>>}*/ (KeyedCounter.$create__());
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<Type<?>>}*/ (KeyedCounter.$create__());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<TypeSourcePair>}*/ (KeyedCounter.$create__());
 }
 
 static $clinit() {
  CountingEventBus.$clinit = () =>{};
  CountingEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CountingEventBus;
 }
 
 static $loadModules() {
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
  KeyedCounter = goog.module.get('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');
  TypeSourcePair = goog.module.get('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair$impl');
 }
 
}
$Util.$setClassMetadata(CountingEventBus, 'org.gwtproject.event.shared.testing.CountingEventBus');

exports = CountingEventBus; 
//# sourceMappingURL=CountingEventBus.js.map
