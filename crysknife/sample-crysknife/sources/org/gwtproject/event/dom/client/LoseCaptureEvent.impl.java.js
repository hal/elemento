goog.module('org.gwtproject.event.dom.client.LoseCaptureEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let LoseCaptureHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<LoseCaptureHandler>}
  */
class LoseCaptureEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LoseCaptureEvent} */
 static $create__() {
  LoseCaptureEvent.$clinit();
  let $instance = new LoseCaptureEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_LoseCaptureEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_LoseCaptureEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<LoseCaptureHandler>} */
 static m_getType__() {
  LoseCaptureEvent.$clinit();
  return LoseCaptureEvent.f_TYPE__org_gwtproject_event_dom_client_LoseCaptureEvent_;
 }
 /** @override @return {Type<LoseCaptureHandler>} */
 m_getAssociatedType__() {
  return LoseCaptureEvent.f_TYPE__org_gwtproject_event_dom_client_LoseCaptureEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_LoseCaptureHandler(/** LoseCaptureHandler */ handler) {
  handler.m_onLoseCapture__org_gwtproject_event_dom_client_LoseCaptureEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** LoseCaptureHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_LoseCaptureHandler(/**@type {LoseCaptureHandler}*/ ($Casts.$to(arg0, LoseCaptureHandler)));
 }
 
 static $clinit() {
  LoseCaptureEvent.$clinit = () =>{};
  LoseCaptureEvent.$loadModules();
  DomEvent.$clinit();
  LoseCaptureEvent.f_TYPE__org_gwtproject_event_dom_client_LoseCaptureEvent_ = /**@type {!Type<LoseCaptureHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_LOSECAPTURE__org_gwtproject_dom_client_BrowserEvents, LoseCaptureEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoseCaptureEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  LoseCaptureHandler = goog.module.get('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LoseCaptureEvent, 'org.gwtproject.event.dom.client.LoseCaptureEvent');

/**@type {Type<LoseCaptureHandler>}*/
LoseCaptureEvent.f_TYPE__org_gwtproject_event_dom_client_LoseCaptureEvent_;

exports = LoseCaptureEvent; 
//# sourceMappingURL=LoseCaptureEvent.js.map
