goog.module('org.gwtproject.event.dom.client.LoadEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let LoadHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<LoadHandler>}
  */
class LoadEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LoadEvent} */
 static $create__() {
  LoadEvent.$clinit();
  let $instance = new LoadEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_LoadEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_LoadEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<LoadHandler>} */
 static m_getType__() {
  LoadEvent.$clinit();
  return LoadEvent.f_TYPE__org_gwtproject_event_dom_client_LoadEvent_;
 }
 /** @override @return {Type<LoadHandler>} */
 m_getAssociatedType__() {
  return LoadEvent.f_TYPE__org_gwtproject_event_dom_client_LoadEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_LoadHandler(/** LoadHandler */ handler) {
  handler.m_onLoad__org_gwtproject_event_dom_client_LoadEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** LoadHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_LoadHandler(/**@type {LoadHandler}*/ ($Casts.$to(arg0, LoadHandler)));
 }
 
 static $clinit() {
  LoadEvent.$clinit = () =>{};
  LoadEvent.$loadModules();
  DomEvent.$clinit();
  LoadEvent.f_TYPE__org_gwtproject_event_dom_client_LoadEvent_ = /**@type {!Type<LoadHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents, LoadEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoadEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  LoadHandler = goog.module.get('org.gwtproject.event.dom.client.LoadHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LoadEvent, 'org.gwtproject.event.dom.client.LoadEvent');

/**@type {Type<LoadHandler>}*/
LoadEvent.f_TYPE__org_gwtproject_event_dom_client_LoadEvent_;

exports = LoadEvent; 
//# sourceMappingURL=LoadEvent.js.map
