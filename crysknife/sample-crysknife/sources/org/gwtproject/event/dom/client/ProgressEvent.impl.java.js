goog.module('org.gwtproject.event.dom.client.ProgressEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let ProgressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ProgressHandler>}
  */
class ProgressEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ProgressEvent} */
 static $create__() {
  ProgressEvent.$clinit();
  let $instance = new ProgressEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ProgressEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_ProgressEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<ProgressHandler>} */
 static m_getType__() {
  ProgressEvent.$clinit();
  return ProgressEvent.f_TYPE__org_gwtproject_event_dom_client_ProgressEvent_;
 }
 /** @override @return {Type<ProgressHandler>} */
 m_getAssociatedType__() {
  return ProgressEvent.f_TYPE__org_gwtproject_event_dom_client_ProgressEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_ProgressHandler(/** ProgressHandler */ handler) {
  handler.m_onProgress__org_gwtproject_event_dom_client_ProgressEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** ProgressHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ProgressHandler(/**@type {ProgressHandler}*/ ($Casts.$to(arg0, ProgressHandler)));
 }
 
 static $clinit() {
  ProgressEvent.$clinit = () =>{};
  ProgressEvent.$loadModules();
  DomEvent.$clinit();
  ProgressEvent.f_TYPE__org_gwtproject_event_dom_client_ProgressEvent_ = /**@type {!Type<ProgressHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_PROGRESS__org_gwtproject_dom_client_BrowserEvents, ProgressEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  ProgressHandler = goog.module.get('org.gwtproject.event.dom.client.ProgressHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ProgressEvent, 'org.gwtproject.event.dom.client.ProgressEvent');

/**@type {Type<ProgressHandler>}*/
ProgressEvent.f_TYPE__org_gwtproject_event_dom_client_ProgressEvent_;

exports = ProgressEvent; 
//# sourceMappingURL=ProgressEvent.js.map
