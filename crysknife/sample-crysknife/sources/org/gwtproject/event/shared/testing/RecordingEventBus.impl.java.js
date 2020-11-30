goog.module('org.gwtproject.event.shared.testing.RecordingEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');

class RecordingEventBus extends EventBus {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<Event<?>>}*/
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_;
  /**@type {EventBus}*/
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_;
 }
 //Factory method corresponding to constructor 'RecordingEventBus()'.
 /** @return {!RecordingEventBus} */
 static $create__() {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__();
  return $instance;
 }
 //Initialization from constructor 'RecordingEventBus()'.
 
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__() {
  this.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(SimpleEventBus.$create__());
 }
 //Factory method corresponding to constructor 'RecordingEventBus(EventBus)'.
 /** @return {!RecordingEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(wrapped);
  return $instance;
 }
 //Initialization from constructor 'RecordingEventBus(EventBus)'.
 
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  this.$ctor__org_gwtproject_event_shared_EventBus__();
  this.$init___$p_org_gwtproject_event_shared_testing_RecordingEventBus();
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_ = wrapped;
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler);
 }
 
 m_clearFiredEvents__() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.clear();
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEvent__org_gwtproject_event_shared_Event(event);
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
 }
 /** @override */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source);
 }
 /** @return {boolean} */
 m_wasEventFired__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  return this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.contains(event);
 }
 /** @private */
 $init___$p_org_gwtproject_event_shared_testing_RecordingEventBus() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_ = /**@type {!HashSet<Event<?>>}*/ (HashSet.$create__());
 }
 
 static $clinit() {
  RecordingEventBus.$clinit = () =>{};
  RecordingEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RecordingEventBus;
 }
 
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
 }
 
}
$Util.$setClassMetadata(RecordingEventBus, 'org.gwtproject.event.shared.testing.RecordingEventBus');

exports = RecordingEventBus; 
//# sourceMappingURL=RecordingEventBus.js.map
