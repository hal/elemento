goog.module('org.gwtproject.event.dom.client.BlurEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let BlurHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<BlurHandler>}
  */
class BlurEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BlurEvent} */
 static $create__() {
  BlurEvent.$clinit();
  let $instance = new BlurEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_BlurEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_BlurEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<BlurHandler>} */
 static m_getType__() {
  BlurEvent.$clinit();
  return BlurEvent.f_TYPE__org_gwtproject_event_dom_client_BlurEvent_;
 }
 /** @override @return {Type<BlurHandler>} */
 m_getAssociatedType__() {
  return BlurEvent.f_TYPE__org_gwtproject_event_dom_client_BlurEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_BlurHandler(/** BlurHandler */ handler) {
  handler.m_onBlur__org_gwtproject_event_dom_client_BlurEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** BlurHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_BlurHandler(/**@type {BlurHandler}*/ ($Casts.$to(arg0, BlurHandler)));
 }
 
 static $clinit() {
  BlurEvent.$clinit = () =>{};
  BlurEvent.$loadModules();
  DomEvent.$clinit();
  BlurEvent.f_TYPE__org_gwtproject_event_dom_client_BlurEvent_ = /**@type {!Type<BlurHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, BlurEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BlurEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  BlurHandler = goog.module.get('org.gwtproject.event.dom.client.BlurHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BlurEvent, 'org.gwtproject.event.dom.client.BlurEvent');

/**@type {Type<BlurHandler>}*/
BlurEvent.f_TYPE__org_gwtproject_event_dom_client_BlurEvent_;

exports = BlurEvent; 
//# sourceMappingURL=BlurEvent.js.map
